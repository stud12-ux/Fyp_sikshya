"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/utils/index";
import TextInput from "@/components/UI/TextInput";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Loading from "@/components/UI/Loading";
import { handleFileUpload } from "@/utils/index"; // make sure this is the updated one for PDF
import useUserStore from "@/store/useUserStore";
import UploadBookForm from "../upload-book/page";

interface NoteData {
  userId: string;
  name: string;
  pdf: string; // will store the uploaded PDF URL
  desc: string;
}

const BookForm = () => {
  const user = useUserStore((state) => state.user);
  const [isNote, setIsNote] = useState(false);
  // false means "Book" by default. If true, it's "Note"

  const [errMsg, setErrMsg] = useState<{
    message: string;
    status: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<NoteData>({ mode: "onChange" });

  const onSubmit = async (data: NoteData) => {
    setIsSubmitting(true);
    try {
      if (!user?.id) {
        setErrMsg({
          message: "User not found. Please log in.",
          status: "failed",
        });
        setIsSubmitting(false);
        return;
      }

      if (!pdfFile) {
        setErrMsg({ message: "Please upload a PDF file.", status: "failed" });
        setIsSubmitting(false);
        return;
      }

      // Read PDF as base64
      const reader = new FileReader();
      reader.readAsDataURL(pdfFile);

      reader.onload = async () => {
        const base64PDF = reader.result;

        const payload = {
          ...data,
          pdf: base64PDF, // base64 encoded string
          userId: user.id,
        };

        const res = await apiRequest({
          url: "/note/upload-pdf",
          data: payload,
          method: "POST",
        });

        setErrMsg(res);
        setIsSubmitting(false);
      };

      reader.onerror = () => {
        setErrMsg({ message: "Failed to read PDF file.", status: "failed" });
        setIsSubmitting(false);
      };
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Two buttons at the top */}
      <div className="flex justify-center gap-4 my-6">
        <button
          type="button"
          onClick={() => setIsNote(true)}
          className={`px-4 py-2 rounded-md ${
            isNote ? "bg-[#0e2a47] text-white" : "bg-gray-300 text-black"
          }`}
        >
          Upload Note
        </button>
        <button
          type="button"
          onClick={() => setIsNote(false)}
          className={`px-4 py-2 rounded-md ${
            !isNote ? "bg-[#0e2a47] text-white" : "bg-gray-300 text-black"
          }`}
        >
          Upload Book
        </button>
      </div>
      {isNote ? (
        <div className="w-full lg:w-[55%] flex items-center justify-center px-6">
          <div className="w-full max-w-lg bg-[#cbd0dc] p-8 rounded-sm shadow-md">
            <h2 className="text-3xl font-extrabold text-center text-black">
              Upload Note
            </h2>

            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name */}
              <TextInput
                name="name"
                label="Name"
                placeholder="Book Name"
                type="text"
                styles="w-full"
                register={register("name", {
                  required: "Name is required!",
                })}
                error={errors.name ? errors.name?.message : ""}
              />

              {/* PDF File Upload */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Upload PDF
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file && file.type === "application/pdf") {
                      setPdfFile(file);
                    } else {
                      setErrMsg({
                        message: "Only PDF files are allowed.",
                        status: "failed",
                      });
                    }
                  }}
                />
              </div>

              {/* Description */}
              <TextInput
                name="desc"
                label="Description"
                placeholder="Description"
                type="text"
                styles="w-full"
                register={register("desc", {
                  required: "Description is required!",
                })}
                error={errors.desc ? errors.desc?.message : ""}
              />

              {/* Error Message */}
              {errMsg?.message && (
                <span
                  className={`text-sm ${
                    errMsg?.status === "failed"
                      ? "text-[#f64949fe]"
                      : "text-[#2ba150fe]"
                  } mt-0.5`}
                >
                  {errMsg?.message}
                </span>
              )}

              {/* Submit Button */}
              {isSubmitting ? (
                <Loading />
              ) : (
                <PrimaryButton
                  className="w-full bg-[#0e2a47] text-white py-3 rounded-md"
                  text="Upload"
                />
              )}
            </form>
          </div>
        </div>
      ) : (
        <UploadBookForm />
      )}
    </div>
  );
};

export default BookForm;
