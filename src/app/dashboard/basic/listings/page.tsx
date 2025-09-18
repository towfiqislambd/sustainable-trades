"use client";

import type React from "react";
import { useMemo, useRef, useState } from "react";
import { FaAngleRight, FaPlay, FaPlus } from "react-icons/fa";
import { MdArrowOutward, MdDelete } from "react-icons/md";
import Link from "next/link";

const Listing = () => {
  const [images, setImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [quantity, setQuantity] = useState<string>("12 lbs");
  const [unlimitedStock, setUnlimitedStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [Featured, setFeatured] = useState(false);
  const [metaTags, setMetaTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const categories: { [key: string]: string[] } = {
    "Farm to Table": [
      "Acupuncture",
      "Akashic Record",
      "Coaching",
      "Cranial Sacral",
      "Qi Gong",
      "Somatic Practices",
      "Trauma Resolution",
      "Yoga",
      "Reiki",
      "Sound/Light Healing Therapy",
      "Hypnosis",
    ],
    "Arts & Artisans": [],
    "Bath & Beauty": [],
    "Books & Literature": [],
    "Healing & Wellness": [
      "Acupuncture",
      "Akashic Record",
      "Coaching",
      "Cranial Sacral",
      "Qi Gong",
      "Somatic Practices",
      "Trauma Resolution",
      "Yoga",
      "Reiki",
      "Sound/Light Healing Therapy",
      "Hypnosis",
    ],
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );

      setImages(prev => [...prev, ...fileArray]);
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
      setShowPlayButton(true);

      setTimeout(() => {
        videoRef.current?.load();
      }, 0);
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
      setMetaTags([...metaTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setMetaTags(metaTags.filter(t => t !== tag));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[40px] font-semibold text-[#13141D]">
            Organic Cherry Tomatoes
          </h3>
          <div className="flex gap-x-2 items-center pt-2 cursor-pointer">
            <h4 className="text-[16px] text-[#13141D]">Listings</h4>
            <FaAngleRight className="mt-1" />
            <h5 className="text-[16px] text-[#13141D]">Add a Listing</h5>
          </div>
        </div>
        <Link href="/dashboard/pro/view-listing">
          <button
            className="text-[#000] text-[16px] font-semibold flex gap-x-1 items-center border-2 border-[#13141D] rounded-lg py-3 px-6
           hover:bg-[#E48872] hover:text-white duration-300 cursor-pointer"
          >
            <MdArrowOutward />
            View Listings
          </button>
        </Link>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Product Name */}
          <div>
            <h3 className="text-[20px] font-semibold text-[#13141D]">
              Product Name / Service
            </h3>
            <input
              type="text"
              defaultValue="Organic Cherry Tomatoes"
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2 outline-none"
            />
          </div>

          {/* Image Upload - Simplified */}
          <div>
            <div className="flex gap-2 flex-wrap mt-3">
              <label className="w-full h-32 flex items-center justify-center bg-[#F5F5F5] rounded-lg cursor-pointer border-2 border-dashed border-[#A7A39C]">
                <div className="text-center">
                  <FaPlus className="mx-auto mb-2 text-[#A7A39C]" />
                  <span className="text-[#A7A39C]">Upload Images</span>
                </div>
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
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Quantity
            </h3>
            <input
              type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              className="w-[350px] border border-[#A7A39C] rounded-lg p-4 mt-2 text-[20px] text-[#13141D] font-normal outline-0"
            />
            <div className="flex flex-col gap-4 mt-2">
              <label className="flex items-center gap-2 text-[24px] text-[#13141D] font-semibold">
                Unlimited Stock
                <input
                  type="checkbox"
                  checked={unlimitedStock}
                  onChange={() => setUnlimitedStock(!unlimitedStock)}
                  className="mt-1 accent-[#274F45]"
                />
              </label>
              <label className="flex items-center gap-2 text-[24px] text-[#13141D] font-semibold">
                Feature
                <input
                  type="checkbox"
                  checked={Featured}
                  onChange={() => setFeatured(!Featured)}
                  className="mt-1 accent-[#274F45]"
                />
              </label>
              <label className="flex items-center gap-2 text-[24px] text-[#13141D] font-semibold">
                Out of Stock
                <input
                  type="checkbox"
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
            <h3 className="text-[24px] text-[#13141D] font-semibold">
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
                <label className="px-8 py-5 bg-[#F0EEE9] rounded-lg cursor-pointer text-[16px] text-[#13141D]">
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
                    onClick={() => setVideo(null)}
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
                      <FaPlay className="size-10" />
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
          </div>

          {/* Listing Status */}
          <div>
            <p className="font-semibold text-[24px] text-[#13141D]">
              Listing Status:{" "}
              <span className="px-3 py-2 text-white text-sm rounded-full bg-[#757575] text-white]">
                Pending
              </span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {/* Price */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">Price</h3>
            <input
              type="text"
              defaultValue="$2.99/lb"
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0"
            />
          </div>
          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">Cost</h3>
            <input
              type="text"
              defaultValue="$5.99/lb"
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0"
            />
          </div>
          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">Weight</h3>
            <input
              type="text"
              defaultValue="20 KG"
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Description
            </h3>
            <textarea
              rows={5}
              defaultValue="Grown using organic farming practices, our cherry tomatoes are free from pesticides and artificial additives, ensuring a pure and wholesome experience."
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0"
            />
          </div>

          <div>
            {/* Category Dropdown */}
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Category
            </h3>
            <select
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
                setSubcategory("");
              }}
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Subcategory Dropdown */}
            {category && categories[category].length > 0 && (
              <div className="mt-4">
                <h3 className="text-[24px] font-semibold text-[#13141D]">
                  Subcategory
                </h3>
                <select
                  className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2"
                  value={subcategory}
                  onChange={e => setSubcategory(e.target.value)}
                >
                  <option value="">Select Subcategory</option>
                  {categories[category].map(sub => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Fulfillment
            </h3>
            <select className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2">
              <option>Select Fulfillment</option>
              <option>Arrange Local Pickup</option>
              <option>Shipping</option>
              <option>Arrange Local Pickup or Shipping</option>
            </select>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
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
                className="flex-1  border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 pl-10 mt-2"
              />
              <button
                onClick={handleAddTag}
                className="absolute top-7 left-5 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Selling Option
            </h3>
            <select className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2">
              <option>Choose Below</option>
              <option>Trade/Barter</option>
              <option>For Sale or Trade Barter</option>
              <option>For Sale</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 items-center">
        <button className="text-red-600 flex items-center gap-1 mt-4 cursor-pointer">
          <MdDelete /> Delete Listing
        </button>
        <button className="bg-[#E48872] text-white py-5 px-12 cursor-pointer rounded-lg font-semibold hover:bg-[#a34739] mt-6">
          Save Listing
        </button>
      </div>
    </div>
  );
};

export default Listing;
