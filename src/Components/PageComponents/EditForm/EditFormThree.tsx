"use client";
import React, { useEffect, useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import PaymentCardIcons, {
  Website,
  Facebook,
  Instagram,
  Pinterest,
} from "@/Components/Svg/SvgContainer";
type Faq = { question: string; answer: string };

const EditFormThree = ({ data }: any) => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<any>();

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "faqs",
  });

  const [newFaq, setNewFaq] = useState<Faq>({ question: "", answer: "" });
  const [faq, setFaq] = useState<any>([]);
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

  useEffect(() => {
    setFaq(data?.shop_info?.faqs);
  }, [data?.shop_info?.faqs]);

  return (
    <div>
      <h4 className="mt-5 text-[#274F45] text-[20px] font-semibold">
        About Your Shop
      </h4>
      <div className="my-8 border rounded-lg p-8">
        {/* Tagline */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Tagline <span className="text-[#A7A39C]">(15 words max)</span>
          </label>
          <input
            type="text"
            {...register("tagline", {
              maxLength: { value: 120, message: "Max 15 words" },
            })}
            defaultValue={data?.shop_info?.about?.tagline}
            className="form-input"
          />
          {errors.tagline?.message && (
            <p className="text-red-600 mt-1">
              {errors.tagline.message as string}
            </p>
          )}
        </div>

        {/* Statement */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Two-Sentence Statement
            <span className="text-[#A7A39C]">(50 words max)</span>
          </label>
          <textarea
            defaultValue={data?.shop_info?.about?.statement}
            {...register("statement", {
              maxLength: { value: 350, message: "Max 50 words" },
            })}
            className="form-input"
          />
          {errors.statement?.message && (
            <p className="text-red-600 mt-1">
              {errors.statement.message as string}
            </p>
          )}
        </div>

        {/* Our Story */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Our Story <span className="text-[#A7A39C]">(450 words max)</span>
          </label>
          <textarea
            defaultValue={data?.shop_info?.about?.our_story}
            {...register("our_story", {
              maxLength: { value: 3000, message: "Max 450 words" },
            })}
            className="form-input"
          />
          {errors.our_story?.message && (
            <p className="text-red-600 mt-1">
              {errors.our_story.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Shop Policies */}
      <div className="border rounded-lg p-8 mb-6">
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Accepted Payment Methods
          </label>

          <PaymentCardIcons />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {data?.shop_info?.policies?.payment_methods?.map((method: any) => (
              <label
                key={method}
                className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  value={method}
                  {...register("payment_methods", {
                    validate: value =>
                      value.length > 0 || "Select at least one payment method",
                  })}
                  className="w-4 h-4 text-primary-green"
                />
                <span className="text-[#4B4A47]">{method}</span>
              </label>
            ))}
          </div>

          {errors.payment_methods && (
            <p className="text-red-600 mt-2">
              {errors.payment_methods.message as string}
            </p>
          )}
        </div>

        {/* Shipping Information */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Shipping Information
            <span className="text-[#A7A39C]">(max 75 words)</span>
          </label>

          <textarea
            defaultValue={data?.shop_info?.policies?.shipping_information}
            {...register("shipping_information", {
              maxLength: { value: 500, message: "Max 75 words" },
            })}
            className="form-input"
          />
          {errors.shipping_information?.message && (
            <p className="text-red-600 mt-1">
              {errors.shipping_information.message as string}
            </p>
          )}
        </div>

        {/* Return & Exchanges */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Returns & Exchanges
            <span className="text-[#A7A39C]">(max 75 words)</span>
          </label>
          <textarea
            defaultValue={data?.shop_info?.policies?.return_policy}
            {...register("return_policy", {
              maxLength: { value: 500, message: "Max 75 words" },
            })}
            className="form-input"
          />
          {errors.return_policy?.message && (
            <p className="text-red-600 mt-1">
              {errors.return_policy.message as string}
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
        {faq?.map((field: any, index: number) => {
          const faq = watch("faqs")?.[index];
          return (
            <div
              key={field?.id}
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
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="flex gap-x-4 items-center">
            <Website />
            <input
              defaultValue={data?.shop_info?.social_links?.website_url}
              type="text"
              placeholder="Type Your Website link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("website_url")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Facebook />
            <input
              type="text"
              defaultValue={data?.shop_info?.social_links?.facebook_url}
              placeholder="Type Your Facebook link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("facebook_url")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Instagram />
            <input
              type="text"
              defaultValue={data?.shop_info?.social_links?.instagram_url}
              placeholder="Type Your Instagram link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("instagram_url")}
            />
          </div>
          <div className="flex gap-x-4 items-center">
            <Pinterest />
            <input
              type="text"
              defaultValue={data?.shop_info?.social_links?.pinterest_url}
              placeholder="Type Your Pinterest link here"
              className="outline-0 underline w-fit text-[#67645F] font-bold"
              {...register("pinterest_url")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFormThree;
