import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  DThreeSvg,
  LocationTwoSvg,
  MinSvg,
} from "@/Components/Svg/SvgContainer";

type productItem = {
  id: number;
  product_image: string | StaticImageData;
  product_name: string;
  product_price: number;
};

type cartItemProps = {
  item: {
    id: number;
    shop_author: string | StaticImageData;
    shop_name: string;
    shop_location: string;
    products: productItem[];
  };
};

const CartItem = ({ item }: cartItemProps) => {
  return (
    <div className="border border-gray-300 p-5 rounded-lg bg-white">
      {/* Shop Info */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-5 items-center">
          {/* Shop Author Name */}
          <Image
            src={item?.shop_author}
            alt="shop_author"
            className="size-12 rounded-full border border-gray-100"
          />

          {/* Shop Name */}
          <h3 className="text-xl font-semibold text-primary-green">
            {item?.shop_name}
          </h3>
        </div>

        {/* Shop Location */}
        <div className="flex gap-2 items-center">
          <LocationTwoSvg />
          <p className="text-primary-green font-semibold">
            {item?.shop_location}
          </p>
        </div>
      </div>

      {/* Stock */}
      {item?.id === 1 && (
        <p className="bg-[#D4E2CB] text-secondary-gray text-sm rounded px-20 py-1.5 mb-5 w-fit font-semibold">
          Only 4 Left In Stock
        </p>
      )}

      {/* Product Info */}
      <div className="space-y-6">
        {item?.products?.map(product => (
          <div key={product.id} className="flex gap-5 border-b last:border-b-0 border-gray-300 pb-7 last:pb-0">
            {/* Product Image */}
            <figure className="w-[180px] h-[140px] shrink-0 rounded-lg border border-gray-100 relative">
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
              <Image
                src={product?.product_image}
                alt="product image"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
            <div className="grow">
              <div className="flex justify-between items-center mb-3">
                {/* Product Name */}
                <h3 className="text-xl font-semibold text-secondary-black">
                  {product?.product_name}
                </h3>

                {/* Product Price */}
                <div className="flex gap-3 items-center">
                  <p className="text-2xl font-bold">
                    ${product?.product_price}
                  </p>
                  <p className="flex justify-center items-center size-7 rounded-full bg-[#D4E2CB]">
                    <DThreeSvg />
                  </p>
                </div>
              </div>

              {/* Product Increment and Decrement */}
              <div className="flex gap-3 items-center border rounded-lg px-7 py-2 font-semibold border-primary-green w-fit mb-3">
                <button className="cursor-pointer">
                  <MinSvg />
                </button>
                <p className="">Qty:</p>
                <p className="">1</p>
                <button className="cursor-pointer">+</button>
              </div>

              {/* btns */}
              <div className="flex gap-7 items-center">
                <button className="font-semibold text-primary-green cursor-pointer text-[15px]">
                  Save for later
                </button>
                <button className="font-semibold text-primary-green cursor-pointer text-[15px]">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
