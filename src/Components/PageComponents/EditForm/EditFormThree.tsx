"use client";
import React, { useEffect, useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import PaymentCardIcons, {
  Website,
  Facebook,
  Instagram,
  Pinterest,
  Camera,
} from "@/Components/Svg/SvgContainer";
import { LiaExclamationCircleSolid } from "react-icons/lia";

type Faq = { question: string; answer: string };

const EditFormThree = ({ data }: any) => {
  const {
    register,
    control,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<any>();

  const { fields, append, remove, update, replace } = useFieldArray({
    control,
    name: "faqs",
  });

  const [newFaq, setNewFaq] = useState<Faq>({ question: "", answer: "" });
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const profilePhotoPreview = watch("profilePhotoPreview");

  useEffect(() => {
    if (data?.shop_info?.faqs && data.shop_info.faqs.length > 0) {
      setTimeout(() => {
        remove();
        data.shop_info.faqs.forEach((item: any) => {
          append({
            question: item.question,
            answer: item.answer,
          });
        });
      }, 0);
    }
  }, [data]);

  const handleSaveFaq = () => {
    if (!newFaq.question.trim() || !newFaq.answer.trim()) return;

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
    setNewFaq({ question: faq?.question, answer: faq?.answer });
    setEditingFaqIndex(index);
  };

  const handleDeleteFaq = (index: number) => {
    remove(index);
    if (editingFaqIndex === index) {
      setEditingFaqIndex(null);
      setNewFaq({ question: "", answer: "" });
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setProfileFile(file);
      setValue("about_image", file, { shouldValidate: true });

      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("profilePhotoPreview", reader.result as string, {
          shouldValidate: true,
        });
        trigger("about_image");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="lg:mt-8 mt-5">
        <p className="form-label text-center lg:text-start">
          About Your Shop Photo *
        </p>
        <div
          className="relative bg-[#F0EEE9] lg:mx-0 mx-auto h-[150px] w-[150px] rounded-full lg:mt-4 flex flex-col justify-center items-center cursor-pointer overflow-hidden border border-[#A7A39C]"
          onClick={() => document.getElementById("profilePhotoInput")?.click()}
        >
          {profilePhotoPreview ? (
            // Show uploaded image preview
            <>
              <img
                src={profilePhotoPreview} // use preview from state
                alt="Profile Preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                <Camera />
              </div>
            </>
          ) : data?.shop_info?.about?.about_image ? (
            // Show existing image if no new file selected
            <>
              <img
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${data.shop_info.about.about_image}`}
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
          {...register("about_image", {
            validate: value => value || "Profile picture is required",
          })}
          onChange={handleImageChange}
        />

        <h5 className="text-[#67645F] text-[14px] mt-2 lg:text-start text-center">
          Max file size: 10 MB
        </h5>
      </div>

      {/* About Section */}
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
            Two-Sentence Statement{" "}
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

      {/* Policies Section */}
      <div className="border rounded-lg p-8 mb-6">
        {/* Payment Methods */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Accepted Payment Methods
          </label>

          <PaymentCardIcons />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {data?.shop_info?.policies?.payment_methods?.map((method: any) => {
              const selectedMethods = watch("payment_methods") || []; // make sure it's an array
              return (
                <label
                  key={method}
                  className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    value={method}
                    {...register("payment_methods", {
                      validate: value =>
                        value?.length > 0 ||
                        "Select at least one payment method",
                    })}
                    className="w-4 h-4 text-primary-green"
                    defaultChecked={selectedMethods.includes(method)}
                  />
                  <span className="text-[#4B4A47]">{method}</span>
                </label>
              );
            })}
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
            Shipping Information{" "}
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

        {/* Returns */}
        <div className="mb-4">
          <label className="block text-[#4B4A47] font-semibold mb-1">
            Returns & Exchanges{" "}
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
        {fields.map((field, index) => {
          const faq = watch("faqs")?.[index];
          return (
            <div
              key={field.id || index}
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

      {/* Social Media Links */}
      <div>
        <p className="text-[20px] font-normal text-[#13141D] pb-4 pt-2">
          Link Your Shop <span className="text-[#67645F]">(Optional)</span>
        </p>

        <div className="flex flex-col xl:flex-row gap-4">
          {[
            {
              icon: <Website />,
              field: "website_url",
              placeholder: "Type Your Website link here",
              value: data?.shop_info?.social_links?.website_url,
            },
            {
              icon: <Facebook />,
              field: "facebook_url",
              placeholder: "Type Your Facebook link here",
              value: data?.shop_info?.social_links?.facebook_url,
            },
            {
              icon: <Instagram />,
              field: "instagram_url",
              placeholder: "Type Your Instagram link here",
              value: data?.shop_info?.social_links?.instagram_url,
            },
            {
              icon: <Pinterest />,
              field: "pinterest_url",
              placeholder: "Type Your Pinterest link here",
              value: data?.shop_info?.social_links?.pinterest_url,
            },
          ].map(({ icon, field, placeholder, value }) => (
            <div key={field} className="flex gap-x-4 items-center">
              {icon}
              <input
                type="text"
                defaultValue={value}
                placeholder={placeholder}
                className="outline-0 underline w-fit text-[#67645F] font-bold"
                {...register(field)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditFormThree;
