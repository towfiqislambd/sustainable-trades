"use client";

import React, { useMemo, useRef, useState, useEffect, use } from "react";
import { FaAngleRight, FaPlay, FaPlus } from "react-icons/fa";
import { MdArrowOutward, MdDelete } from "react-icons/md";
import Preview from "../../../../../Assets/tomato.png";
import Image from "next/image";
import Link from "next/link";
import { useGetSingleListing, useupdateProduct } from "@/Hooks/api/dashboard_api";
import {
  getProductCategoriesClient,
  getProductSubCategoriesClient,
} from "@/Hooks/api/cms_api";
import useAuth from "@/Hooks/useAuth";

// Define types for the API response and error
interface UpdateProductResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    shop_info_id: number;
    product_name: string;
    product_price: string;
    product_quantity: string | null;
    weight: string;
    cost: string;
    unlimited_stock: boolean;
    out_of_stock: boolean;
    video: string | null;
    description: string;
    category_id: string;
    sub_category_id: string;
    fulfillment: string;
    selling_option: string;
    status: string;
    is_featured: boolean;
    images: Array<{
      id: number;
      product_id: number;
      image: string;
    }>;
    meta_tags: Array<{
      id: number;
      product_id: number;
      tag: string;
    }>;
  };
  code: number;
}

interface UpdateProductError {
  response?: {
    data?: {
      message: string;
    };
  };
  // Add other error properties if needed, e.g., message: string;
}

interface DetailsProps {
  id: string | number;
}

