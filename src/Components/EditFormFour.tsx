"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  geoOption: string; // 'exact', 'radius', 'zip'
  country?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
};

const EditFormFour: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { geoOption: "" },
  });

  const geoOption = watch("geoOption");

  const onSubmit = (data: FormValues) => {
    console.log("Geo form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="mt-12 mb-5 text-[#274F45] text-[20px] font-semibold">
        Geo-Locator
      </h4>

      {/* Option 1: Exact Address */}
      <div className="flex gap-x-8 mb-8">
        <input
          type="checkbox"
          value="exact"
          {...register("geoOption", { required: "Choose a location option" })}
          className="border-2 mt-2 cursor-pointer size-5"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
            Display my business’ exact address.
          </h3>
          <p>Anyone on Sustainable Trades can view your exact address.</p>

          {geoOption === "exact" && (
            <div className="mt-8 space-y-4">
              <div>
                <p className="form-label font-bold">Country/Region *</p>
                <input
                  type="text"
                  {...register("country", { required: "Country is required" })}
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

      {/* Option 2: 0.5-mile radius */}
      <div className="flex gap-x-8 mb-8">
        <input
          type="checkbox"
          value="radius"
          {...register("geoOption")}
          className="border-2 mt-2 cursor-pointer size-5"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
            Display my location within a 0.5-mile radius of my address.
          </h3>
          <p>Your exact location will remain private.</p>

          {geoOption === "radius" && (
            <div className="mt-8 space-y-4">
              <div>
                <p className="form-label font-bold">Country/Region *</p>
                <input
                  type="text"
                  {...register("country", { required: "Country is required" })}
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
          value="zip"
          {...register("geoOption")}
          className="border-2 mt-2 cursor-pointer size-5"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold text-[25px] leading-8">
            Your exact location will remain private.
          </h3>
          <p>
            Do not display my address your shop pin will appear within your zip
            code area for privacy.You can still choose to share to exact
            location when a trade or scale occurs
          </p>

          {geoOption === "zip" && (
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
