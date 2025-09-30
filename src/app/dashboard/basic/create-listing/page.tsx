"use client";
import Link from "next/link";
import type React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useMemo, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  getProductCategoriesClient,
  getProductSubCategoriesClient,
} from "@/Hooks/api/cms_api";
import { getuserData, useAddProduct } from "@/Hooks/api/dashboard_api";

type Category = {
  id: number | string;
  name: string;
};

type SubCategory = {
  id: number;
  category_id: number | string;
  sub_category_name: string;
};

type FormData = {
  shop_info_id: string | number;
  product_name: string;
  product_price: string;
  product_quantity: string;
  weight: string;
  cost: string;
  description: string;
  category_id: string;
  sub_category_id: string;
  fulfillment: string;
  selling_option: string;
  unlimited_stock: boolean;
  out_of_stock: boolean;
  is_featured: boolean;
  meta_tags: string[];
  images: File[];
  video?: File | null;
};

const CreateListing = ({ membershipType = "basic" }: any) => {
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [metaTags, setMetaTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const isBasicMember = membershipType === "basic";

  const { mutate: addProduct, isLoading } = useAddProduct();
  const { data: categoriess } = getProductCategoriesClient();
  const { data: subcategoriess } = getProductSubCategoriesClient();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      product_name: "Organic Cherry Tomatoes",
      product_price: "2.99",
      product_quantity: "12",
      weight: "20",
      cost: "5.99",
      description:
        "Grown using organic farming practices, our cherry tomatoes are free from pesticides and artificial additives, ensuring a pure and wholesome experience.",
      category_id: "",
      sub_category_id: "",
      fulfillment: "",
      selling_option: "",
      unlimited_stock: false,
      out_of_stock: false,
      is_featured: false,
      meta_tags: [],
      images: [],
      video: null,
    },
  });

  const category = watch("category_id");
  const categories: Category[] = categoriess?.data || [];
  const subcategories: SubCategory[] = subcategoriess?.data || [];
  const filteredSubcategories = category
    ? subcategories.filter(sc => sc.category_id?.toString() === category)
    : [];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 4);
      setValue("images", selectedFiles);
      const newImages = selectedFiles.map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages].slice(0, 4));
    }
  };

  const videoURL = useMemo(
    () => (video ? URL.createObjectURL(video) : null),
    [video]
  );

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVideo(file);
      setValue("video", file);
      setShowPlayButton(true);
      setTimeout(() => videoRef.current?.load(), 0);
    }
  };

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current
      .play()
      .then(() => setShowPlayButton(false))
      .catch(err => console.error("Playback failed:", err));
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setShowPlayButton(true);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      handlePlay();
    } else {
      handlePause();
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      const updatedTags = [...metaTags, newTag.trim()];
      setMetaTags(updatedTags);
      setValue("meta_tags", updatedTags);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    const updatedTags = metaTags.filter(t => t !== tag);
    setMetaTags(updatedTags);
    setValue("meta_tags", updatedTags);
  };
  const { data: userdata } = getuserData();
  console.log(userdata);

  const onSubmit = (data: FormData) => {
    const formData = new FormData();

    if (userdata?.data?.shop_info?.id) {
      formData.append("shop_info_id", String(userdata?.data.shop_info?.id));
    }

    formData.append("product_name", data.product_name);
    formData.append("product_price", data.product_price);
    formData.append("product_quantity", data.product_quantity);
    formData.append("weight", data.weight);
    formData.append("cost", data.cost);
    formData.append("description", data.description);
    formData.append("category_id", data.category_id);
    formData.append("sub_category_id", data.sub_category_id);
    formData.append("fulfillment", data.fulfillment);
    formData.append("selling_option", data.selling_option);

    // ✅ Must be boolean, not string
    formData.append("unlimited_stock", data.unlimited_stock ? "1" : "0");
    formData.append("out_of_stock", data.out_of_stock ? "1" : "0");
    formData.append("is_featured", data.is_featured ? "1" : "0");

    // meta_tags
    data.meta_tags.forEach((tag, index) =>
      formData.append(`meta_tags[${index}]`, tag)
    );

    // ✅ Backend expects "product_image" not "images"
    if (data.images && data.images.length > 0) {
      data.images.forEach(image => {
        formData.append("product_image[]", image);
      });
    }

    if (data.video) {
      formData.append("video", data.video);
    }

    addProduct(formData);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-3.5 md:gap-0 md:justify-between md:items-center">
        <div>
          <h3 className="text-[30px] md:text-[40px] font-semibold text-[#13141D]">
            Create New Listing
          </h3>
          <div className="flex gap-x-2 items-center pt-2 cursor-pointer">
            <h4 className="text-[16px] text-[#13141D]">Listings</h4>
            <span className="mt-1 inline-block w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#13141D] rotate-90"></span>
            <h5 className="text-[16px] text-[#13141D]">Add a Listing</h5>
          </div>
        </div>
        <Link href="/dashboard/basic/view-listing">
          <button className="text-[#000] text-[16px] font-semibold flex gap-x-1 items-center border-2 border-[#13141D] rounded-lg py-3 px-6 hover:bg-[#E48872] hover:text-white duration-300 cursor-pointer">
            <MdArrowOutward />
            View Listings
          </button>
        </Link>
      </div>

      {isBasicMember && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> Some features are available with a Pro
            Membership. Upgrade your account to enable advanced listing options.
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
          <div className="flex flex-col gap-3 md:gap-6">
            {/* Product Name */}
            <div>
              <h3 className="text-[17px] md:text-[20px] font-semibold text-[#13141D]">
                Product Name / Service
              </h3>
              <Controller
                name="product_name"
                control={control}
                rules={{ required: "Product name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 outline-none"
                  />
                )}
              />
              {errors.product_name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.product_name.message}
                </p>
              )}
            </div>

            {/* Multiple Image Upload */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-2">
                {images.length > 0 ? (
                  images.map((img, idx) => (
                    <div key={idx} className="relative">
                      <img
                        src={img}
                        alt={`Image ${idx + 1}`}
                        className="w-full h-[200px] md:h-[250px] object-cover rounded-lg border"
                      />
                      <button
                        onClick={() => {
                          setImages(images.filter((_, i) => i !== idx));
                          const newImages = watch("images").filter(
                            (_, i) => i !== idx
                          );
                          setValue("images", newImages);
                        }}
                        className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded"
                      >
                        ×
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="w-full h-[200px] md:h-[250px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
                    <div className="text-center">
                      <p className="text-base md:text-lg">No images uploaded</p>
                      <p className="text-[12px] md:text-sm">
                        Upload up to 4 images to see preview
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex items-center justify-center gap-2 w-full py-2 md:py-4 bg-[#F5F5F5] rounded-lg cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-600 font-medium">
                    Upload Images
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    multiple
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            {/* Quantity and Stock Options */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Quantity
              </h3>
              <Controller
                name="product_quantity"
                control={control}
                rules={{
                  required: "Quantity is required",
                  pattern: {
                    value: /^\d+$/,
                    message: "Quantity must be a number",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    disabled={isBasicMember}
                    className={`w-full lg:w-[350px] border border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 text-[#13141D] font-normal outline-0 ${
                      isBasicMember
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : ""
                    }`}
                  />
                )}
              />
              {errors.product_quantity && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.product_quantity.message}
                </p>
              )}
              <div className="flex flex-col gap-4 mt-2">
                <label
                  className={`flex items-center gap-2 text-[20px] md:text-[24px] font-semibold ${
                    isBasicMember ? "text-gray-400" : "text-[#13141D]"
                  }`}
                >
                  Unlimited Stock
                  <Controller
                    name="unlimited_stock"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        name={field.name}
                        ref={field.ref}
                        checked={!!field.value}
                        onChange={e => field.onChange(e.target.checked)}
                        onBlur={field.onBlur}
                        disabled={isBasicMember}
                        className={`mt-1 accent-[#274F45] ${
                          isBasicMember ? "cursor-not-allowed" : ""
                        }`}
                      />
                    )}
                  />
                </label>
                <label className="flex items-center gap-2 text-[20px] md:text-[24px] text-[#13141D] font-semibold">
                  Feature
                  <Controller
                    name="is_featured"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        name={field.name}
                        ref={field.ref}
                        checked={!!field.value}
                        onChange={e => field.onChange(e.target.checked)}
                        onBlur={field.onBlur}
                        className="mt-1 accent-[#274F45]"
                      />
                    )}
                  />
                </label>

                <label
                  className={`flex items-center gap-2 text-[20px] md:text-[24px] font-semibold ${
                    isBasicMember ? "text-gray-400" : "text-[#13141D]"
                  }`}
                >
                  Out of Stock
                  <Controller
                    name="out_of_stock"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        name={field.name}
                        ref={field.ref}
                        checked={!!field.value}
                        onChange={e => field.onChange(e.target.checked)}
                        onBlur={field.onBlur}
                        disabled={isBasicMember}
                        className={`mt-1 accent-[#274F45] ${
                          isBasicMember ? "cursor-not-allowed" : ""
                        }`}
                      />
                    )}
                  />
                </label>

                <p className="text-[16px] text-[#13141D] font-normal w-full md:max-w-[400px]">
                  Status automatically changes to "Out of Inventory" when zero
                  inventory is reached
                </p>
              </div>
            </div>

            {/* Video Upload */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Listing Approval Process
              </h3>
              <p className="text-[16px] text-[#67645F] mt-2 w-full md:max-w-[400px]">
                In the video, share details about how and where your product was
                made, how your food was grown, and how it aligns with our
                sustainability guidelines.
              </p>
              <div className="flex gap-4 mt-3 w-full">
                <label className="px-4 md:px-8 py-2.5 md:py-5 bg-[#F0EEE9] rounded-lg cursor-pointer text-[14px] md:text-[16px] text-[#13141D]">
                  Upload video
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />
                </label>
                {video && (
                  <button
                    className="px-4 py-2 border rounded-lg"
                    onClick={() => {
                      setVideo(null);
                      setValue("video", null);
                    }}
                  >
                    Remove video
                  </button>
                )}
              </div>
              {video && videoURL && (
                <div className="mt-4 w-[300px] relative">
                  <video
                    ref={videoRef}
                    src={videoURL}
                    className="h-[250px] w-full rounded-lg object-cover"
                    onClick={handlePlayPause}
                  />
                  {showPlayButton && (
                    <button
                      className="h-24 w-24 bg-[#626161] text-white rounded-full absolute cursor-pointer top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center"
                      onClick={e => {
                        e.stopPropagation();
                        handlePlay();
                      }}
                    >
                      <span className="inline-block w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></span>
                    </button>
                  )}
                  {!showPlayButton && (
                    <button
                      className="absolute top-2 right-2 px-3 py-1 bg-black text-white rounded"
                      onClick={handlePause}
                    >
                      Pause
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Listing Status */}
            <div>
              <p className="font-semibold text-[20px] md:text-[24px] text-[#13141D]">
                Listing Status:{" "}
                <span className="px-3 py-2 text-white text-sm rounded-full bg-[#757575]">
                  Pending
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-8">
            {/* Price */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Price
              </h3>
              <Controller
                name="product_price"
                control={control}
                rules={{
                  required: "Price is required",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Price must be a valid number (e.g., 10.99)",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 outline-0"
                  />
                )}
              />
              {errors.product_price && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.product_price.message}
                </p>
              )}
            </div>

            {/* Cost */}
            <div>
              <h3
                className={`text-[20px] md:text-[24px] font-semibold ${
                  isBasicMember ? "text-gray-400" : "text-[#13141D]"
                }`}
              >
                Cost
              </h3>
              <Controller
                name="cost"
                control={control}
                rules={{
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Cost must be a valid number (e.g., 5.99)",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    disabled={isBasicMember}
                    className={`w-full border text-[16px] md:text-[20px] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 outline-0 ${
                      isBasicMember
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "text-[#13141D]"
                    }`}
                  />
                )}
              />
              {errors.cost && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.cost.message}
                </p>
              )}
            </div>

            {/* Weight */}
            <div>
              <h3
                className={`text-[20px] md:text-[24px] font-semibold ${
                  isBasicMember ? "text-gray-400" : "text-[#13141D]"
                }`}
              >
                Weight
              </h3>
              <Controller
                name="weight"
                control={control}
                rules={{
                  pattern: {
                    value: /^\d+$/,
                    message: "Weight must be a number",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    disabled={isBasicMember}
                    className={`w-full border text-[16px] md:text-[20px] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 outline-0 ${
                      isBasicMember
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "text-[#13141D]"
                    }`}
                  />
                )}
              />
              {errors.weight && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.weight.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Description
              </h3>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    rows={5}
                    className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 outline-0"
                  />
                )}
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Category
              </h3>
              <Controller
                name="category_id"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.category_id && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.category_id.message}
                </p>
              )}

              {filteredSubcategories.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                    Subcategory
                  </h3>
                  <Controller
                    name="sub_category_id"
                    control={control}
                    rules={{ required: "Subcategory is required" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
                      >
                        <option value="">Select Subcategory</option>
                        {filteredSubcategories.map(sub => (
                          <option key={sub.id} value={sub.id}>
                            {sub.sub_category_name}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.sub_category_id && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.sub_category_id.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Fulfillment */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Fulfillment
              </h3>
              <Controller
                name="fulfillment"
                control={control}
                rules={{ required: "Fulfillment option is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
                  >
                    <option value="">Select Fulfillment</option>
                    <option>Arrange Local Pickup</option>
                    <option>Shipping</option>
                    <option>Arrange Local Pickup or Shipping</option>
                  </select>
                )}
              />
              {errors.fulfillment && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.fulfillment.message}
                </p>
              )}
            </div>

            {/* Meta Tags */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Meta Tags
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {metaTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button onClick={() => handleRemoveTag(tag)}>×</button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2 relative">
                <input
                  type="text"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  className="flex-1 border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 pl-10"
                />
                <button
                  onClick={handleAddTag}
                  className="absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Selling Option */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Selling Option
              </h3>
              <Controller
                name="selling_option"
                control={control}
                rules={{ required: "Selling option is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
                  >
                    <option value="">Choose Below</option>
                    <option>Trade/Barter</option>
                    <option>For Sale or Trade Barter</option>
                    <option>For Sale</option>
                  </select>
                )}
              />
              {errors.selling_option && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.selling_option.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-between mt-5 md:mt-10 items-center">
          <button
            type="button"
            className="text-red-600 flex items-center gap-1 mt-4 cursor-pointer"
          >
            <span className="inline-block w-4 h-4 border-2 border-current rounded-sm relative">
              <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-current"></span>
              <span className="absolute top-0.5 left-0.5 w-0.5 h-2 bg-current"></span>
              <span className="absolute top-0.5 right-0.5 w-0.5 h-2 bg-current"></span>
            </span>
            Delete Listing
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#E48872] text-white py-2.5 md:py-5 px-6 md:px-12 cursor-pointer rounded-lg font-semibold hover:bg-[#a34739] mt-6 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Saving..." : "Save Listing"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
