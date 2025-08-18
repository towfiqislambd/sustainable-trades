"use client";

import Container from "@/Components/Common/Container";
import EditFormFour from "@/Components/EditFormFour";
import EditFormThree from "@/Components/EditFormThree";
import EditFormTwo from "@/Components/EditFormTwo";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { PiEyeClosed } from "react-icons/pi";

type ProfileFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  companyName?: string;

  // Shop / Cover
  shopPhoto?: File | null;
  shopPhotoPreview?: string;
  coverPhoto?: File | null;
  coverPhotoPreview?: string;
  shopName?: string;
  cityState?: string;

  // Geo fields
  country?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  lat?: number;
  lng?: number;
};

const Page: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const methods = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "",
      rePassword: "",
      companyName: "My Company",
      shopPhotoPreview: "",
      coverPhotoPreview: "",
      shopName: "My Shop Name",
      cityState: "Dhaka, Bangladesh",
      country: "Bangladesh",
      address: "Dhaka Street 123",
      city: "Dhaka",
      state: "Dhaka",
      zipcode: "1000",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = methods;

  
  const onSubmit = async (data: ProfileFormValues) => {
    console.log("Form data before geo lookup:", data);

    // Construct full address string
    const fullAddress = `${data.address || ""}, ${data.city || ""}, ${
      data.state || ""
    }, ${data.country || ""}, ${data.zipcode || ""}`;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          fullAddress
        )}&key=AIzaSyDmNO0nvvAkkxk6rYBDQEfVXVQPB9rKlsk`
      );
      const result = await response.json();

      if (result.status === "OK") {
        const location = result.results[0].geometry.location;
        data.lat = location.lat;
        data.lng = location.lng;
        console.log("Final form data with lat/lng:", data);
      } else {
        console.error("Geocoding failed:", result.status, result.error_message);
      }
    } catch (err) {
      console.error("Error fetching geocode:", err);
    }

    // Send to API
    // await fetch("/api/update-profile", { method: "POST", body: JSON.stringify(data) })
  };

  return (
    <section className="pt-[34px] pb-[96px]">
      <Container>
        <div className="px-[220px]">
          <h2 className="text-[40px] font-bold text-[#000]">
            Comprehensive Edit
          </h2>

          <FormProvider {...methods}>
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
                      {...register("firstName")}
                    />
                    {errors.firstName?.message && (
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
                      {...register("lastName")}
                    />
                    {errors.lastName?.message && (
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
                       
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email?.message && (
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
                      {...register("password")}
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
                    {errors.password?.message && (
                      <p className="text-red-600">{errors.password.message}</p>
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
               
                        validate: value =>
                          value === watch("password") ||
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
                    {errors.rePassword?.message && (
                      <p className="text-red-600">
                        {errors.rePassword.message}
                      </p>
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
                </div>
              </div>

              {/* Child Forms */}
              <div className="my-12">
                <EditFormTwo />
              </div>
              <div className="my-12">
                <EditFormThree />
              </div>
              <div className="my-12">
                <EditFormFour />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="auth-secondary-btn">
                  Update Profile
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </section>
  );
};

export default Page;
