"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  country?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
};

const EditFormFour: React.FC = () => {
  const [activeOption, setActiveOption] = useState<"exact" | "radius" | "zip">(
    "exact"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      country: "Bangladesh",
      address: "Dhaka Street 123",
      city: "Dhaka",
      state: "Dhaka",
      zipcode: "1000",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Geo form data:", data);
  };

  // Reset form values when option changes
  useEffect(() => {
    if (activeOption === "zip") {
      // Keep only zipcode
      reset({ zipcode: watch("zipcode") || "" });
    } else {
      // Keep full address info
      reset({
        country: watch("country") || "",
        address: watch("address") || "",
        city: watch("city") || "",
        state: watch("state") || "",
        zipcode: watch("zipcode") || "",
      });
    }
  }, [activeOption]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="mt-12 mb-5 text-[#274F45] text-[20px] font-semibold">
        Geo-Locator
      </h4>

      {/* Option 1: Exact Address */}
      <div className="flex gap-x-8 mb-8">
        <input
          type="checkbox"
          checked={activeOption === "exact"}
          onChange={() => setActiveOption("exact")}
          className="border-2 mt-2 cursor-pointer size-5"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
            Display my business’ exact address.
          </h3>
          <p>Anyone on Sustainable Trades can view your exact address.</p>

          {activeOption === "exact" && (
            <div className="mt-8 space-y-4">
              <div>
                <p className="form-label font-bold">Country/Region *</p>
                <input
                  type="text"
                  {...register("country", {
                    required: "Country is required",
                  })}
                  className="form-input"
                  placeholder="Country/Region"
                />
                {errors.country && (
                  <p className="text-red-600">{errors.country.message}</p>
                )}
              </div>

              <div>
                <p className="form-label font-bold">Address *</p>
                <input
                  type="text"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className="form-input"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="flex gap-4">
                <div>
                  <p className="form-label font-bold">City *</p>
                  <input
                    type="text"
                    {...register("city", { required: "City is required" })}
                    className="form-input"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <p className="form-label font-bold">State *</p>
                  <input
                    type="text"
                    {...register("state", { required: "State is required" })}
                    className="form-input"
                    placeholder="State"
                  />
                  {errors.state && (
                    <p className="text-red-600">{errors.state.message}</p>
                  )}
                </div>

                <div>
                  <p className="form-label font-bold">Zipcode *</p>
                  <input
                    type="text"
                    {...register("zipcode", {
                      required: "Zipcode is required",
                    })}
                    className="form-input"
                    placeholder="Zipcode"
                  />
                  {errors.zipcode && (
                    <p className="text-red-600">{errors.zipcode.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Option 2: 0.5-mile radius */}
      <div className="flex gap-x-8 mb-8">
        <input
          type="checkbox"
          checked={activeOption === "radius"}
          onChange={() => setActiveOption("radius")}
          className="border-2 mt-2 cursor-pointer size-5"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
            Display my location within a 0.5-mile radius of my address.
          </h3>
          <p>Your exact location will remain private.</p>

          {activeOption === "radius" && (
            <div className="mt-8 space-y-4">
              <div>
                <p className="form-label font-bold">Country/Region *</p>
                <input
                  type="text"
                  {...register("country", {
                    required: "Country is required",
                  })}
                  className="form-input"
                  placeholder="Country/Region"
                />
                {errors.country && (
                  <p className="text-red-600">{errors.country.message}</p>
                )}
              </div>

              <div>
                <p className="form-label font-bold">Address *</p>
                <input
                  type="text"
                  {...register("address", { required: "Address is required" })}
                  className="form-input"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="flex gap-4">
                <div>
                  <p className="form-label font-bold">City *</p>
                  <input
                    type="text"
                    {...register("city", { required: "City is required" })}
                    className="form-input"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <p className="form-label font-bold">State *</p>
                  <input
                    type="text"
                    {...register("state", { required: "State is required" })}
                    className="form-input"
                    placeholder="State"
                  />
                  {errors.state && (
                    <p className="text-red-600">{errors.state.message}</p>
                  )}
                </div>

                <div>
                  <p className="form-label font-bold">Zipcode *</p>
                  <input
                    type="text"
                    {...register("zipcode", {
                      required: "Zipcode is required",
                    })}
                    className="form-input"
                    placeholder="Zipcode"
                  />
                  {errors.zipcode && (
                    <p className="text-red-600">{errors.zipcode.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Option 3: Private / Zip only */}
      <div className="flex gap-x-8 mb-8">
        <input
          type="checkbox"
          checked={activeOption === "zip"}
          onChange={() => setActiveOption("zip")}
          className="border-2 mt-2 cursor-pointer size-5"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
            Your exact location will remain private.
          </h3>
          <p>
            Do not display my address — your shop pin will appear within your
            zip code area for privacy.
          </p>

          {activeOption === "zip" && (
            <div className="mt-8">
              <p className="form-label font-bold">Zipcode *</p>
              <input
                type="text"
                {...register("zipcode", { required: "Zipcode is required" })}
                className="form-input"
                placeholder="Zipcode"
              />
              {errors.zipcode && (
                <p className="text-red-600">{errors.zipcode.message}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default EditFormFour;
