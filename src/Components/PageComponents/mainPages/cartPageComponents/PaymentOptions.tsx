"use client";
import CartItem from "./CartItem";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useClearCart } from "@/Hooks/api/cms_api";
import { CgSpinnerTwo } from "react-icons/cg";
import { PaypalSvg } from "@/Components/Svg/SvgContainer";
import { CartItemSkeleton } from "@/Components/Loader/Loader";

const PaymentOptions = ({ data, isLoading }: any) => {
  // State
  const [paymentMethod, setPaymentMethod] = useState<string>("paypal");

  // Mutation
  const { mutate: clearCartMutation, isPending } = useClearCart();

  // Sub Total Price Count
  const cartItems = data?.cart?.flatMap((item: any) => item?.cart_items || []);
  const subTotalPrice = cartItems?.reduce((acc: number, item: any) => {
    return acc + (item?.product?.product_price * item?.quantity || 0);
  }, 0);

  // Shipping Price
  const shippingPrice = 15;

  // Tax
  const tax = 20;

  // Total Price
  const totalPrice = subTotalPrice + shippingPrice + tax;

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between">
        <h3 className="section_sub_title">
          {data?.total_cart_items
            ? `${data?.total_cart_items} Items In Your Cart`
            : "Card is empty"}
        </h3>

        {data && (
          <button
            disabled={isPending}
            onClick={() => clearCartMutation()}
            className={`px-3 py-1.5 text-sm rounded-full font-semibold bg-red-500 text-white flex gap-1 items-center ${
              isPending ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isPending ? (
              <span className="flex gap-2 items-center justify-center">
                <CgSpinnerTwo className="animate-spin" />
                <span>Clearing...</span>
              </span>
            ) : (
              <span className="flex gap-1 items-center">
                <TiDelete className="text-lg" />
                Clear Cart
              </span>
            )}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-10">
        {/* Left - Products */}
        <div className=" lg:col-span-8">
          <div className="space-y-7">
            {isLoading
              ? [1, 2].map((_, idx) => <CartItemSkeleton key={idx} />)
              : !data || data?.length === 0
              ? "No Cart Found"
              : data?.cart?.map((item: any) => (
                  <CartItem key={item?.id} item={item} />
                ))}
          </div>
        </div>

        {/* Right - Payment Options */}
        <div className="lg:col-span-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-green mb-4">
            Payment Options
          </h3>

          <p className="text-sm md:text-lg font-semibold text-secondary-black mb-5">
            You will not be charged until the review page of this order.
          </p>

          {/* PayPal Option */}
          <div className="flex justify-between items-center mb-3">
            <p className="flex gap-3 items-center">
              <input
                type="radio"
                className="scale-150"
                name="Card"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={e => setPaymentMethod(e.target.value)}
              />

              <span className="text-secondary-gray font-semibold">Card</span>
            </p>

            <div className="flex gap-x-4">
              <div className="bg-[#274F45] text-[12px] md:text-[14px] xl:text-base p-1 xl:p-2 rounded-md font-bold text-white flex items-center justify-center">
                Debit Card
              </div>

              <div className="bg-[#274F45] text-[12px] md:text-[14px] xl:text-base p-1 xl:p-2 rounded-md font-bold text-white flex items-center justify-center">
                Credit Card
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-3">
            <p className="flex gap-3 items-center">
              <input
                type="radio"
                className="scale-150"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={e => setPaymentMethod(e.target.value)}
              />

              <span className="text-secondary-gray font-semibold ">
                Pay with PayPal
              </span>
            </p>
            <PaypalSvg />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="flex gap-3 items-center">
              <input
                type="radio"
                className="scale-150"
                name="Gpay"
                value="Gpay"
                checked={paymentMethod === "Gpay"}
                onChange={e => setPaymentMethod(e.target.value)}
              />

              <span className="text-secondary-gray font-semibold">
                Pay with Google
              </span>
            </p>
            <div className="bg-[#274F45] text-[12px] md:text-[14px] xl:text-base p-1 xl:p-2 rounded-md font-bold text-white flex items-center justify-center">
              Gpay
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="flex gap-3 items-center">
              <input
                type="radio"
                className="scale-150"
                name="Cash"
                value="Cash"
                checked={paymentMethod === "Cash"}
                onChange={e => setPaymentMethod(e.target.value)}
              />

              <span className="text-secondary-gray font-semibold">
                Pay later
              </span>
            </p>
            <div className="bg-[#274F45] text-[12px] md:text-[14px] xl:text-base p-1 xl:p-2 rounded-md font-bold text-white flex items-center justify-center">
              $pay
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="flex gap-3 items-center">
              <input
                type="radio"
                className="scale-150"
                name="Venmo"
                value="Venmo"
                checked={paymentMethod === "Venmo"}
                onChange={e => setPaymentMethod(e.target.value)}
              />

              <span className="text-secondary-gray font-semibold">
                Pay with Venmo
              </span>
            </p>
            <div className="bg-[#274F45] text-[12px] md:text-[14px] xl:text-base p-1 xl:p-2 rounded-md font-bold text-white flex items-center justify-center">
              Vpay
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="flex gap-3 items-center">
              <input
                type="radio"
                className="scale-150"
                name="payment"
                value="apple"
                checked={paymentMethod === "apple"}
                onChange={e => setPaymentMethod(e.target.value)}
              />

              <span className="text-secondary-gray font-semibold">
                Pay with Apple
              </span>
            </p>
            <div className="bg-[#274F45] text-[12px] md:text-[14px] xl:text-base p-1 xl:p-2 rounded-md font-bold text-white flex items-center justify-center">
              Apple
            </div>
          </div>
          <p className="flex gap-3 items-center">
            <input
              type="radio"
              className="scale-150"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={e => setPaymentMethod(e.target.value)}
            />

            <span className="text-secondary-gray font-semibold">
              Pay with Cash
            </span>
          </p>

          <div className="space-y-3 mt-7 mb-7">
            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Subtotal</p>
              <p>${subTotalPrice}</p>
            </div>

            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Shipping</p>
              <p>${shippingPrice}</p>
            </div>

            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Est. Sales Tax *</p>
              <p>${tax}</p>
            </div>

            <hr className="text-gray-300" />

            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Total ({data?.total_cart_items} Items)</p>
              <p>${totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;
