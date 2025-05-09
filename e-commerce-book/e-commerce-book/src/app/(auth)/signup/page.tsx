"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/utils/index";
import Link from "next/link";
import TextInput from "@/components/UI/TextInput";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Loading from "@/components/UI/Loading";
import signup from "@/assets/images/signup.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const Register = () => {
  const [errMsg, setErrMsg] = useState<{
    message: string;
    status: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await apiRequest({
        url: "/auth/signup",
        data: data,
        method: "POST",
      });

      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        setErrMsg(res);
        setTimeout(() => {
          window.location.replace("/login");
        }, 5000);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full ">
      {/* LEFT - FORM */}
      <div className="w-full lg:w-[55%] flex items-center justify-center bg-[#0c2d48] px-6">
        <div className="w-full max-w-lg bg-[#cbd0dc] p-8 rounded-sm shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-black">
            SIGN UP
          </h2>
          <p className="text-center text-base font-medium text-gray-700 mb-6">
            Get Started Now
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* First & Last Name */}
            <div className="flex flex-col lg:flex-row gap-2">
              <TextInput
                name="firstName"
                label="First Name"
                placeholder="First Name"
                type="text"
                styles="w-full"
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />
              <TextInput
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                type="text"
                styles="w-full"
                register={register("lastName", {
                  required: "Last Name is required!",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>

            {/* Email */}
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full"
              error={errors.email ? errors.email.message : ""}
            />

            {/* Password & Confirm Password */}
            <div className="flex flex-col lg:flex-row gap-2">
              <TextInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />
              <TextInput
                label="Confirm Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("cPassword" as any, {
                  validate: (value) => {
                    const { password } = getValues();
                    if (password !== value) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
            </div>
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}
            {isSubmitting ? (
              <Loading />
            ) : (
              <PrimaryButton
                className="w-full bg-[#0e2a47] text-white py-3 rounded-md"
                text="Create Account"
              />
            )}
          </form>

          <p className="text-gray-600 text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#065ad8] font-medium underline ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* RIGHT - IMAGE */}
      <div
        className="block w-[45%] h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${signup.src})`,
        }}
      ></div>
    </div>
  );
};

export default Register;
