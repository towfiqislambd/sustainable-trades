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

  // Watch preview from RHF state
  const profilePhotoPreview = watch("profilePhotoPreview");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "profilePhoto",
    previewField: "profilePhotoPreview"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(field, file, { shouldValidate: true });

      const reader = new FileReader();
      reader.onloadend = () => {
        setValue(previewField, reader.result as string, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h2 className="auth_title mt-16">Profile Info</h2>
      <p className="auth_description">
        Lets set up your shop! Fill in all required fields below to get started.
      </p>

      <div className="border border-[#A7A39C] rounded-[20px] my-[56px] p-20">
        <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
          <span className="text-[#8B200C]">*</span>Indicates a required field
        </p>
        <h6 className="text-[16px] text-[#4B4A47] font-normal font-lato">
          Note: Email and password entered here will be your login credentials
        </h6>

        {/* Profile Picture Upload */}
        <div className="mt-8">
          <p className="form-label">Profile Picture *</p>
          <div
            className="relative bg-[#F0EEE9] h-[150px] w-[150px] rounded-full mt-4 flex flex-col justify-center items-center cursor-pointer overflow-hidden border border-[#A7A39C]"
            onClick={() =>
              document.getElementById("profilePhotoInput")?.click()
            }
          >
            {profilePhotoPreview ? (
              <>
                <img
                  src={profilePhotoPreview}
                  alt="Profile Preview"
                  className="h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 bg-opacity-40 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                  {/* You can use any icon here */}
                  <Camera/>
                </div>
              </>
            ) : (
              <>
                <Camera />
                <p>Add Photo</p>
              </>
            )}
          </div>
          <input
            type="file"
            id="profilePhotoInput"
            accept="image/*"
            className="hidden"
            {...register("profilePhoto", {
              validate: (_, formValues) => {
                if (formValues.profilePhoto instanceof File) return true;
                if (formValues.profilePhotoPreview) return true;
                return "Profile picture is required";
              },
            })}
            onChange={e =>
              handleImageChange(e, "profilePhoto", "profilePhotoPreview")
            }
          />
          {errors.profilePhoto && (
            <p className="text-red-600">
              {errors.profilePhoto.message as string}
            </p>
          )}
          <h5 className="text-[#67645F] text-[14px] mt-2">
            Max file size: 10 MB
          </h5>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-[96px] gap-y-10 font-lato">
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
