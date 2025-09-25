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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <div className="p-5 ">
      <h2 className="md:text-xl text-lg xl:text-2xl font-semibold text-secondary-black mb-5">
        Membership Spotlight Application
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="full_name"
            className="form-label  text-sm md:text-base"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Jane Doe"
            {...register("full_name", { required: "Full Name is required" })}
            className="form-input"
          />
          {errors.full_name && (
            <span className="form-error">{errors.full_name.message}</span>
          )}
        </div>

        {/* Upload Photo */}
        <div>
          <label className="form-label text-sm md:text-base mb-2">
            Upload Photo or Logo
          </label>
          <div>
            <label
              htmlFor="upload_photo"
              className="border border-secondary-black block w-full hover:bg-gray-50 duration-200 transition-all rounded-[5px] text-center cursor-pointer md:py-3 py-1.5 lg:py-6"
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
              <p className="form-error">{errors.photo.message}</p>
            )}
            {imageFile && (
              <p className="text-sm text-green-500 mt-1.5">{imageFile}</p>
            )}
          </div>
        </div>

        {/* Business/Shop Name */}
        <div>
          <label
            htmlFor="shop_name"
            className="form-label text-sm md:text-base"
          >
            Business/Shop Name
          </label>
          <input
            type="text"
            id="shop_name"
            placeholder="Business name here"
            {...register("shop_name", {
              required: "Business Name is required",
            })}
            className="form-input"
          />
          {errors.shop_name && (
            <span className="form-error">{errors.shop_name.message}</span>
          )}
        </div>

        {/* Business/Shop Description */}
        <div>
          <label
            htmlFor="shop_name"
            className="form-label text-sm md:text-base"
          >
            Business/Shop Description
          </label>
          <textarea
            id="shop_description"
            className={`md:h-20 form-input`}
            placeholder="Write a short description"
            {...register("shop_description", {
              required: "Shop Description is required",
            })}
          ></textarea>
          {errors.shop_description && (
            <span className="form-error">
              {errors.shop_description.message}
            </span>
          )}
        </div>

        {/* Why important */}
        <div>
          <label
            htmlFor="why_important"
            className="form-label text-sm md:text-base"
          >
            Why is sustainability important to you and how do you practice it?
          </label>
          <textarea
            id="why_important"
            className={`md:h-20 form-input`}
            placeholder="Write 2-3 lines"
            {...register("why_important")}
          ></textarea>
        </div>

        {/* What Impact */}
        <div>
          <label
            htmlFor="what_impact"
            className="form-label text-sm md:text-base"
          >
            What impact does your business have on the community?
          </label>
          <textarea
            id="what_impact"
            className={`md:h-20 form-input`}
            placeholder="Write 2-3 lines"
            {...register("what_impact")}
          ></textarea>
        </div>

        {/* What Type */}
        <div>
          <label
            htmlFor="what_type"
            className="form-label text-sm md:text-base"
          >
            What types of community engagement are you involved in?
          </label>
          <textarea
            id="what_type"
            className={`h-auto md:h-20 form-input`}
            placeholder="Write 2-3 lines"
            {...register("what_type")}
          ></textarea>
        </div>

        {/* Submit btn */}
        <div className="flex justify-end">
          <button className="text-accent-white bg-primary-green font-semibold px-10 py-1 md:py-2.5 rounded-lg cursor-pointer duration-300 border-2 border-primary-green hover:bg-transparent hover:text-primary-green transition-all shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipApplicationModal;
