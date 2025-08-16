"use client";

import type React from "react";
import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import PaymentCardIcons, {
  Camera,
  Facebook,
  Instagram,
  Pinterest,
  Website,
} from "@/Components/Svg/SvgContainer";

interface StepThreeProps {
  onNext: () => void;
  onPrev: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onNext, onPrev }) => {
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "faqs",
  });

  const [showFaqForm, setShowFaqForm] = useState(false);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);

  const profilePhotoPreview = watch("profilePhotoPreview");

  // Handle profile image
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "profilePhoto",
    previewField: "profilePhotoPreview"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(field, file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue(previewField, reader.result as string, {
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // FAQ Handlers
  const handleAddFaq = () => {
    if (fields.length >= 10) {
      alert("Maximum 10 FAQs allowed");
      return;
    }
    setShowFaqForm(true);
  };

  const handleSaveFaq = () => {
    if (newFaq.question.trim() && newFaq.answer.trim()) {
      if (editingFaqIndex !== null) {
        const currentFaqs = watch("faqs");
        currentFaqs[editingFaqIndex] = newFaq;
        setValue("faqs", currentFaqs);
        setEditingFaqIndex(null);
      } else {
        append(newFaq);
      }
      setNewFaq({ question: "", answer: "" });
      setShowFaqForm(false);
    } else {
      alert("Please fill both question and answer");
    }
  };

  const handleCancelFaq = () => {
    setNewFaq({ question: "", answer: "" });
    setShowFaqForm(false);
    setEditingFaqIndex(null);
  };

  const handleEditFaq = (index: number) => {
    const faq = watch("faqs")[index];
    setNewFaq(faq);
    setEditingFaqIndex(index);
    setShowFaqForm(true);
  };

  const handleDeleteFaq = (index: number) => {
    remove(index);
  };

  return (
    <section className="">
      <h2 className="auth_title mt-16">About Your Shop</h2>

      <div className="border border-[#A7A39C] rounded-[20px] my-[56px] p-20">
        {/* Profile Picture */}
        <div className="mt-8">
          <p className="form-label">Profile Picture *</p>
          <div
            className="relative bg-[#F0EEE9] h-[150px] w-[150px] rounded-full mt-4 flex flex-col justify-center items-center cursor-pointer overflow-hidden border border-[#A7A39C]"
            onClick={() =>
              document.getElementById("profilePhotoInput")?.click()
            }
          >
            {profilePhotoPreview ? (
              <>
                <img
                  src={profilePhotoPreview}
                  alt="Profile Preview"
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
          <input
            type="file"
            id="profilePhotoInput"
            accept="image/*"
            className="hidden"
            {...register("profilePhoto", {
              validate: (_, formValues) => {
                if (formValues.profilePhoto instanceof File) return true;
                if (formValues.profilePhotoPreview) return true;
                return "Profile picture is required";
              },
            })}
            onChange={e =>
              handleImageChange(e, "profilePhoto", "profilePhotoPreview")
            }
          />
          {errors.profilePhoto && (
            <p className="text-red-600">
              {errors.profilePhoto.message as string}
            </p>
          )}
          <h5 className="text-[#67645F] text-[14px] mt-2">
            Max file size: 10 MB
          </h5>
        </div>

        {/* About Your Shop */}
        <div className="my-8 border rounded-lg p-8">
          <p className="text-[20px] font-normal text-[#13141D] mb-4">
            About Shop
          </p>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Company Name
            </label>
            <div className="border border-gray-300 p-2 rounded bg-gray-100 text-[#13141D] w-fit">
              {"companyName"}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Tagline <span className="text-[#A7A39C]">(15 words max)</span>
            </label>
            <input
              type="text"
              {...register("aboutShopTagline", {
                maxLength: { value: 120, message: "Max 15 words" },
              })}
              placeholder="Write a short, memorable tagline that captures your business."
              className="form-input"
            />
            {errors.aboutShopTagline && (
              <p className="text-red-600 mt-1">
                {errors.aboutShopTagline.message as string}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Two-Sentence Statement{" "}
              <span className="text-[#A7A39C]">(50 words max)</span>
            </label>
            <textarea
              {...register("aboutShopStatement", {
                maxLength: { value: 350, message: "Max 50 words" },
              })}
              placeholder="In two sentences, tell shoppers who you are and what you offer."
              className="form-input"
            />
            {errors.aboutShopStatement && (
              <p className="text-red-600 mt-1">
                {errors.aboutShopStatement.message as string}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Our Story <span className="text-[#A7A39C]">(450 words max)</span>
            </label>
            <textarea
              {...register("aboutShopStory", {
                maxLength: { value: 3000, message: "Max 450 words" },
              })}
              placeholder="Tell the story behind your shop, your journey, values, and passion."
              className="form-input"
            />
            {errors.aboutShopStory && (
              <p className="text-red-600 mt-1">
                {errors.aboutShopStory.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Shop Policies */}
        <div className="border rounded-lg p-8">
          <p className="text-[20px] font-normal text-[#13141D] mb-4">
            Shop Policies
          </p>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Accepted Payment Methods{" "}
              <span className="text-[#A7A39C]">(max 40 words)</span>
            </label>
            <PaymentCardIcons />
            <input
              type="text"
              {...register("shopPaymentMethods", {
                maxLength: { value: 250, message: "Max 40 words" },
              })}
              placeholder="Example: Cash, PayPal, Venmo, Credit Card"
              className="form-input"
            />
            {errors.shopPaymentMethods && (
              <p className="text-red-600 mt-1">
                {errors.shopPaymentMethods.message as string}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Shipping Information{" "}
              <span className="text-[#A7A39C]">(max 75 words)</span>
            </label>
            <textarea
              {...register("shopShippingInfo", {
                maxLength: { value: 500, message: "Max 75 words" },
              })}
              placeholder="Example: Orders ship within 3 business days via USPS. Local pickup in Austin, TX available. Shipping to U.S. only."
              className="form-input"
            />
            {errors.shopShippingInfo && (
              <p className="text-red-600 mt-1">
                {errors.shopShippingInfo.message as string}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#4B4A47] font-semibold mb-1">
              Returns & Exchanges{" "}
              <span className="text-[#A7A39C]">(max 75 words)</span>
            </label>
            <textarea
              {...register("shopReturnsInfo", {
                maxLength: { value: 500, message: "Max 75 words" },
              })}
              placeholder="Example: Returns accepted within 14 days of delivery. Items must be unused and in original packaging."
              className="form-input"
            />
            {errors.shopReturnsInfo && (
              <p className="text-red-600 mt-1">
                {errors.shopReturnsInfo.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Add FAQ Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleAddFaq}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + Add FAQ
          </button>
        </div>

        {/* FAQ Form */}
        {showFaqForm && (
          <div className="border p-4 rounded mt-4">
            <input
              type="text"
              placeholder="Question"
              value={newFaq.question}
              onChange={e => setNewFaq({ ...newFaq, question: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              placeholder="Answer"
              value={newFaq.answer}
              onChange={e => setNewFaq({ ...newFaq, answer: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSaveFaq}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelFaq}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* FAQ List */}
        {fields.length > 0 && (
          <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
                <div className="col-span-1">#</div>
                <div className="col-span-4">Question</div>
                <div className="col-span-5">Answer</div>
                <div className="col-span-2">Actions</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {fields.map((field, index) => {
                const faq = watch("faqs")[index];
                return (
                  <div key={field.id} className="px-4 py-3">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1 text-sm text-gray-600">
                        {index + 1}
                      </div>
                      <div className="col-span-4 text-sm text-gray-900">
                        {faq?.question}
                      </div>
                      <div className="col-span-5 text-sm text-gray-600 truncate">
                        {faq?.answer}
                      </div>
                      <div className="col-span-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditFaq(index)}
                          className="p-1 text-green-600 hover:bg-green-100 rounded cursor-pointer"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteFaq(index)}
                          className="p-1 text-red-600 hover:bg-red-100 rounded cursor-pointer"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <li className="text-[16px] text-[#4B4A47] font-semibold list-disc mt-2">
          You can add up to 10 FAQs ({fields.length}/10)
        </li>
      </div>

      {/* Link Your Shop Section */}
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
              {...register("socialMedia.website")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Facebook />
            <input
              type="text"
              placeholder="Type Your Facebook link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.facebook")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Instagram />
            <input
              type="text"
              placeholder="Type Your Instagram link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.instagram")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Pinterest />
            <input
              type="text"
              placeholder="Type Your Pinterest link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.pinterest")}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button type="button" onClick={onPrev} className="auth-primary-btn">
          Back
        </button>
        <div className="flex gap-x-5">
          <button type="button" onClick={onNext} className="auth-secondary-btn">
            Save & Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
