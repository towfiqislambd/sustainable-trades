"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Camera } from "@/Components/Svg/SvgContainer";

const StepTwo = ({ step, setStep, totalSteps }: any) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    register,
  } = useFormContext();

  const shopPhotoPreview = watch("shopPhotoPreview");
  const coverPhotoPreview = watch("coverPhotoPreview");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    previewField: "shopPhotoPreview" | "coverPhotoPreview"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
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
    <section className="lg:mt-16 mt-5">
      <h2 className="auth_title">Your Shop</h2>

      {/* Shop Info */}
      <div className="border border-[#A7A39C] rounded-[20px] lg:my-[56px] my-6 xl:p-20 p-10">
        <p className="text-[16px] text-[#4B4A47] font-normal font-lato">
          <span className="text-[#8B200C]">*</span>Indicates a required field
        </p>
        <div className="xl:mt-12 mt-5 grid lg:grid-cols-2 grid-cols-1 xl:gap-x-[96px] gap-x-10 items-center lg:gap-y-10 gap-y-5 font-lato">
          {/* Shop Name */}
          <div>
            <p className="form-label">Name Your Shop *</p>
            <input
              type="text"
              className="form-input"
              placeholder="Name Your Shop *"
              {...register("shopName", {
                required: "Shop name is required",
                minLength: { value: 4, message: "Minimum 4 characters" },
                maxLength: { value: 30, message: "Maximum 30 characters" },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "No special characters, spaces, or accented letters",
                },
              })}
            />
            {errors.shopName && (
              <p className="text-red-600">
                {errors.shopName.message as string}
              </p>
            )}
            <ul className="mt-[2px] text-[16px] text-[#4B4A47] ml-5">
              <li className="list-disc">Between 4-30 characters</li>
              <li className="list-disc">
                No special characters, spaces, or accented letters
              </li>
            </ul>
          </div>
          <h5 className="text-[16px] text-[#4B4A47]">
            Can be your personal name/nickname or company name.  When a trade is
            offered, this is the name that will show to others.
          </h5>

          {/* City State */}
          <div>
            <p className="form-label">City State *</p>
            <input
              type="text"
              className="form-input"
              placeholder="City, State"
              {...register("cityState", {
                required: "City and State are required",
              })}
            />
            {errors.cityState && (
              <p className="text-red-600">
                {errors.cityState.message as string}
              </p>
            )}
          </div>
          <h5 className="text-[16px] text-[#4B4A47]">
            This is so you show up in your local area on our Geo-locator map.
            More info about this
          </h5>
        </div>
      </div>

      <div className="border border-[#A7A39C] rounded-[20px] mt-8 mb-[56px] xl:p-20 p-5 py-10">
        <div className="lg:flex gap-x-8">
          {/* Shop Photo */}
          <div>
            <p className="text-[18px] text-[#13141D] font-lato lg:text-start text-center">
              Add A Profile Photo *
            </p>
            <div
              className="relative bg-[#F0EEE9] sm:h-[270px] sm:w-[270px] w-[220px] h-[220px] rounded-full mt-6 flex flex-col justify-center items-center cursor-pointer overflow-hidden md:mx-start mx-auto"
              onClick={() => document.getElementById("shopPhotoInput")?.click()}
            >
              {shopPhotoPreview ? (
                <>
                  <img
                    src={shopPhotoPreview}
                    alt="Shop Preview"
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 bg-opacity-40 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                    <Camera />
                  </div>
                </>
              ) : (
                <>
                  <Camera />
                  <p>Add Photo</p>
                </>
              )}
            </div>
            <Controller
              name="shopPhoto"
              control={control}
              rules={{ required: "Shop profile photo is required" }}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    id="shopPhotoInput"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const file = e.target.files?.[0] || null;
                      field.onChange(file); // RHF update
                      handleImageChange(e, "shopPhotoPreview");
                    }}
                  />
                  {errors.shopPhoto && (
                    <p className="text-red-600">
                      {errors.shopPhoto.message as string}
                    </p>
                  )}
                </>
              )}
            />
            <h5 className="text-center text-[#67645F] text-[16px] mt-2">
              Max file size: 10 MB
            </h5>
          </div>

          {/* Cover Photo */}
          <div className="w-full lg:mt-0 mt-10">
            <p className="text-[18px] text-[#13141D] font-lato lg:text-start text-center">
              Add A Shop Banner *
            </p>
            <div
              className="relative bg-[#F0EEE9] h-[270px] w-full rounded-[8px] mt-6 flex flex-col justify-center items-center cursor-pointer overflow-hidden"
              onClick={() =>
                document.getElementById("coverPhotoInput")?.click()
              }
            >
              {coverPhotoPreview ? (
                <>
                  <img
                    src={coverPhotoPreview}
                    alt="Cover Preview"
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 bg-opacity-40 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[8px]">
                    <Camera />
                  </div>
                </>
              ) : (
                <>
                  <Camera />
                  <p>Add Photo</p>
                </>
              )}
            </div>
            <Controller
              name="coverPhoto"
              control={control}
              rules={{ required: "Cover photo is required" }}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    id="coverPhotoInput"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const file = e.target.files?.[0] || null;
                      field.onChange(file); // RHF update
                      handleImageChange(e, "coverPhotoPreview");
                    }}
                  />
                  {errors.coverPhoto && (
                    <p className="text-red-600">
                      {errors.coverPhoto.message as string}
                    </p>
                  )}
                </>
              )}
            />
            <h5 className="text-center text-[#67645F] text-[16px] mt-2">
              Max file size: 10 MB
            </h5>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="md:flex justify-between items-center">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="auth-primary-btn w-full md:w-fit"
        >
          Back
        </button>
        <button
          type="submit"
          className="auth-secondary-btn md:mt-0 mt-3 w-full md:w-fit"
        >
          {step < totalSteps ? "Save and Continue" : "Submit"}
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
