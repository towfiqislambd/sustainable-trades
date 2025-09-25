"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import loginBg from "@/Assets/login.png";
import { useForm } from "react-hook-form";
import {
  AppleLogoSvg,
  FacebookLogoSvg,
  GoogleLogoSvg,
} from "@/Components/Svg/SvgContainer";
import { CgSpinnerTwo } from "react-icons/cg";
import { useLogin } from "@/Hooks/api/auth_api";
import { IoArrowBackOutline } from "react-icons/io5";

type formData = {
  email: string;
  password: string;
};

const Page = () => {
  const { mutateAsync: loginMutation, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    await loginMutation(data);
  };

  return (
    <section className="min-h-screen max-h-screen flex">
      {/* Left - From */}
      <div className="flex-1 grid place-items-center overflow-y-auto">
        <div className="w-[750px] mx-auto p-10">
          {/* Back to home */}
          <div className="flex items-center gap-1 text-center mb-8 hover:underline">
            <IoArrowBackOutline className="text-primary-green" />
            <Link
              href="/"
              className="text-primary-green cursor-pointer font-semibold"
            >
              Back to home
            </Link>
          </div>
          <h2 className="auth-heading">Welcome Back!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-8 items-center">
              {/* Email */}
              <div className="flex-1">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="info@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email?.message && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex-1">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password?.message && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="py-3 flex justify-between items-center">
              {/* Remember me */}
              <div className="flex gap-3 items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 size-5 cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="text-secondary-black max-w-[550px] cursor-pointer"
                >
                  Remember Me
                </label>
              </div>

              {/* Forget Pass */}
              <Link className="text-gray-500 underline" href="">
                Forgot your password?
              </Link>
            </div>

            {/* Submit btn */}
            <button
              type="submit"
              disabled={isPending}
              className={`px-10 py-4 border-2 border-primary-green rounded-lg bg-primary-green text-accent-white font-semibold duration-500 transition-all hover:bg-transparent hover:text-primary-green text-lg block w-full ${
                isPending ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isPending ? (
                <p className="flex gap-2 items-center justify-center">
                  <CgSpinnerTwo className="animate-spin text-xl" />
                  <span>Signing in....</span>
                </p>
              ) : (
                " Sign In"
              )}
            </button>
          </form>

          <div className="flex gap-1 justify-center items-center text-lg text-secondary-black mt-7">
            <p>New Member?</p>
            <Link
              className="text-primary-green font-semibold underline"
              href="/auth/choose-package"
            >
              Create an account
            </Link>
          </div>

          <div className="my-7 flex gap-1 items-center text-gray-400 font-semibold">
            <div className="border-b border-gray-300 flex-1"></div>
            <div className="">OR</div>
            <div className="border-b border-gray-300 flex-1"></div>
          </div>

          {/* Social items */}
          <div className="flex justify-center items-center gap-10">
            <button className="cursor-pointer">
              <FacebookLogoSvg />
            </button>
            <button className="cursor-pointer">
              <GoogleLogoSvg />
            </button>
            <button className="cursor-pointer">
              <AppleLogoSvg />
            </button>
          </div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="flex-1 relative">
        <Image
          src={loginBg}
          alt="welcome_img"
          className="w-full h-full object-cover"
          fill
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Page;
