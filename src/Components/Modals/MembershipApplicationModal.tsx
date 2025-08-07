"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
type formData = {
  full_name: string;
  photo: string;
  shop_name: string;
  shop_description: string;
  why_important: string;
  what_impact: string;
  what_type: string;
};

const MembershipApplicationModal = () => {
  const [imageFile, setImageFile] = useState<string>("");
  const inputClass =
    "block w-full outline-none rounded-[5px] px-3 py-2 border border-secondary-black";
  const labelClass =
    "font-semibold text-secondary-black block tracking-[0.16px] mb-1.5";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <div className="px-5">
      <h2 className="text-2xl font-semibold text-secondary-black mb-5">
        Membership Spotlight Application
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="full_name" className={labelClass}>
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Jane Doe"
            {...register("full_name", { required: "Full Name is required" })}
            className={inputClass}
          />
          {errors.full_name && (
            <span className="text-red-500 text-sm block mt-1.5">
              {errors.full_name.message}
            </span>
          )}
        </div>

        {/* Upload Photo */}
        <div>
          <label className={labelClass}>Upload Photo or Logo</label>
          <div>
            <label
              htmlFor="upload_photo"
              className="border border-secondary-black block w-full hover:bg-gray-50 duration-200 transition-all rounded-[5px] text-center cursor-pointer py-6"
            >
              <p className="text-gray-500 text-sm md:text-base">
                Click to upload photo
              </p>

              <input
                type="file"
                className="hidden"
                id="upload_photo"
                accept="image/*"
                {...register("photo", {
                  required: "Photo is required",
                  onChange: e => {
                    const file = e.target.files[0].name;
                    if (file) {
                      setImageFile(file);
                    }
                  },
                })}
              />
            </label>
            {errors.photo && (
              <p className="text-red-500 text-sm block mt-1.5">
                {errors.photo.message}
              </p>
            )}
            {imageFile && (
              <p className="text-sm text-green-500 mt-1.5">{imageFile}</p>
            )}
          </div>
        </div>

        {/* Business/Shop Name */}
        <div>
          <label htmlFor="shop_name" className={labelClass}>
            Business/Shop Name
          </label>
          <input
            type="text"
            id="shop_name"
            placeholder="Business name here"
            {...register("shop_name", {
              required: "Business Name is required",
            })}
            className={inputClass}
          />
          {errors.shop_name && (
            <span className="text-red-500 text-sm block mt-1.5">
              {errors.shop_name.message}
            </span>
          )}
        </div>

        {/* Business/Shop Description */}
        <div>
          <label htmlFor="shop_name" className={labelClass}>
            Business/Shop Description
          </label>
          <textarea
            id="shop_description"
            className={`h-20 ${inputClass}`}
            placeholder="Write a short description"
            {...register("shop_description", {
              required: "Shop Description is required",
            })}
          ></textarea>
          {errors.shop_description && (
            <span className="text-red-500 text-sm block mt-1.5">
              {errors.shop_description.message}
            </span>
          )}
        </div>

        {/* Why important */}
        <div>
          <label htmlFor="why_important" className={labelClass}>
            Why is sustainability important to you and how do you practice it?
          </label>
          <textarea
            id="why_important"
            className={`h-20 ${inputClass}`}
            placeholder="Write 2-3 lines"
            {...register("why_important")}
          ></textarea>
        </div>

        {/* What Impact */}
        <div>
          <label htmlFor="what_impact" className={labelClass}>
            What impact does your business have on the community?
          </label>
          <textarea
            id="what_impact"
            className={`h-20 ${inputClass}`}
            placeholder="Write 2-3 lines"
            {...register("what_impact")}
          ></textarea>
        </div>

        {/* What Type */}
        <div>
          <label htmlFor="what_type" className={labelClass}>
            What types of community engagement are you involved in?
          </label>
          <textarea
            id="what_type"
            className={`h-20 ${inputClass}`}
            placeholder="Write 2-3 lines"
            {...register("what_type")}
          ></textarea>
        </div>

        {/* Submit btn */}
        <div className="flex justify-end">
          <button className="text-accent-white bg-primary-green font-semibold px-10 py-2.5 rounded-lg cursor-pointer duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green transition-all shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipApplicationModal;
