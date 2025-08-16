"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { PiEyeClosed } from "react-icons/pi";
import { Camera } from "@/Components/Svg/SvgContainer";

const StepOne = ({ step, setStep, totalSteps }: any) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <>
      <h2 className="auth_title lg:mt-16 mt-10">Profile Info</h2>
      <p className="auth_description">
        Lets set up your shop! Fill in all required fields below to get started.
      </p>

      <div className="border border-[#A7A39C] rounded-[20px] my-[56px] lg:p-20 p-5">
        <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
          <span className="text-[#8B200C]">*</span>Indicates a required field
        </p>
        <h6 className="text-[16px] text-[#4B4A47] font-normal font-lato">
          Note: Email and password entered here will be your login credentials
        </h6>

        <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-x-[96px] gap-y-10 font-lato">
          {/* First Name */}
          <div>
            <p className="form-label">First Name *</p>
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName?.message && (
              <p className="text-red-600">
                {errors.firstName.message as string}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <p className="form-label">Last Name *</p>
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-600">
                {errors.lastName.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <p className="form-label">Email / Log In *</p>
            <input
              type="email"
              className="form-input"
              placeholder="fxhgdg@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message as string}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <p className="form-label">Phone Number *</p>
            <input
              type="text"
              className="form-input"
              placeholder="Phone Number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message as string}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <p className="form-label">Password *</p>
            <input
              type={showPassword ? "text" : "password"}
              className="form-input pr-10"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum length is 6" },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[45px] cursor-pointer"
            >
              {showPassword ? (
                <PiEyeClosed size={20} />
              ) : (
                <BsEyeFill size={20} />
              )}
            </button>
            {errors.password && (
              <p className="text-red-600">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Re-enter Password */}
          <div className="relative">
            <p className="form-label">Re-enter Password *</p>
            <input
              type={showRePassword ? "text" : "password"}
              className="form-input pr-10"
              placeholder="Re-enter Password"
              {...register("rePassword", {
                required: "Please re-enter password",
                minLength: { value: 6, message: "Minimum length is 6" },
              })}
            />
            <button
              type="button"
              onClick={() => setShowRePassword(!showRePassword)}
              className="absolute right-3 top-[45px] cursor-pointer"
            >
              {showRePassword ? (
                <PiEyeClosed size={20} />
              ) : (
                <BsEyeFill size={20} />
              )}
            </button>
            {errors.rePassword && (
              <p className="text-red-600">
                {errors.rePassword.message as string}
              </p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <p className="form-label">Company Name (optional)</p>
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              {...register("companyName")}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="auth-secondary-btn">
          {step < totalSteps ? "Save and Continue" : "Submit"}
        </button>
      </div>
    </>
  );
};

export default StepOne;
