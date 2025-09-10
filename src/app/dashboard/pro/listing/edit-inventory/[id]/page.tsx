"use client";

import React, { useState } from "react";
import { FaAngleRight, FaPlus } from "react-icons/fa";
import { MdArrowOutward, MdDelete } from "react-icons/md";
import Preview from "../../../../../../Assets/tomato.png";
import Image from "next/image";

const CreateListing = () => {
  const [images, setImages] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [quantity, setQuantity] = useState<string>("12 lbs");
  const [unlimitedStock, setUnlimitedStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [metaTags, setMetaTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );

      // Set first uploaded image as preview if none yet
      if (!mainImage) {
        setMainImage(fileArray[0]);
      }

      setImages(prev => [...prev, ...fileArray]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
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
        <button className="text-[#13141D] text-[16px] font-semibold flex gap-x-1 items-center border-2 border-[#13141D] rounded-lg py-3 px-6 hover:bg-black hover:text-white duration-300">
          <MdArrowOutward />
          View Listings
        </button>
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
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2"
            />
          </div>

          {/* Main Preview Image */}
          <div>
            {mainImage ? (
              <Image
                src={mainImage}
                width={500}
                height={500}
                alt="Main Preview"
                className="w-full h-[500px] object-cover rounded-lg border"
              />
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center  rounded-lg text-gray-400">
                <Image
                  src={Preview}
                  alt="Main Preview"
                  className="w-full h-full object-cover rounded-lg border"
                />
              </div>
            )}

            {/* Thumbnails */}
            <div className="flex gap-2 flex-wrap mt-3">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded-lg border cursor-pointer hover:opacity-80"
                  onClick={() => setMainImage(src)}
                />
              ))}
              <label className="w-28 h-26 flex items-center justify-center bg-[#F5F5F5] rounded-lg cursor-pointer">
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
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Quantity
            </h3>
            <input
              type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              className="w-[350px] border border-[#A7A39C] rounded-lg p-4 mt-2 text-[20px] text-[#13141D] font-normal"
            />
            <div className="flex flex-col gap-4 mt-2">
              <label className="flex items-center gap-2 text-[24px] text-[#13141D] font-semibold">
                Unlimited Stock
                <input
                  type="checkbox"
                  checked={unlimitedStock}
                  onChange={() => setUnlimitedStock(!unlimitedStock)}
                />
              </label>
              <label className="flex items-center gap-2 text-[24px] text-[#13141D] font-semibold">
                Out of Stock
                <input
                  type="checkbox"
                  checked={outOfStock}
                  onChange={() => setOutOfStock(!outOfStock)}
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
              To ensure all products and services on Sustainable Trades meet our
              sustainability standards, each listing must be approved before it
              goes live. Please upload a short video introducing yourself and
              your product or service.
            </p>
            <div className="flex gap-4 mt-3">
              <label className="px-8 py-5 bg-[#F0EEE9] rounded-lg cursor-pointer text-[16px] text-[#13141D">
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
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2"
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
              className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2"
            />
          </div>

          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Category
            </h3>
            <select className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2">
              <option>Select Category</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Grains</option>
            </select>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold text-[#13141D]">
              Fulfillment
            </h3>
            <select className="w-full border text-[20px] text-[#13141D] border-[#A7A39C] rounded-lg p-4 mt-2">
              <option>Select Fulfillment</option>
              <option>Advance Shipping</option>
              <option>Pickup</option>
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
              <option>Retail</option>
              <option>Wholesale</option>
            </select>
          </div>

          {/* Save */}
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

export default CreateListing;
