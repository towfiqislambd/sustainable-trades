"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import Product from "../../../../Assets/tomato.png";

const products = [
  {
    id: 1,
    name: "8oz Honey Sustainable Soap Bar",
    price: "$8.99",
    img: Product,
  },
  {
    id: 2,
    name: "8oz Watermelon Sustainable Bar Soap",
    price: "$8.99",
    img: Product,
  },
  {
    id: 3,
    name: "8oz Apricot Sustainable Bar Soap",
    price: "$8.99",
    img: Product,
  },
  {
    id: 4,
    name: "8oz Lavender Sustainable Bar Soap",
    price: "$9.99",
    img: Product,
  },
  {
    id: 5,
    name: "Organic Granny Smith Apples",
    price: "$1.99/lb",
    img: Product,
  },
  {
    id: 6,
    name: "Organic Cherry Tomatoes",
    price: "$2.99/lb",
    img: Product,
  },
  {
    id: 7,
    name: "Organic Cherry Tomatoes",
    price: "$2.99/lb",
    img: Product,
  },
  {
    id: 8,
    name: "Organic Cherry Tomatoes",
    price: "$2.99/lb",
    img: Product,
  },
];

const Page = () => {
  return (
    <div>
      <h2 className="text-[40px] font-lato font-semibold text-[#000]">
        Listings
      </h2>

      {/* Filters + Button */}
      <div className="flex justify-between mt-6">
        <div className="flex gap-x-6">
          <div>
            <p className="text-[#13141D] text-[16px] font-semibold">
              Sort by :
            </p>
            <select className="p-4 rounded-[10px] border border-[#A7A39C] mt-2 w-[190px] cursor-pointer">
              <option>Name: A - Z</option>
              <option>Name: Z - A</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div>
            <p className="text-[#13141D] text-[16px] font-semibold">
              Listing Status
            </p>
            <select className="p-4 rounded-[10px] border border-[#A7A39C] mt-2 w-[190px] cursor-pointer">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <button className="h-[60px] rounded-[8px] bg-[#E48872] text-[16px] font-semibold text-[#13141D] cursor-pointer hover:bg-transparent duration-500 ease-in-out border border-[#E48872] w-[190px] flex gap-x-2 justify-center items-center">
            <FaPlus />
            Add New Listing
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6 mt-10">
        {products.map(product => (
          <div
            key={product.id}
            className="relative border border-[#e5e5e5] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-[250px]">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
              <button
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow cursor-pointer border border-[#274F45] 
      opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 
      transition-all duration-300 ease-in-out"
              >
                <FiEdit2 size={18} className="text-[#274F45]" />
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-[20px] font-medium text-[#13141D] truncate">
                {product.name}
              </h3>
              <p className="text-[20px] font-medium text-[#13141D] mt-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
