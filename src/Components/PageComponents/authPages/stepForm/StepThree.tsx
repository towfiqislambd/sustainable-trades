"use client";

import type React from "react";
import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import {
  Facebook,
  Instagram,
  Pinterest,
  PinterestSvg,
  Website,
} from "@/Components/Svg/SvgContainer";
import { Editor } from "@tinymce/tinymce-react";

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

  // State for FAQ form
  const [showFaqForm, setShowFaqForm] = useState(false);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);

  const [editingAbout, setEditingAbout] = useState(true);
  const [editingPolicies, setEditingPolicies] = useState(true);

  // TinyMCE configuration
  const tinyMCEConfig = {
    height: 200,
    menubar: false,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "code",
      "help",
      "wordcount",
    ],
    toolbar:
      "undo redo | blocks | " +
      "bold italic forecolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      "removeformat | help",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    branding: false,
    promotion: false,
  };

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
        {/* About Your Shop Section with TinyMCE */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[20px] font-normal text-[#13141D]">
              About Your Shop <span className="text-[#67645F]">(Optional)</span>
            </p>
            <button
              type="button"
              onClick={() => setEditingAbout(!editingAbout)}
              className="p-2 text-[#67645F] hover:bg-gray-100 rounded cursor-pointer"
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
          </div>

          {!editingAbout ? (
            <div
              className="border border-[#67645F] p-4 rounded-[8px] w-full min-h-[100px] text-[#67645F] font-normal cursor-pointer hover:bg-gray-50"
              onClick={() => setEditingAbout(true)}
            >
              {watch("aboutShop") ? (
                <div dangerouslySetInnerHTML={{ __html: watch("aboutShop") }} />
              ) : (
                <span className="text-[#A7A39C]">
                  Enter details about your shop here
                </span>
              )}
            </div>
          ) : (
            <div>
              <Editor
                apiKey="o46hi6tzsyebpfwy7rl86hoocely1n7urd8h0t6zl9o0hsor"
                value={watch("aboutShop") || ""}
                onEditorChange={content => setValue("aboutShop", content)}
                init={tinyMCEConfig}
              />
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingAbout(false)}
                  className="px-3 py-1 bg-primary-green text-white rounded text-sm cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingAbout(false)}
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {errors.aboutShop && (
            <p className="text-red-600 mt-2">
              {errors.aboutShop.message as string}
            </p>
          )}
          <li className="text-[16px] text-[#4B4A47] font-semibold list-disc mt-2">
            Max 500 characters
          </li>
        </div>

        {/* Shop Policies Section with TinyMCE */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[20px] font-normal text-[#13141D]">
              Shop Policies <span className="text-[#67645F]">(Optional)</span>
            </p>
            <button
              type="button"
              onClick={() => setEditingPolicies(!editingPolicies)}
              className="p-2 text-[#67645F] hover:bg-gray-100 rounded"
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
          </div>

          {!editingPolicies ? (
            <div
              className="border border-[#67645F] p-4 rounded-[8px] w-full min-h-[100px] text-[#67645F] font-normal cursor-pointer hover:bg-gray-50"
              onClick={() => setEditingPolicies(true)}
            >
              {watch("shopPolicies") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: watch("shopPolicies") }}
                />
              ) : (
                <span className="text-[#A7A39C]">
                  Enter details about your shop policies here
                </span>
              )}
            </div>
          ) : (
            <div>
              <Editor
                apiKey="o46hi6tzsyebpfwy7rl86hoocely1n7urd8h0t6zl9o0hsor"
                value={watch("shopPolicies") || ""}
                onEditorChange={content => setValue("shopPolicies", content)}
                init={tinyMCEConfig}
              />
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingPolicies(false)}
                  className="px-3 py-1 bg-primary-green text-white rounded text-sm cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingPolicies(false)}
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {errors.shopPolicies && (
            <p className="text-red-600 mt-2">
              {errors.shopPolicies.message as string}
            </p>
          )}
          <li className="text-[16px] text-[#4B4A47] font-semibold list-disc mt-2">
            Max 500 characters
          </li>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[20px] font-normal text-[#13141D]">
              FAQ <span className="text-[#67645F]">(Optional)</span>
            </p>
            <button
              type="button"
              onClick={handleAddFaq}
              className="bg-primary-green text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 cursor-pointer"
              disabled={fields.length >= 10}
            >
              Add FAQ
            </button>
          </div>

          {/* FAQ Form */}
          {showFaqForm && (
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question
                </label>
                <input
                  type="text"
                  value={newFaq.question}
                  onChange={e =>
                    setNewFaq({ ...newFaq, question: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                  placeholder="Enter your question"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Answer
                </label>
                <textarea
                  value={newFaq.answer}
                  onChange={e =>
                    setNewFaq({ ...newFaq, answer: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-primary-green"
                  placeholder="Enter your answer"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSaveFaq}
                  className="px-4 py-2 bg-primary-green text-white rounded text-sm hover:bg-green-700"
                >
                  {editingFaqIndex !== null ? "Update FAQ" : "Save FAQ"}
                </button>
                <button
                  type="button"
                  onClick={handleCancelFaq}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* FAQ List */}
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
              <Pinterest/>
              <input
                type="text"
                placeholder="Type Your Pinterest link here"
                className="outline-0 underline w-fit text-[#67645F] font-bold"
                {...register("socialMedia.pinterest")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button type="button" onClick={onPrev} className="auth-primary-btn">
          Back
        </button>
        <div className="flex gap-x-5">
          <button type="button" onClick={onNext} className="auth-secondary-btn">
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