const Details = ({ params }: { params: Promise<{ id: string }> }) => {
  const { user } = useAuth();
  console.log(user);

  const { id } = use(params);
  const { data: listing, isLoading } = useGetSingleListing(id);
  console.log(id);

  // Update mutation hook
  const updateProduct = useupdateProduct(id);

  const [images, setImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [quantity, setQuantity] = useState<string>("");
  const [unlimitedStock, setUnlimitedStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [Featured, setFeatured] = useState(false);
  const [metaTags, setMetaTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [fulfillment, setFulfillment] = useState("");
  const [sellingOption, setSellingOption] = useState("");
  const { data: categoriesData } = getProductCategoriesClient();
  const { data: subcategoriesData } = getProductSubCategoriesClient();

  // New states for file handling
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [keptImagePaths, setKeptImagePaths] = useState<string[]>([]); // To track which existing images to keep

  // Function to update local state with product data
  const updateLocalStateWithProductData = (
    productData: UpdateProductResponse["data"]
  ) => {
    setProductName(productData.product_name || "");
    setPrice(`$${productData.product_price || 0}`);
    setCost(`$${productData.cost || 0}`);
    setWeight(productData.weight || "");
    setDescription(productData.description || "");
    setQuantity(productData.product_quantity?.toString() || "");
    setUnlimitedStock(productData.unlimited_stock || false);
    setOutOfStock(productData.out_of_stock || false);
    setFeatured(productData.is_featured || false);
    setMetaTags(
      productData.meta_tags?.map((tag: { tag: string }) => tag.tag) || []
    );

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const imageUrls =
      productData.images?.map((img: { image: string }) =>
        img.image.startsWith("http") ? img.image : `${baseUrl}/${img.image}`
      ) || [];
    setExistingImages(imageUrls);
    setKeptImagePaths(imageUrls); // Update kept to new existing
    setImages(imageUrls);
    if (imageUrls.length > 0) setMainImage(imageUrls[0]);

    setVideoUrl(productData.video ? `${baseUrl}/${productData.video}` : null);
    setShowPlayButton(!productData.video);
    setVideoFile(null); // Clear any pending file

    // ✅ Set Category & Subcategory by ID
    setCategory(productData.category_id?.toString() || "");
    setSubcategory(productData.sub_category_id?.toString() || "");

    setFulfillment(productData.fulfillment || "");
    setSellingOption(productData.selling_option || "");
    setImageFiles([]); // Clear pending new files
  };

  // Populate form data from API response on load
  useEffect(() => {
    if (listing?.data) {
      updateLocalStateWithProductData(listing.data);
    }
  }, [listing]);

  const videoSrc = useMemo(() => videoUrl, [videoUrl]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setImageFiles(prev => [...prev, ...fileArray]);

      const previewUrls = fileArray.map(file => URL.createObjectURL(file));
      if (!mainImage && previewUrls.length > 0) {
        setMainImage(previewUrls[0]);
      }
      setImages(prev => [...prev, ...previewUrls]);
    }
  };

  // Handle video upload (for new videos during edit)
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVideoFile(file);
      const objectUrl = URL.createObjectURL(file);
      setVideoUrl(objectUrl); // Treat as URL for consistency
      setShowPlayButton(true);

      // Ensure video is loaded
      setTimeout(() => {
        videoRef.current?.load();
      }, 0);
    }
  };

  // Remove image (for existing or new)
  const handleRemoveImage = (imageUrl: string, isNew: boolean) => {
    if (isNew) {
      // Remove from files and previews
      const fileIndex = imageFiles.findIndex(
        file => URL.createObjectURL(file) === imageUrl
      );
      if (fileIndex > -1) {
        setImageFiles(prev => prev.filter((_, idx) => idx !== fileIndex));
      }
      setImages(prev => prev.filter(url => url !== imageUrl));
      if (mainImage === imageUrl) setMainImage(null);
    } else {
      // Remove from kept existing
      setKeptImagePaths(prev => prev.filter(path => path !== imageUrl));
      setImages(prev => prev.filter(url => url !== imageUrl));
      if (mainImage === imageUrl)
        setMainImage(keptImagePaths[0] || existingImages[0] || null);
    }
  };

  // Play video (single click)
  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current
      .play()
      .then(() => setShowPlayButton(false))
      .catch(err => console.error("Playback failed:", err));
  };

  // Pause video
  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setShowPlayButton(true);
  };

  // Toggle play/pause
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
      setMetaTags([...metaTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setMetaTags(metaTags.filter(t => t !== tag));
  };

  // Handle form submission
  const handleUpdateListing = async () => {
    const formData = new FormData();

    // Append text fields
    formData.append("product_name", productName);
    formData.append("product_price", price.replace("$", "").trim());
    formData.append("cost", cost.replace("$", "").trim());
    formData.append("weight", weight);
    formData.append("product_quantity", quantity);
    formData.append("unlimited_stock", unlimitedStock ? "1" : "0");
    formData.append("out_of_stock", outOfStock ? "1" : "0");
    formData.append("description", description);
    formData.append("category_id", category);
    formData.append("sub_category_id", subcategory);
    formData.append("fulfillment", fulfillment);
    formData.append("selling_option", sellingOption);
    formData.append("is_featured", Featured ? "1" : "0");

    // Meta tags
    metaTags.forEach((tag, index) => {
      formData.append(`meta_tags[${index}]`, tag);
    });

    // Existing images to keep (as paths)
    keptImagePaths.forEach((path, index) => {
      formData.append(`kept_images[${index}]`, path.split("/").pop() || path); // Send just the filename/path relative
    });

    // New image files
    imageFiles.forEach(file => {
      formData.append("images", file);
    });

    // Video file if new
    if (videoFile) {
      formData.append("video", videoFile);
    } else if (!videoUrl) {
      formData.append("video", ""); // Or null, to remove if needed
    }

    // Trigger the mutation with typed callbacks
    updateProduct.mutate(formData, {
      onSuccess: (data: UpdateProductResponse) => {
        console.log("Update successful:", data);
        // Update local state with the new data
        updateLocalStateWithProductData(data.data);
        // Optionally redirect or show success message
      },
      onError: (error: UpdateProductError) => {
        console.error("Update failed:", error);
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>; // Simple loading state
  }

  const statusBadge =
    listing?.data?.status === "listing"
      ? "Active"
      : listing?.data?.status || "Pending";

  // Combined images for preview (existing kept + new previews)
  const previewImages = [
    ...keptImagePaths,
    ...images.filter(url => !keptImagePaths.includes(url)),
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[30px] md:text-[40px] font-semibold text-[#13141D]">
            {productName}
          </h3>
          <div className="flex gap-x-2 items-center pt-2 cursor-pointer">
            <h4 className="text-[16px] text-[#13141D]">Listings</h4>
            <FaAngleRight className="mt-1" />
            <h5 className="text-[16px] text-[#13141D]">Edit Listing</h5>
          </div>
        </div>
        <Link href="/dashboard/pro/view-listing">
          <button className="text-[#000] text-[16px] font-semibold flex gap-x-1 items-center border-2 border-[#13141D] rounded-lg py-1.5 md:py-3 px-6 hover:bg-[#E48872] hover:text-white justify-center duration-300 cursor-pointer">
            <MdArrowOutward />
            View Listings
          </button>
        </Link>
      </div>

      {/* Form */}
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-2 md:gap-8 mt-8">
        {/* Left Column */}
        <div className="flex flex-col gap-3 md:gap-6">
          {/* Product Name */}
          <div>
            <h3 className="text-[17px] md:text-[20px] font-semibold text-[#13141D]">
              Product Name / Service
            </h3>
            <input
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              className="w-full border text-[18px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 outline-none"
            />
          </div>

          {/* Main Preview Image */}
          <div>
            {mainImage ? (
              <div className="w-full relative h-[400px] md:h-[500px] ">
                <Image
                  src={mainImage}
                  alt="Main Preview"
                  fill
                  className="w-full h-full object-cover rounded-lg border"
                />
              </div>
            ) : (
              <div className="w-full relative h-[400px] md:h-[500px] flex items-center justify-center  rounded-lg text-gray-400 outline-none">
                <Image
                  src={Preview}
                  alt="Main Preview"
                  fill
                  className="w-full h-full object-cover rounded-lg border"
                />
              </div>
            )}

            {/* Thumbnails */}
            <div className="flex gap-2 flex-wrap mt-3">
              {previewImages.map((src, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={src}
                    alt="preview"
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg border cursor-pointer hover:opacity-80"
                    onClick={() => setMainImage(src)}
                  />
                  <button
                    onClick={() =>
                      handleRemoveImage(src, !keptImagePaths.includes(src))
                    }
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    x
                  </button>
                </div>
              ))}
              <label className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#F5F5F5] rounded-lg cursor-pointer">
                <FaPlus />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-[17px] md:text-[20px] font-semibold text-[#13141D]">
              Quantity
            </h3>
            <input
              type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              required
              className="w-full md:w-[350px] border border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 text-[20px] text-[#13141D] font-normal outline-0"
            />
            <div className="flex flex-col gap-4 mt-2">
              <label className="flex items-center gap-2 text-[17px] md:text-[20px] text-[#13141D] font-semibold">
                Unlimited Stock
                <input
                  disabled
                  type="checkbox"
                  checked={unlimitedStock}
                  onChange={() => setUnlimitedStock(!unlimitedStock)}
                  className="mt-1 accent-[#274F45]"
                />
              </label>
              <label className="flex items-center gap-2 text-[17px] md:text-[20px] text-[#13141D] font-semibold">
                Feature
                <input
                  type="checkbox"
                  checked={Featured}
                  onChange={() => setFeatured(!Featured)}
                  className="mt-1 accent-[#274F45]"
                />
              </label>
              <label className="flex items-center gap-2 text-[17px] md:text-[20px] text-[#13141D] font-semibold">
                Out of Stock
                <input
                  type="checkbox"
                  disabled
                  checked={outOfStock}
                  onChange={() => setOutOfStock(!outOfStock)}
                  className="mt-1 accent-[#274F45]"
                />
              </label>
              <p className="text-[16px] text-[#13141D] font-normal max-w-[400px]">
                Status automatically changes to “Out of Inventory” when zero
                inventory is reached
              </p>
            </div>
          </div>

          {/* Listing Approval */}
          <div>
            <h3 className="text-[17px] md:text-[20px] text-[#13141D] font-semibold">
              Listing Approval Process
            </h3>
            <p className="text-[16px]] text-[#67645F] mt-2 max-w-[400px]">
              In the video, share details about how and where your product was
              made, how your food was grown, and how it aligns with our
              sustainability guidelines. This helps us maintain the quality and
              integrity of our marketplace.
            </p>
            <div>
              <div className="flex gap-4 mt-3">
                <label className="px-4 md:px-8 py-2.5 md:py-5 bg-[#F0EEE9] rounded-lg cursor-pointer text-[16px] text-[#13141D]">
                  Upload video
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />
                </label>

                {videoUrl && (
                  <button
                    className="px-4 py-2 border rounded-lg"
                    onClick={() => {
                      setVideoUrl(null);
                      setVideoFile(null);
                      setShowPlayButton(true);
                    }}
                  >
                    Remove video
                  </button>
                )}
              </div>

              {videoUrl && (
                <div className="mt-4 w-[300px] relative">
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    className="h-[250px] w-full rounded-lg object-cover"
                    onClick={handlePlayPause} // clicking video toggles play/pause
                  />

                  {/* Overlay play button */}
                  {showPlayButton && (
                    <button
                      className="h-24 w-24 bg-[#626161] text-white rounded-full absolute cursor-pointer top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex justify-center items-center"
                      onClick={e => {
                        e.stopPropagation();
                        handlePlay();
                      }}
                    >
                      <FaPlay className="size-10" />
                    </button>
                  )}

                  {/* Dedicated pause button */}
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
          </div>

          {/* Listing Status */}
          <div>
            <p className="font-semibold text-[20px] md:text-[24px] text-[#13141D]">
              Listing Status:{" "}
              <span className="px-3 py-2 text-white text-sm rounded-full bg-[#757575]">
                {statusBadge}
              </span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Price */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
              Price
            </h3>
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4  outline-0"
            />
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
              Cost
            </h3>
            <input
              type="text"
              disabled
              value={cost}
              onChange={e => setCost(e.target.value)}
              className="w-full border text-[16px] cursor-not-allowed bg-gray-300 md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4  outline-0"
            />
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
              Weight
            </h3>
            <input
              type="text"
              disabled
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="w-full border text-[16px] cursor-not-allowed bg-gray-300  md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 outline-0"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
              Description
            </h3>
            <textarea
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4  outline-0"
            />
          </div>
          {/* Category Dropdown */}
          {/* Category Dropdown */}
          <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
            Category
          </h3>
          <select
            className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
            value={category}
            onChange={e => {
              setCategory(e.target.value);
              setSubcategory(""); // reset when category changes
            }}
          >
            <option value="">Select Category</option>
            {categoriesData?.data?.map((cat: any) => (
              <option key={cat.id} value={String(cat.id)}>
                {cat.name || cat.category_name} {/* handle both cases */}
              </option>
            ))}
          </select>

          {/* Subcategory Dropdown */}
          {subcategoriesData?.data && (
            <div className="mt-4">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
                Subcategory
              </h3>
              <select
                className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
                value={subcategory}
                onChange={e => setSubcategory(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {subcategoriesData.data
                  ?.filter(
                    (sub: any) =>
                      String(sub.category_id) === String(category) || // match by parent category
                      String(sub.id) === String(subcategory) // keep saved subcategory visible
                  )
                  .map((sub: any) => (
                    <option key={sub.id} value={String(sub.id)}>
                      {sub.name || sub.sub_category_name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
              Fulfillment
            </h3>
            <select
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
              value={fulfillment}
              onChange={e => setFulfillment(e.target.value)}
            >
              <option value="">Select Fulfillment</option>
              <option value="Arrange Local Pickup">Arrange Local Pickup</option>
              <option value="Shipping">Shipping</option>
              <option value="Arrange Local Pickup or Shipping">
                Arrange Local Pickup or Shipping
              </option>
            </select>
          </div>

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
                  <button onClick={() => handleRemoveTag(tag)}>x</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-2 relative">
              <input
                type="text"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                className="flex-1  border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 pl-10 "
              />
              <button
                onClick={handleAddTag}
                className="absolute top-1/2 left-5 translate-y-[-50%]  cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
              Selling Option
            </h3>
            <select
              className="w-full border text-[16px] md:text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2"
              value={sellingOption}
              onChange={e => setSellingOption(e.target.value)}
            >
              <option value="">Choose Below</option>
              <option value="Trade/Barter">Trade/Barter</option>
              <option value="For Sale or Trade Barter">
                For Sale or Trade Barter
              </option>
              <option value="For Sale">For Sale</option>
            </select>
          </div>

          {/* Save */}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-5 md:mt-10 items-center">
        <button className="text-red-600 w-full sm:w-fit flex items-center justify-center gap-1 mt-4 cursor-pointer">
          <MdDelete /> Delete Listing
        </button>
        <button
          onClick={handleUpdateListing}
          disabled={updateProduct.isPending}
          className="bg-[#E48872] w-full sm:w-fit text-white py-2.5 md:py-5 px-12 cursor-pointer rounded-lg font-semibold hover:bg-[#a34739] mt-3 md:mt-6 disabled:opacity-50"
        >
          {updateProduct.isPending ? "Updating..." : "Update Listing"}
        </button>
      </div>
    </div>
  );
};

export default Details;
