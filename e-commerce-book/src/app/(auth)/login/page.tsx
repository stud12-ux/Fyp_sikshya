"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/UI/TextInput";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Loading from "@/components/UI/Loading";
import Link from "next/link";
import login from "@/assets/images/Login.png";
import { apiRequest } from "@/utils";
import useUserStore from "@/store/useUserStore";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginUser = useUserStore((state) => state.login); // get the login function from zustand

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await apiRequest({
        url: "/auth/login",
        data,
        method: "POST",
      });

      if (res?.user) {
        setErrMsg("");
        loginUser(res.user);

        window.location.replace("/");
      } else {
        setErrMsg(res?.message || "Login failed! Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setErrMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[55%] flex items-center justify-center bg-[#0c2d48] px-6">
        <div className="w-full max-w-md bg-[#cbd0dc] p-8 rounded-sm shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-black">
            LOGIN
          </h2>
          <p className="text-center text-lg font-medium text-gray-700 mt-1">
            Welcome Back
          </p>

          <form
            className="mt-6 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              name="email"
              placeholder="Username"
              label=""
              type="text"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full rounded-lg"
              error={errors.email?.message}
            />

            <TextInput
              name="password"
              placeholder="Password"
              label=""
              type="password"
              styles="w-full rounded-lg"
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password?.message}
            />

            {/* Error Message */}
            {errMsg && <p className="text-sm text-red-500">{errMsg}</p>}

            {/* Submit Button */}
            {isSubmitting ? (
              <Loading />
            ) : (
              <PrimaryButton
                className="w-full bg-[#0e2a47] text-white py-3 rounded-md"
                text="Login"
              />
            )}
          </form>

          <div className="flex justify-center items-center mt-4">
            <p className="text-sm text-gray-700">
              New here?{" "}
              <Link href="/signup" className="text-blue-600 font-semibold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="block w-[45%] h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${login.src})`,
        }}
      ></div>
    </div>
  );
}
