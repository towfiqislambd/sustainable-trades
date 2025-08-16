"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import PaymentCardIcons, {
  Website,
  Facebook,
  Instagram,
  Pinterest,
} from "@/Components/Svg/SvgContainer";

type Faq = { question: string; answer: string };

type FormValues = {
  aboutShopTagline: string;
  aboutShopStatement: string;
  aboutShopStory: string;
  shopPaymentMethods: string;
  shopShippingInfo: string;
  shopReturnsInfo: string;
  faqs: Faq[];
  socialMedia: {
    website: string;
    facebook: string;
    instagram: string;
    pinterest: string;
  };
};

const EditFormThree: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      aboutShopTagline: "Your catchy tagline here",
      aboutShopStatement: "Short two-sentence statement about your shop.",
      aboutShopStory:
        "Tell the story behind your shop, your journey, values, and passion.",
      shopPaymentMethods: "Cash, PayPal, Venmo, Credit Card",
      shopShippingInfo:
        "Orders ship within 3 business days via USPS. Local pickup in Austin, TX available. Shipping to U.S. only.",
      shopReturnsInfo:
        "Returns accepted within 14 days of delivery. Items must be unused and in original packaging.",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "14-day return policy.",
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently only within the U.S.",
        },
      ],
      socialMedia: {
        website: "https://myshop.com",
        facebook: "https://facebook.com/myshop",
        instagram: "https://instagram.com/myshop",
        pinterest: "https://pinterest.com/myshop",
      },
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "faqs",
  });

  const [newFaq, setNewFaq] = useState<Faq>({ question: "", answer: "" });
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);

  const handleSaveFaq = () => {
    if (!newFaq.question || !newFaq.answer) return;

    if (editingFaqIndex !== null) {
      update(editingFaqIndex, newFaq);
      setEditingFaqIndex(null);
    } else if (fields.length < 10) {
      append(newFaq);
    }

    setNewFaq({ question: "", answer: "" });
  };

  const handleEditFaq = (index: number) => {
    const faq = watch("faqs")[index];
    setNewFaq({ question: faq.question, answer: faq.answer });
    setEditingFaqIndex(index);
  };

  const handleDeleteFaq = (index: number) => {
    remove(index);
    if (editingFaqIndex === index) {
      setEditingFaqIndex(null);
      setNewFaq({ question: "", answer: "" });
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="mt-5 text-[#274F45] text-[20px] font-semibold">
        About Your Shop
      </h4>
      <h2 className="mt-5 text-[#000] text-[20px] font-semibold">
        About Your Shop (optional)
      </h2>

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
            className="form-input"
          />
          {errors.aboutShopTagline && (
            <p className="text-red-600 mt-1">
              {errors.aboutShopTagline.message}
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
            className="form-input"
          />
          {errors.aboutShopStatement && (
            <p className="text-red-600 mt-1">
              {errors.aboutShopStatement.message}
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
            className="form-input"
          />
          {errors.aboutShopStory && (
            <p className="text-red-600 mt-1">{errors.aboutShopStory.message}</p>
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
          <div className="flex gap-2 mb-2"><PaymentCardIcons/></div>
          <input
            type="text"
            {...register("shopPaymentMethods", {
              maxLength: { value: 250, message: "Max 40 words" },
            })}
            className="form-input"
          />
          {errors.shopPaymentMethods && (
            <p className="text-red-600 mt-1">
              {errors.shopPaymentMethods.message}
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
            className="form-input"
          />
          {errors.shopShippingInfo && (
            <p className="text-red-600 mt-1">
              {errors.shopShippingInfo.message}
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
            className="form-input"
          />
          {errors.shopReturnsInfo && (
            <p className="text-red-600 mt-1">
              {errors.shopReturnsInfo.message}
            </p>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border p-4 rounded mt-6">
        <h3 className="text-lg font-semibold mb-2">Add FAQ</h3>
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
            {editingFaqIndex !== null ? "Update" : "Save"}
          </button>
          {editingFaqIndex !== null && (
            <button
              type="button"
              onClick={() => {
                setNewFaq({ question: "", answer: "" });
                setEditingFaqIndex(null);
              }}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* FAQ List */}
      <div className="mt-4">
        {fields.length > 0 && (
          <div className="border border-gray-200 rounded-lg overflow-hidden">
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
                          ✏️
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteFaq(index)}
                          className="p-1 text-red-600 hover:bg-red-100 rounded cursor-pointer"
                        >
                          🗑
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

      {/* Social Media Section */}
      <div className="mt-6">
        <p className="text-[20px] font-normal text-[#13141D] pb-4 pt-2">
          Link Your Shop <span className="text-[#67645F]">(Optional)</span>
        </p>
        <div className="flex gap-x-4">
          <div className="flex gap-x-4 items-center">
            <Website />
            <input
              type="text"
              placeholder="Website"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.website")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Facebook />
            <input
              type="text"
              placeholder="Facebook"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.facebook")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Instagram />
            <input
              type="text"
              placeholder="Instagram"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.instagram")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Pinterest />
            <input
              type="text"
              placeholder="Pinterest"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.pinterest")}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditFormThree;
