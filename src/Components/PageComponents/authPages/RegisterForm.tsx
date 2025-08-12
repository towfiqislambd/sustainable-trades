"use client";
import Image from "next/image";
import React from "react";
import shopBg from "@/Assets/sustainable_soppers.png";
import magicBg from "@/Assets/magic_markers.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  AppleLogoSvg,
  FacebookLogoSvg,
  GoogleLogoSvg,
} from "@/Components/Svg/SvgContainer";
import { useSearchParams } from "next/navigation";

type formData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  agree_terms: boolean;
};

export default function RegisterForm() {
  const searchParams = useSearchParams();
  const selectedId = Number(searchParams.get("selectedId"));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const password = watch("password");
  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen max-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 grid place-items-center overflow-y-auto">
        <div className="w-[750px] mx-auto p-10">
          <h2 className="auth-heading !text-4xl !mb-7">
            Welcome,{" "}
            <span className="text-primary-green">
              {selectedId === 1 ? "Magic Maker!" : "Sustainable Shopper!"}
            </span>
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
                {errors.first_name?.message && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Last Name"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                />
                {errors.last_name?.message && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
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
            <div>
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

            {/* Confirm Password */}
            <div>
              <label className="form-label">Confirm Password *</label>
              <input
                type="password"
                className="form-input"
                placeholder="Password"
                {...register("password_confirmation", {
                  required: "Confirm Password is required",
                  validate: value =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.password_confirmation?.message && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="py-3">
              <div className="flex gap-3 items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 size-5"
                  {...register("agree_terms", {
                    required: "You must agree to the terms and conditions",
                  })}
                />
                <label
                  htmlFor="terms"
                  className="text-secondary-black max-w-[550px]"
                >
                  By continuing you agree to Sustainable Trade’s Terms of Use
                  and Privacy Policy.{" "}
                  <Link
                    href="/help/terms-and-conditions"
                    target="_blank"
                    className="underline text-primary-green"
                  >
                    Terms and Conditions.
                  </Link>
                </label>
              </div>
              {errors.agree_terms?.message && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.agree_terms.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-10 py-4 border-2 border-primary-green rounded-lg bg-primary-green text-accent-white font-semibold cursor-pointer duration-500 transition-all hover:bg-transparent hover:text-primary-green text-lg block w-full"
            >
              {selectedId === 1
                ? " Join as Magic Maker"
                : " Join as Organic Shopper"}
            </button>
          </form>

          {/* Sign in link */}
          <div className="flex gap-1 items-center text-lg text-secondary-black mt-3">
            <p>Already have an account?</p>
            <Link
              className="text-primary-green font-semibold underline"
              href="/auth/login"
            >
              Sign In
            </Link>
          </div>

          {/* Divider */}
          <div className="my-7 flex gap-1 items-center text-gray-400 font-semibold">
            <div className="border-b border-gray-300 flex-1"></div>
            <div>OR</div>
            <div className="border-b border-gray-300 flex-1"></div>
          </div>

          {/* Social buttons */}
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
          src={selectedId === 1 ? shopBg : magicBg}
          alt="welcome_img"
          className="w-full h-full object-cover"
          fill
          placeholder="blur"
        />
      </div>
    </section>
  );
}
