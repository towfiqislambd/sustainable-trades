"use client";
import {
  AddToCartSvg,
  MinSvg,
  MyLocationSvg,
  MyMsgSvg,
} from "@/Components/Svg/SvgContainer";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import React, { useState } from "react";
import Modal from "@/Components/Common/Modal";
import { FaHeart, FaStar } from "react-icons/fa";
import { LuLoaderPinwheel } from "react-icons/lu";
import { useAddFavorite, useAddToCart } from "@/Hooks/api/cms_api";
import TradeOfferModal from "@/Components/Modals/TradeOfferModal";
import MessageToSellerModal from "@/Components/Modals/MessageToSellerModal";
import { CgSpinnerTwo } from "react-icons/cg";

const ProductDescription = ({ data }: any) => {
  const { user } = useAuth();
  const [id, setId] = useState<number | null>(null);
  const [productId, setProductId] = useState<number | null>(null);
  const { mutate: addFavoriteMutation, isPending } = useAddFavorite();
  const [tradeOpen, setTradeOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const { mutate: addToCartMutation, isPending: addCardPending } = useAddToCart(
    data?.id
  );

  // Func for add to favorite
  const handleAddFavorite = (product_id: any) => {
    if (!user) {
      return toast.error("Please login first to proceed");
    }
    addFavoriteMutation({ endpoint: `/api/add-favorites/${product_id}` });
  };

  // Func for add to cart
  const handleAddToCart = () => {
    addToCartMutation({ quantity: quantity });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        {/* Product Category */}
        <h2 className="text-primary-green text-xl font-semibold">
          {data?.category?.name}
        </h2>

        {/* Wishlist */}
        <button
          onClick={() => handleAddFavorite(data?.id)}
          className="cursor-pointer"
        >
          {isPending ? (
            <LuLoaderPinwheel className="animate-spin text-primary-green" />
          ) : (
            <FaHeart
              className={`${
                data?.is_favorite ? "text-accent-red" : "text-primary-green"
              }`}
            />
          )}
        </button>
      </div>

      <div className="flex justify-between items-center mb-5">
        {/* Product Name */}
        <h3 className="text-2xl font-semibold text-secondary-black">
          {data?.product_name}
        </h3>

        {/* Add To Cart */}
        <button
          disabled={addCardPending}
          onClick={handleAddToCart}
          className={`border border-secondary-black rounded-lg px-4 py-2 hover:bg-secondary-black hover:text-accent-white duration-500 transition-all ${
            addCardPending ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {addCardPending ? (
            <p className="flex gap-2 items-center justify-center">
              <CgSpinnerTwo className="animate-spin text-xl" />
              <span>Adding...</span>
            </p>
          ) : (
            <p className="flex gap-2 items-center">
              <span>Add to Cart</span>
              <AddToCartSvg />
            </p>
          )}
        </button>
      </div>

      {/* Product Description */}
      <p className="text-primary-green text-xl font-semibold mb-3">
        Product Description
      </p>

      <p className="text-secondary-gray mb-5">{data?.description}</p>

      {/* Reviews */}
      <div className="flex gap-3 items-center mb-2">
        <p className="text-lg underline font-semibold text-secondary-black">
          {data?.shop?.shop_name}
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
        <span>{data?.shop?.address?.address_line_1}</span>
      </p>

      <div className="flex items-center justify-between mb-7">
        {/* Price */}
        <p className="text-4xl font-semibold">${data?.product_price}</p>

        {/* Quantity */}
        <div className="flex gap-3 items-center border rounded-lg px-7 py-2 font-semibold border-primary-green">
          <button onClick={handleDecrease} className="cursor-pointer">
            <MinSvg />
          </button>
          <p className="text-secondary-gray">Qty:</p>
          <p className="text-secondary-gray">{quantity}</p>
          <button onClick={handleIncrease} className="cursor-pointer">
            +
          </button>
        </div>
      </div>

      {/* buy btn */}
      <button className="mb-5 block w-full text-center duration-500 transition-all border-2 text-lg cursor-pointer py-3 bg-primary-green text-accent-white rounded-lg shadow hover:text-primary-green hover:bg-transparent font-semibold border-primary-green">
        Buy it now
      </button>

      {/* Trade btn */}
      {user?.role !== "customer" && (
        <button
          onClick={() => {
            setId(data?.shop?.id);
            setProductId(data?.id);
            setTradeOpen(true);
          }}
          className="mb-5 block w-full text-center duration-500 transition-all border-2 border-[#D4E2CB] text-lg cursor-pointer py-3 bg-[#D4E2CB] text-primary-green rounded-lg shadow hover:text-primary-green hover:bg-transparent font-semibold"
        >
          Trade
        </button>
      )}

      {/* Message btn */}
      <button
        onClick={() => setMsgOpen(true)}
        className="mb-5 w-full text-center duration-500 transition-all border-2 text-lg cursor-pointer py-3 text-primary-green rounded-lg shadow hover:text-accent-white hover:bg-primary-green font-semibold border-primary-green flex gap-2 items-center justify-center"
      >
        <MyMsgSvg />
        <span> Message Seller</span>
      </button>

      {/* Modals */}
      <Modal open={tradeOpen} onClose={() => setTradeOpen(false)}>
        <TradeOfferModal id={id} productId={productId} />
      </Modal>

      <Modal open={msgOpen} onClose={() => setMsgOpen(false)}>
        <MessageToSellerModal />
      </Modal>
    </div>
  );
};

export default ProductDescription;
