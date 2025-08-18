"use client";

import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
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
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<FormValues>();

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

  return (
    <div>
      <h4 className="mt-5 text-[#274F45] text-[20px] font-semibold">
        About Your Shop
      </h4>
      <div className="my-8 border rounded-lg p-8">
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
          {errors.aboutShopTagline?.message && (
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
            className="form-input"
          />
          {errors.aboutShopStatement?.message && (
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
            className="form-input"
          />
          {errors.aboutShopStory?.message && (
            <p className="text-red-600 mt-1">
              {errors.aboutShopStory.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Shop Policies */}
      <div className="border rounded-lg p-8 mb-6">
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Accepted Payment Methods{" "}
            <span className="text-[#A7A39C]">(max 40 words)</span>
          </label>
          <div className="flex gap-2 mb-2">
            <PaymentCardIcons />
          </div>
          <input
            type="text"
            {...register("shopPaymentMethods", {
              maxLength: { value: 250, message: "Max 40 words" },
            })}
            className="form-input"
          />
          {errors.shopPaymentMethods?.message && (
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
            className="form-input"
          />
          {errors.shopShippingInfo?.message && (
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
            className="form-input"
          />
          {errors.shopReturnsInfo?.message && (
            <p className="text-red-600 mt-1">
              {errors.shopReturnsInfo.message as string}
            </p>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border p-4 rounded mb-4">
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
      <div className="mb-4">
        {fields.map((field, index) => {
          const faq = watch("faqs")[index];
          return (
            <div
              key={field.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <strong>{index + 1}. </strong> {faq?.question} - {faq?.answer}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleEditFaq(index)}
                  className="text-green-600"
                >
                  ✏️
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteFaq(index)}
                  className="text-red-600"
                >
                  🗑
                </button>
              </div>
            </div>
          );
        })}
        <p className="text-sm mt-2 text-gray-600">
          You can add up to 10 FAQs ({fields.length}/10)
        </p>
      </div>

      {/* Social Media */}
      <div>
        <p className="text-[20px] font-normal text-[#13141D] pb-4 pt-2">
          Link Your Shop <span className="text-[#67645F]">(Optional)</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-x-4 items-center">
            <Website />
            <input
              defaultValue="www.com"
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
              defaultValue="www.com"
              placeholder="Type Your Facebook link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.facebook")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Instagram />
            <input
              type="text"
              defaultValue="www.com"
              placeholder="Type Your Instagram link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.instagram")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Pinterest />
            <input
              type="text"
              defaultValue="www.com"
              placeholder="Type Your Pinterest link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("socialMedia.pinterest")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFormThree;
