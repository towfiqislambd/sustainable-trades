import React from "react";
import { FaStar } from "react-icons/fa";
import { LocationTwoSvg, SaveSvg, SendSvg } from "../Svg/SvgContainer";

const TradeOfferModal = () => {
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

      <div className="flex gap-1 items-center mb-3">
        <LocationTwoSvg />
        <span className="text-light-green">13 mi. away</span>
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
          <SaveSvg />
          <span>Save offer</span>
        </button>
        <button className="primary_btn flex-1 !flex gap-2 items-center justify-center">
          <SendSvg />
          <span>Send offer</span>
        </button>
      </div>
    </>
  );
};

export default TradeOfferModal;
