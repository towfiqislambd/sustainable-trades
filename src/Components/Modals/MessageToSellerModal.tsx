import React from "react";
import { FaStar } from "react-icons/fa";
import {
  BackSvg,
  LocationTwoSvg,
  MessageSvg,
  SaveSvg,
  SendSvg,
} from "../Svg/SvgContainer";

const MessageToSellerModal = () => {
  return (
    <>
      <h3 className="text-light-green font-semibold text-lg mb-2">
        Trade Offer
      </h3>

      <h4 className="text-2xl font-semibold text-secondary-black mb-2">
        Organic Bath Soaps
      </h4>

      <div className="flex gap-1 items-center mb-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <FaStar className="text-primary-green text-sm" />
        ))}
      </div>

      <div className="flex gap-1 items-center">
        <LocationTwoSvg />
        <span className="text-light-green">13 mi. away</span>
      </div>

      <hr className="my-3 text-gray-300" />

      <div className="flex justify-between items-center mb-2 text-lg font-semibold text-secondary-black">
        <p>Coconut Bar Soap</p>
        <p>$30.00</p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="msg"
          className="text-light-green font-semibold mb-2 block"
        >
          Message to the Seller
        </label>
        <textarea
          id="msg"
          className="form-input"
          rows={3}
          placeholder="Type message here..."
        ></textarea>
      </div>

      <div className="flex gap-4 items-center">
        <button className="primary_btn flex-1 !flex gap-2 items-center justify-center">
          <BackSvg />
          <span>Go back</span>
        </button>
        <button className="primary_btn flex-1 !flex gap-2 items-center justify-center">
          <MessageSvg />
          <span>Send message</span>
        </button>
      </div>
    </>
  );
};

export default MessageToSellerModal;
