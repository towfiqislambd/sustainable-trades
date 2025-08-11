"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Facebook,
  Instagram,
  Pinterest,
  Website,
} from "@/Components/Svg/SvgContainer";

const StepThree = ({ step, setStep, totalSteps }: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="">
      <h2 className="auth_title mt-16">About Your Shop</h2>
      <div className="border border-[#A7A39C] rounded-[20px] my-[56px] p-20">
        <p className="text-[20px] font-normal text-[#13141D]">
          About Your Shop <span className="text-[#67645F]">(Optional)</span>
          <h5 className="text-[16px] text-[#4B4A47] pt-4 pb-6">
            Let your neighbors know who you are. Add details about yourself,
            your company, and/or your products. People love to hear about your
            mission, values, products, and services!
          </h5>
        </p>
        <textarea
          className="border border-[#67645F] p-4 rounded-[8px] w-full h-[270px] outline-0 text-[#67645F] font-normal"
          placeholder="Enter details about your shop here"
          {...register("aboutShop", {
            maxLength: { value: 500, message: "Max 500 characters allowed" },
          })}
        ></textarea>
        {errors.aboutShop && (
          <p className="text-red-600">{errors.aboutShop.message as string}</p>
        )}
        <li className="text-[16px] text-[#4B4A47] font-semibold list-disc mt-2">
          Max 500 characters
        </li>

        <div className="py-8">
          <p className="text-[20px] font-normal text-[#13141D]">
            Shop Policies <span className="text-[#67645F]">(Optional)</span>
          </p>
          <textarea
            className="border border-[#67645F] p-4 rounded-[8px] w-full h-[270px] outline-0 text-[#67645F] font-normal"
            placeholder="Enter details about your shop policies here"
            {...register("shopPolicies", {
              maxLength: { value: 500, message: "Max 500 characters allowed" },
            })}
          ></textarea>
          {errors.shopPolicies && (
            <p className="text-red-600">
              {errors.shopPolicies.message as string}
            </p>
          )}
          <li className="text-[16px] text-[#4B4A47] font-semibold list-disc mt-2">
            Max 500 characters
          </li>
        </div>

        <div>
          <p className="text-[20px] font-normal text-[#13141D]">
            FAQ <span className="text-[#67645F]">(Optional)</span>
          </p>
          <textarea
            className="border border-[#67645F] p-4 rounded-[8px] w-full h-[270px] outline-0 text-[#67645F] font-normal"
            placeholder="Enter details about your shop FAQs here"
            {...register("faq", {
              maxLength: { value: 500, message: "Max 500 characters allowed" },
            })}
          ></textarea>
          {errors.faq && (
            <p className="text-red-600">{errors.faq.message as string}</p>
          )}
          <li className="text-[16px] text-[#4B4A47] font-semibold list-disc mt-2">
            Max 500 characters
          </li>
        </div>

        <div>
          <p className="text-[20px] font-normal text-[#13141D] pb-4 pt-2">
            Link Your Shop <span className="text-[#67645F]">(Optional)</span>
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-x-4 items-center">
              <Website />
              <input
                type="text"
                placeholder="Type Your Website link here"
                className="outline-0 underline w-fit text-[#67645F] font-bold"
                {...register("websiteLink")}
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <Facebook />
              <input
                type="text"
                placeholder="Type Your Facebook link here"
                className="outline-0 underline w-fit text-[#67645F] font-bold"
                {...register("facebookLink")}
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <Instagram />
              <input
                type="text"
                placeholder="Type Your Instagram link here"
                className="outline-0 underline w-fit text-[#67645F] font-bold"
                {...register("instagramLink")}
              />
            </div>
            <div className="flex gap-x-4 items-center">
              <Pinterest />
              <input
                type="text"
                placeholder="Type Your Pinterest link here"
                className="outline-0 underline w-fit text-[#67645F] font-bold"
                {...register("pinterestLink")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="auth-primary-btn"
        >
          Back
        </button>
        <div className="flex gap-x-5">
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="auth-secondary-btn"
          >
            Skip For Now
          </button>
          <button type="submit" className="auth-secondary-btn">
            Save and Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
