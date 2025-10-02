"use client";
import React from "react";
import Preview from "@/Assets/cover.jpg";
import { Camera } from "@/Components/Svg/SvgContainer";
import { useFormContext, Controller } from "react-hook-form";

const EditFormTwo = ({ data }: any) => {
  const {
    control,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<any>();

  const shopPhotoPreview = watch("shopPhotoPreview") || Preview.src;
  const coverPhotoPreview = watch("coverPhotoPreview") || Preview.src;

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

  return (
    <div className="mt-5">
      <h2 className="text-[#274F45] text-[20px] font-semibold">Your Shop</h2>

      <div className="lg:mt-12 mt-5 grid lg:grid-cols-2 grid-cols-1 gap-x-[96px] items-center lg:gap-y-10 gap-y-5 font-lato">
        {/* Shop Name */}
        <div>
          <p className="form-label">Name Your Shop *</p>
          <input
            type="text"
            {...register("shopName")}
            defaultValue={data?.shop_info?.shop_name}
            className="form-input"
            placeholder="Name Your Shop *"
          />
          <p className="text-red-600 mt-2">
            {errors.shopPhoto ? String(errors.shopPhoto?.message) : null}
          </p>
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
            {...register("cityState")}
            className="form-input"
            placeholder="City, State"
          />
          <p className="text-red-600">
            {errors.cityState ? String(errors.cityState.message) : null}
          </p>
        </div>
        <h5 className="text-[16px] text-[#4B4A47]">
          This is so you show up in your local area on our Geo-locator map.{" "}
          <span className="underline">More info about this</span>
        </h5>
      </div>

      <div className=" mt-8 mb-[56px] lg:flex gap-x-8">
        {/* Shop Photo */}
        <div>
          <p className="text-[18px] text-[#13141D] font-lato">
            Add A Profile Photo *
          </p>
          <div
            className="relative bg-[#F0EEE9] h-[270px] w-[270px] lg:mx-0 mx-auto rounded-full mt-6 flex flex-col justify-center items-center cursor-pointer overflow-hidden"
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
                <p className="text-red-600 mt-2">
                  {errors.shopPhoto ? String(errors.shopPhoto.message) : null}
                </p>
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
            onClick={() => document.getElementById("coverPhotoInput")?.click()}
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
                <p className="text-red-600 mt-2">
                  {errors.coverPhoto ? String(errors.coverPhoto.message) : null}
                </p>
              </>
            )}
          />
          <h5 className="text-center text-[#67645F] text-[16px] mt-2">
            Max file size: 10 MB
          </h5>
        </div>
      </div>
    </div>
  );
};

export default EditFormTwo;
