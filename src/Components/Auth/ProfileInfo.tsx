"use client";
import React, { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { PiEyeClosed } from "react-icons/pi";

export interface StepFormRef {
  validate: () => Promise<boolean>;
  getData: () => ProfileInfoFormData;
}

export interface ProfileInfoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  companyName: string;
}

const ProfileInfo = forwardRef<StepFormRef>((props, ref) => {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm<ProfileInfoFormData>({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      companyName: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);

  useImperativeHandle(ref, () => ({
    validate: async () => {
      const valid = await trigger();
      if (!valid) return false;
      const { password, rePassword } = getValues();
      if (password !== rePassword) {
        alert("Passwords do not match");
        return false;
      }
      return true;
    },
    getData: () => getValues(),
  }));

  return (
    <section className="mt-[64px]">
      <h2 className="text-[#274F45] text-[40px] font-lato font-bold text-center">
        Profile Info
      </h2>
      <p className="font-lato text-[18px] font-normal max-w-[350px] w-full mx-auto text-center">
        Lets set up your shop! Fill in all required fields below to get started.
      </p>
      <div className="border border-[#A7A39C] rounded-[20px] my-[56px] p-20">
        <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
          <span className="text-[#8B200C]">*</span>Indicates a required field
        </p>
        <h6 className="text-[16px] text-[#4B4A47] font-normal font-lato">
          Note: Email and password entered here will be your login credentials
        </h6>
        <div className="mt-12">
          <form
            onSubmit={e => e.preventDefault()}
            className="grid grid-cols-2 gap-x-[96px] gap-y-10 font-lato"
          >
            {/* First Name */}
            <div className="form-group">
              <p className="form-label">
                First Name <span className="required">*</span>
              </p>
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="form-group">
              <p className="form-label">
                Last Name <span className="required">*</span>
              </p>
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <p className="form-label">
                Email / Log In <span className="required">*</span>
              </p>
              <input
                type="email"
                placeholder="fxhgdg@gmail.com"
                className="form-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <p className="form-label">
                Phone Number <span className="required">*</span>
              </p>
              <input
                type="text"
                placeholder="Phone Number"
                className="form-input"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-group relative">
              <p className="form-label">
                Password <span className="required">*</span>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-input pr-10"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum length is 6" },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-[45px] text-black cursor-pointer"
                tabIndex={-1}
                aria-label="Toggle password visibility"
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

            {/* Re-enter Password */}
            <div className="form-group relative">
              <p className="form-label">
                Re-enter Password <span className="required">*</span>
              </p>
              <input
                type={showRePassword ? "text" : "password"}
                placeholder="Re-enter Password"
                className="form-input pr-10"
                {...register("rePassword", {
                  required: "Please re-enter password",
                  minLength: { value: 6, message: "Minimum length is 6" },
                })}
              />
              <button
                type="button"
                onClick={() => setShowRePassword(v => !v)}
                className="absolute right-3 top-[45px] text-black cursor-pointer"
                tabIndex={-1}
                aria-label="Toggle password visibility"
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

            {/* Company Name (optional) */}
            <div className="form-group">
              <p className="form-label">Company Name (optional)</p>
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                {...register("companyName")}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

ProfileInfo.displayName = "ProfileInfo";

export default ProfileInfo;
