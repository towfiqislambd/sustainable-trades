"use client";

import { useFormContext } from "react-hook-form";
import React, { useState, useEffect } from "react";

type FormValues = {
  country?: string;
  address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  geoOption?: "exact" | "radius" | "zip";
};

type EditFormFourProps = {
  data?: any;
};

const EditFormFour: React.FC<EditFormFourProps> = ({ data }) => {
  const [activeOption, setActiveOption] = useState<"exact" | "radius" | "zip">(
    "exact"
  );

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<FormValues>();

  useEffect(() => {
    if (!data) return;

    const addressLine1 = data?.shop_info?.address?.address_line_1 || "";
    const postalCode = data?.shop_info?.address?.postal_code || "";
    console.log(postalCode, "postal code");

    const city = data?.shop_info?.address?.city || "";
    const state = data?.shop_info?.address?.state || "";
    const displayMyAddress =
      data?.shop_info?.address?.display_my_address || false;
    const addressRadius = data?.shop_info?.address?.address_10_mile || false;
    const doNotDisplay = data?.shop_info?.address?.do_not_display || false;

    // Determine geoOption from flags if you have them
    if (displayMyAddress) {
      setActiveOption("exact");
      setValue("geoOption", "exact");
    } else if (addressRadius) {
      setActiveOption("radius");
      setValue("geoOption", "radius");
    } else if (doNotDisplay) {
      setActiveOption("zip");
      setValue("geoOption", "zip");
    } else {
      setActiveOption("exact");
      setValue("geoOption", "exact");
    }

    // Set form field values (these update the actual inputs)
    setValue("address", addressLine1);
    setValue("postal_code", postalCode);
    setValue("city", city);
    setValue("state", state);
    setValue("country", "Bangladesh");
  }, [data, setValue]);

  useEffect(() => {
    if (activeOption === "zip") {
      setValue("address", "Private Location");
      setValue("city", "");
      setValue("state", "");
    }
  }, [activeOption, setValue]);

  return (
    <div>
      <h4 className="mt-12 mb-5 text-[#274F45] text-[20px] font-semibold">
        Geo-Locator
      </h4>

      {/* Option 1: Exact Address */}
      <div className="flex gap-x-8 mb-8">
        <input
          type="checkbox"
          checked={activeOption === "exact"}
          onChange={() => setActiveOption("exact")}
          className="shrink-0 size-5 mt-2"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold lg:text-[25px] text-[20px] leading-8">
            Display my business’ exact address.
          </h3>
          <p>Anyone on Sustainable Trades can view your exact address.</p>

          {activeOption === "exact" && (
            <div className="lg:mt-8 mt-5 space-y-4">
              {/* <div>
                <p className="form-label font-bold">Country/Region *</p>
                <input
                  type="text"
                  {...register("country")}
                  className="form-input"
                  placeholder="Country/Region"
                />
                {errors.country && (
                  <p className="text-red-600">{errors.country.message}</p>
                )}
              </div> */}

              <div>
                <p className="form-label font-bold">Address *</p>
                <input
                  type="text"
                  {...register("address")}
                  className="form-input"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="flex flex-wrap w-full gap-4">
                <div>
                  <p className="form-label font-bold">City *</p>
                  <input
                    type="text"
                    {...register("city")}
                    className="form-input"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div className="lg:my-0 my-2">
                  <p className="form-label font-bold">State *</p>
                  <input
                    type="text"
                    {...register("state")}
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
                    {...register("postal_code")}
                    className="form-input"
                    placeholder="Zipcode"
                  />
                  {errors.postal_code && (
                    <p className="text-red-600">{errors.postal_code.message}</p>
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
          className="shrink-0 size-5 mt-2"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold lg:text-[25px] text-[20px] leading-8">
            Display my location within a 0.5-mile radius of my address.
          </h3>
          <p>Your exact location will remain private.</p>

          {activeOption === "radius" && (
            <div className="mt-8 space-y-4">
              {/* <div>
                <p className="form-label font-bold">Country/Region *</p>
                <input
                  type="text"
                  {...register("country")}
                  className="form-input"
                  placeholder="Country/Region"
                />
                {errors.country && (
                  <p className="text-red-600">{errors.country.message}</p>
                )}
              </div> */}

              <div>
                <p className="form-label font-bold">Address *</p>
                <input
                  type="text"
                  {...register("address")}
                  className="form-input"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="form-label font-bold">City *</p>
                  <input
                    type="text"
                    {...register("city")}
                    className="form-input"
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div className="lg:my-0 my-2">
                  <p className="form-label font-bold">State *</p>
                  <input
                    type="text"
                    {...register("state")}
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
                    {...register("postal_code")}
                    className="form-input"
                    placeholder="Zipcode"
                  />
                  {errors.postal_code && (
                    <p className="text-red-600">{errors.postal_code.message}</p>
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
          className="shrink-0 size-5 mt-2"
        />
        <div>
          <h3 className="text-[#13141D] font-semibold lg:text-[25px] text-[20px] leading-8">
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
                {...register("postal_code")}
                className="form-input"
                placeholder="Zipcode"
              />
              {errors.postal_code && (
                <p className="text-red-600">{errors.postal_code.message}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditFormFour;
