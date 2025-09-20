"use client";

import Link from "next/link";
import type React from "react";
import { useMemo, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface CreateListingProps {
  membershipType?: "basic" | "pro";
}

const CreateListing = ({ membershipType = "basic" }: CreateListingProps) => {
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

  const isBasicMember = membershipType === "basic";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMainImage(URL.createObjectURL(file));
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

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[40px] font-semibold text-[#13141D]">
            Organic Cherry Tomatoes
          </h3>
          <div className="flex gap-x-2 items-center pt-2 cursor-pointer">
            <h4 className="text-[16px] text-[#13141D]">Listings</h4>
            <span className="mt-1 inline-block w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#13141D] rotate-90"></span>
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

      {isBasicMember && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> These features are available with a Pro
            Membership. Upgrade your account to enable advanced listing options.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-6">
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

          <div>
            {mainImage ? (
              <img
                src={mainImage || "/placeholder.svg"}
                alt="Main Preview"
                className="w-full h-[500px] object-cover rounded-lg border"
              />
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
                <div className="text-center">
                  <p className="text-lg">No image uploaded</p>
                  <p className="text-sm">Upload images to see preview</p>
                </div>
              </div>
            )}

            <div className="mt-3">
              <label className="flex items-center justify-center gap-2 w-full py-4 bg-[#F5F5F5] rounded-lg cursor-pointer border-2 border-dashed border-gray-300 hover:bg-gray-100 transition-colors">
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
                <span className="text-gray-600 font-medium">Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Quantity
            </h3>
            <input
              type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              disabled={isBasicMember}
              className={`w-[350px] border border-[#A7A39C] rounded-lg p-4 mt-2 text-[20px] text-[#13141D] font-normal outline-0 ${
                isBasicMember
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : ""
              }`}
            />
            <div className="flex flex-col gap-4 mt-2">
              <label
                className={`flex items-center gap-2 text-[24px] font-semibold ${
                  isBasicMember ? "text-gray-400" : "text-[#13141D]"
                }`}
              >
                Unlimited Stock
                <input
                  type="checkbox"
                  checked={unlimitedStock}
                  onChange={() => setUnlimitedStock(!unlimitedStock)}
                  disabled={isBasicMember}
                  className={`mt-1 accent-[#274F45] ${
                    isBasicMember ? "cursor-not-allowed" : ""
                  }`}
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
              <label
                className={`flex items-center gap-2 text-[24px] font-semibold ${
                  isBasicMember ? "text-gray-400" : "text-[#13141D]"
                }`}
              >
                Out of Stock
                <input
                  type="checkbox"
                  checked={outOfStock}
                  onChange={() => setOutOfStock(!outOfStock)}
                  disabled={isBasicMember}
                  className={`mt-1 accent-[#274F45] ${
                    isBasicMember ? "cursor-not-allowed" : ""
                  }`}
                />
              </label>
              <p className="text-[16px] text-[#13141D] font-normal max-w-[400px]">
                Status automatically changes to "Out of Inventory" when zero
                inventory is reached
              </p>
            </div>
          </div>

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
          </div>

          <div>
            <p className="font-semibold text-[24px] text-[#13141D]">
              Listing Status:{" "}
              <span className="px-3 py-2 text-white text-sm rounded-full bg-[#757575]">
                Pending
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">Price</h3>
            <input
              type="text"
              defaultValue="$2.99/lb"
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0"
            />
          </div>

          <div>
            <h3
              className={`text-[24px] font-semibold ${
                isBasicMember ? "text-gray-400" : "text-[#13141D]"
              }`}
            >
              Cost
            </h3>
            <input
              type="text"
              defaultValue="$5.99/lb"
              disabled={isBasicMember}
              className={`w-full border text-[20px] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0 ${
                isBasicMember
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "text-[#13141D]"
              }`}
            />
          </div>

          <div>
            <h3
              className={`text-[24px] font-semibold ${
                isBasicMember ? "text-gray-400" : "text-[#13141D]"
              }`}
            >
              Weight
            </h3>
            <input
              type="text"
              defaultValue="20 KG"
              disabled={isBasicMember}
              className={`w-full border text-[20px] border-[#A7A39C] rounded-lg p-4 mt-2 outline-0 ${
                isBasicMember
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "text-[#13141D]"
              }`}
            />
          </div>

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
                  <button onClick={() => handleRemoveTag(tag)}>×</button>
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
          <span className="inline-block w-4 h-4 border-2 border-current rounded-sm relative">
            <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-current"></span>
            <span className="absolute top-0.5 left-0.5 w-0.5 h-2 bg-current"></span>
            <span className="absolute top-0.5 right-0.5 w-0.5 h-2 bg-current"></span>
          </span>
          Delete Listing
        </button>
        <button className="bg-[#E48872] text-white py-5 px-12 cursor-pointer rounded-lg font-semibold hover:bg-[#a34739] mt-6">
          Save Listing
        </button>
      </div>
    </div>
  );
};

export default CreateListing;
