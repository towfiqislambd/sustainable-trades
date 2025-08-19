"use client";
import React, { useState } from "react";
import p1 from "@/Assets/p1.jpg";
import shopAuthor from "@/Assets/shop_author.jpg";
import CartItem from "./CartItem";
import { PaypalSvg } from "@/Components/Svg/SvgContainer";
import Modal from "@/Components/Common/Modal";
import ShippingOptionsModal from "@/Components/Modals/ShippingOptionsModal";
const data = [
  {
    id: 1,
    shop_name: "Organic Bath Soaps",
    shop_author: shopAuthor,
    shop_location: "Denver, CO",
    products: [
      {
        id: 1,
        product_name: "Coconut Bar Soap",
        product_image: p1,
        product_price: 30,
      },
      {
        id: 2,
        product_name: "Coconut Bar Soap",
        product_image: p1,
        product_price: 30,
      },
    ],
  },
  {
    id: 2,
    shop_name: "Organic Bath Soaps",
    shop_author: shopAuthor,
    shop_location: "Denver, CO",
    products: [
      {
        id: 1,
        product_name: "Coconut Bar Soap",
        product_image: p1,
        product_price: 30,
      },
    ],
  },
];

const PaymentOptions = () => {
  const [open, setOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  return (
    <section className="mb-10">
      <h3 className="section_sub_title">3 Items In Your Cart</h3>

      <div className="grid grid-cols-12 gap-10">
        {/* Left - Products */}
        <div className="col-span-8">
          <div className="space-y-7">
            {data?.map(item => (
              <CartItem key={item?.id} item={item} />
            ))}
          </div>
        </div>

        {/* Right - Payment Options */}
        <div className="col-span-4">
          <h3 className="text-3xl font-semibold text-primary-green mb-4">
            Payment Options
          </h3>

          <p className="text-lg font-semibold text-secondary-black mb-5">
            You will not be charged until the review page of this order.
          </p>

          {/* PayPal Option */}
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

              <span className="text-secondary-gray font-semibold">
                Pay with PayPal
              </span>
            </p>
            <PaypalSvg />
          </div>

          {/* Cash Option */}
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
              <p>$105.00</p>
            </div>

            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Shipping</p>
              <p>$15.00</p>
            </div>

            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Est. Sales Tax *</p>
              <p>$20.00</p>
            </div>

            <hr className="text-gray-300" />

            <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
              <p>Total (3 Items)</p>
              <p>$140.00</p>
            </div>
          </div>

          {/* Checkout btn */}
          <button onClick={() => setOpen(true)} className="primary_btn">
            Proceed to Checkout
          </button>

          <p className="text-primary-green text-sm mt-5 text-center">
            * Taxes will vary depending on the service or product you buy
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ShippingOptionsModal />
      </Modal>
    </section>
  );
};

export default PaymentOptions;
