"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Camera } from "@/Components/Svg/SvgContainer";
import Preview from "../Assets/cover.jpg";

type FormValues = {
  shopPhoto: File | null;
  shopPhotoPreview: string;
  coverPhoto: File | null;
  coverPhotoPreview: string;
  shopName: string;
  cityState: string;
};

const EditFormTwo: React.FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      shopPhoto: null,
      shopPhotoPreview: Preview.src,
      coverPhoto: null,
      coverPhotoPreview: Preview.src,
      shopName: "My Shop Name",
      cityState: "Dhaka, Bangladesh",
    },
  });

  const shopPhotoPreview = watch("shopPhotoPreview");
  const coverPhotoPreview = watch("coverPhotoPreview");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    previewField: "shopPhotoPreview" | "coverPhotoPreview",
    fileField: "shopPhoto" | "coverPhoto"
  ) => {
    const file: File | null = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setValue(previewField, result, { shouldValidate: true });
      };
      reader.readAsDataURL(file);

      setValue(fileField, file, { shouldValidate: true });
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mt-5 text-[#274F45] text-[20px] font-semibold">
        Your Shop
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-x-[96px] items-center gap-y-10 font-lato">
        {/* Shop Name */}
        <div>
          <p className="form-label">Name Your Shop *</p>
          <input
            type="text"
            {...register("shopName", { required: "Shop Name is required" })}
            className="form-input"
            placeholder="Name Your Shop *"
          />
          {errors.shopName && (
            <p className="text-red-600">{errors.shopName.message}</p>
          )}
          <ul className="mt-[2px] text-[16px] text-[#4B4A47] ml-5">
            <li className="list-disc">Between 4-30 characters</li>
            <li className="list-disc">
              No special characters, spaces, or accented letters
            </li>
          </ul>
        </div>
        <h5 className="text-[16px] text-[#4B4A47]">
          Can be your personal name/nickname or company name. When a trade is
          offered, this is the name that will show to others.
        </h5>

        {/* City/State */}
        <div>
          <p className="form-label">City State *</p>
          <input
            type="text"
            {...register("cityState", { required: "City/State is required" })}
            className="form-input"
            placeholder="City, State"
          />
          {errors.cityState && (
            <p className="text-red-600">{errors.cityState.message}</p>
          )}
        </div>
        <h5 className="text-[16px] text-[#4B4A47]">
          This is so you show up in your local area on our Geo-locator map.{" "}
          <span className="underline">More info about this</span>
        </h5>
      </div>

      <div className=" mt-8 mb-[56px]">
        <div className="flex gap-x-8">
          {/* Shop Photo */}
          <div>
            <p className="text-[18px] text-[#13141D] font-lato">
              Add A Profile Photo *
            </p>
            <div
              className="relative bg-[#F0EEE9] h-[270px] w-[270px] rounded-full mt-6 flex flex-col justify-center items-center cursor-pointer overflow-hidden"
              onClick={() => document.getElementById("shopPhotoInput")?.click()}
            >
              {shopPhotoPreview ? (
                <>
                  <img
                    src={shopPhotoPreview}
                    alt="Shop Preview"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
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
              render={() => (
                <>
                  <input
                    type="file"
                    id="shopPhotoInput"
                    accept="image/*"
                    className="hidden"
                    onChange={e =>
                      handleImageChange(e, "shopPhotoPreview", "shopPhoto")
                    }
                  />
                  {errors.shopPhoto && (
                    <p className="text-red-600 mt-2">
                      {errors.shopPhoto.message}
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
          <div className="w-full">
            <p className="text-[18px] text-[#13141D] font-lato">
              Add A Cover Photo *
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
                  <div className="absolute inset-0 bg-black/10 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[8px]">
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
              render={() => (
                <>
                  <input
                    type="file"
                    id="coverPhotoInput"
                    accept="image/*"
                    className="hidden"
                    onChange={e =>
                      handleImageChange(e, "coverPhotoPreview", "coverPhoto")
                    }
                  />
                  {errors.coverPhoto && (
                    <p className="text-red-600 mt-2">
                      {errors.coverPhoto.message}
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
    </form>
  );
};

export default EditFormTwo;
