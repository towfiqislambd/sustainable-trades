"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type formData = {
  full_name: string;
  phone_number: string;
  message: string;
};

type ShippingOptionsProps = {
  onProceed: () => void;
  onSuccess: () => void;
};

const ShippingOptionsModal = ({
  onProceed,
  onSuccess,
}: ShippingOptionsProps) => {
  const [shippingMethod, setShippingMethod] = useState("proceed");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
    onSuccess();
  };

  return (
    <>
      <h3 className="text-light-green font-semibold text-lg mb-3">
        Shipping Options
      </h3>

      <p className="text-secondary-gray font-semibold mb-3">
        Select the option that works best for you!
      </p>

      <div className="space-y-3">
        <p className="flex gap-3 items-center">
          <input
            type="radio"
            className="scale-150"
            name="shipping"
            value="proceed"
            checked={shippingMethod === "proceed"}
            onChange={e => setShippingMethod(e.target.value)}
          />

          <span className="text-secondary-gray font-semibold">
            Proceed to Shipping
          </span>
        </p>

        {shippingMethod === "proceed" && (
          <button onClick={onProceed} className="primary_btn">
            Proceed to Shipping
          </button>
        )}

        <p className="flex gap-3 items-center mb-3">
          <input
            type="radio"
            className="scale-150"
            name="shipping"
            value="local"
            checked={shippingMethod === "local"}
            onChange={e => setShippingMethod(e.target.value)}
          />

          <span className="text-secondary-gray font-semibold">
            Arrange Local Pickup
          </span>
        </p>

        {shippingMethod === "local" && (
          <div>
            <h3 className="mb-1 text-secondary-black font-semibold">
              Schedule Pickup
            </h3>
            <p className="text-secondary-black text-[15px] mb-5">
              Schedule Pickup Please provide your contact information below and
              send a message to the seller to arrange a convenient time and
              location for pickup.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="full_name" className="form-label">
                  Full Name
                </label>
                <input
                  id="full_name"
                  type="text"
                  placeholder="Jon Doe"
                  className="form-input"
                  {...register("full_name", {
                    required: "Full Name is required",
                  })}
                />
                {errors.full_name && (
                  <span className="form-error">{errors.full_name.message}</span>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone_number" className="form-label">
                  Phone Number
                </label>
                <input
                  id="phone_number"
                  type="number"
                  placeholder="+1 (123) 456-7890"
                  className="form-input"
                  {...register("phone_number", {
                    required: "Phone Number is required",
                  })}
                />
                {errors.phone_number && (
                  <span className="form-error">
                    {errors.phone_number.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="form-label">
                  Message to Seller
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Type message here..."
                  className="form-input"
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                {errors.message && (
                  <span className="form-error">{errors.message.message}</span>
                )}
              </div>

              {/* Submit btn */}
              <button className="primary_btn">Send Message to Seller</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ShippingOptionsModal;
