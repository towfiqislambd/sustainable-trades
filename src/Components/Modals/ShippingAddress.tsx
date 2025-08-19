import React from "react";
import { useForm } from "react-hook-form";
type formData = {
  address: string;
};

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <>
      <h3 className="text-light-green font-semibold text-lg mb-3">
        Choose a shipping address
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Message */}
        <div>
          <label htmlFor="address" className="form-label">
            Write you address
          </label>
          <textarea
            id="address"
            rows={3}
            placeholder="Type address here..."
            className="form-input"
            {...register("address", {
              required: "Address is required",
            })}
          ></textarea>
          {errors.address && (
            <span className="form-error">{errors.address.message}</span>
          )}
        </div>

        {/* Submit btn */}
        <button className="primary_btn">Proceed to Payment</button>
      </form>
    </>
  );
};

export default ShippingAddress;
