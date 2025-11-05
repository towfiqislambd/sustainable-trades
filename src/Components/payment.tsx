import React, { useState } from "react";
import { PaypalSvg } from "./Svg/SvgContainer";

const payment = () => {
  // State
  const [paymentMethod, setPaymentMethod] = useState<string>("paypal");

  return (
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

          <span className="text-secondary-gray font-semibold">Pay later</span>
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

        <span className="text-secondary-gray font-semibold">Pay with Cash</span>
      </p>

      <div className="space-y-3 mt-7 mb-7">
        <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
          <p>Subtotal</p>
          <p>$40</p>
        </div>

        <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
          <p>Shipping</p>
          <p>$12</p>
        </div>

        <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
          <p>Est. Sales Tax *</p>
          <p>$5</p>
        </div>

        <hr className="text-gray-300" />

        <div className="flex items-center justify-between text-[17px] font-semibold text-primary-green">
          <p>Total (5 Items)</p>
          <p>$10</p>
        </div>
      </div>
    </div>
  );
};

export default payment;
