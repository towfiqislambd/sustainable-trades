import React, { useState } from "react";
import Image from "next/image";
import { LocationTwoSvg, MinSvg } from "@/Components/Svg/SvgContainer";
import { useRemoveFromCart } from "@/Hooks/api/cms_api";

const CartItem = ({ item }: any) => {
  const [productId, setProductId] = useState<number | null>(null);
  const { mutate: removeCartMutation, isPending } =
    useRemoveFromCart(productId);

  return (
    <div className="border border-gray-300 p-5 rounded-lg bg-white">
      {/* Shop Info */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-5">
        <div className="flex gap-2 sm:gap-5 items-center">
          {/* Shop Image */}
          <figure className="size-12 rounded-full border border-gray-100 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item?.shop?.shop_image}`}
              alt="shop_image"
              fill
              className="size-full rounded-full"
            />
          </figure>

          {/* Shop Name */}
          <h3 className="text-xl font-semibold text-primary-green">
            {item?.shop?.shop_name}
          </h3>
        </div>

        {/* Shop Location */}
        <div className="flex gap-2 items-center">
          <LocationTwoSvg />
          <p className="text-primary-green font-semibold">
            {item?.shop?.address?.address_line_1}
          </p>
        </div>
      </div>

      {/* Stock */}
      {/* {item?.id === 1 && (
        <p className="bg-[#D4E2CB] text-secondary-gray text-sm rounded px-20 py-1.5 mb-5 w-full text-center md:w-fit font-semibold">
          Only 4 Left In Stock
        </p>
      )} */}

      {/* Product Info */}
      <div className="space-y-6">
        {item?.cart_items?.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row gap-5 border-b last:border-b-0 border-gray-300 pb-7 last:pb-0"
          >
            {/* Product Image */}
            <figure className="w-full sm:w-[180px] h-[140px] shrink-0 rounded-lg border border-gray-100 relative">
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
              <Image
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/${product?.product?.images[0]?.image}`}
                alt="product image"
                fill
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>

            <div className="grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                {/* Product Name */}
                <h3 className="text-xl font-semibold text-secondary-black">
                  {product?.product?.product_name}
                </h3>

                {/* Product Price */}
                <p className="text-2xl font-bold">
                  ${product?.product?.product_price}
                </p>
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

              {/* Remove btns */}
              <button
                onClick={() => {
                  setProductId(product?.product_id);
                }}
                className="font-semibold text-primary-green cursor-pointer text-[15px]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
