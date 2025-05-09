"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest, handleImageUpload } from "@/utils/index";
import TextInput from "@/components/UI/TextInput";
import Loading from "@/components/UI/Loading";
import useUserStore from "@/store/useUserStore";

interface BookData {
  userId: string;
  filename: string;
  image: string;
  course: string;
  language: string;
  type: string;
  desc: string;
}

const UploadBookForm = () => {
  const user = useUserStore((state) => state.user);

  const [errMsg, setErrMsg] = useState<{
    message: string;
    status: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookData>({ mode: "onChange" });

  const onSubmit = async (data: BookData) => {
    setIsSubmitting(true);
    setErrMsg(null);

    if (!user?.id) {
      setErrMsg({
        message: "User not found. Please log in.",
        status: "failed",
      });
      setIsSubmitting(false);
      return;
    }

    if (!imageFile) {
      setErrMsg({ message: "Please upload an image file.", status: "failed" });
      setIsSubmitting(false);
      return;
    }

    try {
      const uploadedUrl = await handleImageUpload(imageFile);

      if (!uploadedUrl) {
        setErrMsg({ message: "Image upload failed.", status: "failed" });
        setIsSubmitting(false);
        return;
      }

      const payload = {
        ...data,
        image: uploadedUrl,
        userId: user.id,
      };

      const res = await apiRequest({
        url: "/note/upload-book",
        data: payload,
        method: "POST",
      });

      setErrMsg(res);
      reset(); // Clear form after successful upload
      setImageFile(null); // Clear image
      setIsSubmitting(false);
    } catch (error: any) {
      console.log(error);
      setErrMsg({ message: "Something went wrong.", status: "failed" });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full justify-center mb-8">
      <div className="w-full lg:w-[70%] flex flex-col items-center px-6">
        <div className="w-full max-w-4xl bg-[#cbd0dc] p-10 rounded-sm shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-black mb-6">
            Upload Book
          </h2>

          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* File Name */}
            <TextInput
              name="filename"
              label="File Name"
              placeholder="Enter File Name"
              type="text"
              styles="w-full"
              register={register("filename", {
                required: "File Name is required!",
              })}
              error={errors.filename?.message || ""}
            />

            {/* Language + Upload Image */}
            <div className="flex gap-4">
              <TextInput
                name="language"
                label="Language"
                placeholder="Language"
                type="text"
                styles="w-full"
                register={register("language", {
                  required: "Language is required!",
                })}
                error={errors.language?.message || ""}
              />
              <div className="flex flex-col w-1/2 mt-6">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file && file.type.startsWith("image/")) {
                      setImageFile(file);
                    } else {
                      setErrMsg({
                        message: "Only image files are allowed.",
                        status: "failed",
                      });
                    }
                  }}
                />
              </div>
            </div>

            {/* Course */}
            <TextInput
              name="course"
              label="Course"
              placeholder="Enter Course Name"
              type="text"
              styles="w-full"
              register={register("course", { required: "Course is required!" })}
              error={errors.course?.message || ""}
            />

            {/* Type */}
            <TextInput
              name="type"
              label="Type"
              placeholder="Enter Book Type (e.g. Theory, Practical)"
              type="text"
              styles="w-full"
              register={register("type", { required: "Type is required!" })}
              error={errors.type?.message || ""}
            />

            {/* Description */}
            <TextInput
              name="desc"
              label="Description"
              placeholder="Short Description"
              type="text"
              styles="w-full"
              register={register("desc", {
                required: "Description is required!",
              })}
              error={errors.desc?.message || ""}
            />

            {/* Error Message */}
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg.message}
              </span>
            )}

            {/* Submit Button */}
            {isSubmitting ? (
              <Loading />
            ) : (
              <div className="w-1/3">
                <button className="rounded-md w-full bg-secondary hover:bg-[#0091d5] transition duration-300 py-3 md:px-6 px-4 text-sm md:text-base font-medium text-primary">
                  Upload
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadBookForm;
