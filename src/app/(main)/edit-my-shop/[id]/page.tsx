"use client";

import Container from "@/Components/Common/Container";
import EditFormFour from "@/Components/EditFormFour";
import EditFormThree from "@/Components/EditFormThree";
import EditFormTwo from "@/Components/EditFormTwo";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { PiEyeClosed } from "react-icons/pi";

type ProfileFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  companyName?: string;
};

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "",
      rePassword: "",
      companyName: "My Company",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Profile data:", data);
  };

  return (
    <section className="pt-[34px] pb-[96px]">
      <Container>
        <div className="px-[220px]">
          <h2 className="text-[40px] font-bold text-[#000]">
            Comprehensive Edit
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Profile Info */}
            <div className="mt-[45px]">
              <h2 className="mt-5 text-[#274F45] text-[20px] font-semibold">
                Profile Info
              </h2>
              <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
                <span className="text-[#8B200C]">*</span>Indicates a required
                field
              </p>
              <div className="grid grid-cols-2 gap-x-7 gap-y-10">
                {/* First Name */}
                <div>
                  <p className="form-label">First Name *</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <p className="form-label">Last Name *</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-600">{errors.lastName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <p className="form-label">Email / Log In *</p>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
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
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <p className="form-label">Company Name (optional)</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Company Name"
                    {...register("companyName")}
                  />
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
                      validate: (value, formValues) =>
                        value === formValues.password ||
                        "Passwords do not match",
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
                    <p className="text-red-600">{errors.rePassword.message}</p>
                  )}
                </div>
              </div>
            </div>
          </form>

          {/* Other Forms */}
          <div className="my-12">
            <EditFormTwo />
          </div>
          <div className="">
            <EditFormThree />
          </div>
          <div className="">
            <EditFormFour />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="auth-secondary-btn">
              Update Profile
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
