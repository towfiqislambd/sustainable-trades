import React from "react";
import {
  AddToCartSvg,
  LoveSvg,
  MinSvg,
  MyLocationSvg,
  MyMsgSvg,
} from "@/Components/Svg/SvgContainer";
import { FaStar } from "react-icons/fa";

const ProductDescription = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        {/* Shop Name */}
        <h2 className="text-primary-green text-xl font-semibold">
          Organic Bath Soaps
        </h2>

        {/* Wishlist */}
        <LoveSvg />
      </div>

      <div className="flex justify-between items-center mb-5">
        {/* Product Name */}
        <h3 className="text-2xl font-semibold text-secondary-black">
          Coconut Bar Soap
        </h3>

        {/* Cart */}
        <button className="flex gap-2 items-center border border-secondary-black cursor-pointer rounded-lg px-4 py-2 hover:bg-secondary-black hover:text-accent-white duration-500 transition-all">
          <span>Add to Cart</span>
          <span>
            <AddToCartSvg />
          </span>
        </button>
      </div>

      {/* Product Description */}
      <p className="text-primary-green text-xl font-semibold mb-3">
        Product Description
      </p>

      <p className="text-secondary-gray mb-5">
        Made with 100% organic coconut oil, ensuring a natural and chemical-free
        cleansing experience. Made with 100% organic coconut oil, ensuring a
        natural and chemical-free cleansing experience.
      </p>

      {/* Reviews */}
      <div className="flex gap-3 items-center mb-2">
        <p className="text-lg underline font-semibold text-secondary-black">
          Organic Bath Soaps
        </p>
        <div className="flex gap-1 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-primary-green text-sm" />
          ))}
        </div>
      </div>

      {/* Location */}
      <p className="flex gap-2 items-center underline font-semibold text-secondary-black mb-10">
        <MyLocationSvg />
        <span> Denver, CO</span>
      </p>

      <div className="flex items-center justify-between mb-7">
        {/* Price */}
        <p className="text-4xl font-semibold">$30</p>

        {/* Quantity */}
        <div className="flex gap-3 items-center border rounded-lg px-7 py-2 font-semibold border-primary-green">
          <button className="cursor-pointer">
            <MinSvg />
          </button>
          <p className="text-secondary-gray">Qty:</p>
          <p className="text-secondary-gray">1</p>
          <button className="cursor-pointer">+</button>
        </div>
      </div>

      {/* buy btn */}
      <button className="mb-5 block w-full text-center duration-500 transition-all border-2 text-lg cursor-pointer py-3 bg-primary-green text-accent-white rounded-lg shadow hover:text-primary-green hover:bg-transparent font-semibold border-primary-green">
        Buy it now
      </button>

      {/* Trade btn */}
      <button className="mb-5 block w-full text-center duration-500 transition-all border-2 border-[#D4E2CB] text-lg cursor-pointer py-3 bg-[#D4E2CB] text-primary-green rounded-lg shadow hover:text-primary-green hover:bg-transparent font-semibold">
        Trade
      </button>

      {/* Message btn */}
      <button className="mb-5 w-full text-center duration-500 transition-all border-2 text-lg cursor-pointer py-3 text-primary-green rounded-lg shadow hover:text-accent-white hover:bg-primary-green font-semibold border-primary-green flex gap-2 items-center justify-center">
        <span>
          <MyMsgSvg />
        </span>
        <span> Message Seller</span>
      </button>
    </div>
  );
};

export default ProductDescription;
