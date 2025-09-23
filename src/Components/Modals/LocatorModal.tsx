import React from "react";
import { useFormContext } from "react-hook-form";

type AddressFormProps = {
  type: "full" | "zip";
};

const AddressForm = ({ type }: AddressFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <form className="my-6 flex flex-col gap-2">
      {type === "full" && (
        <>
          <div>
            <p className="form-label font-bold">Address Line 1 *</p>
            <input
              type="text"
              {...register("address_line_1", {
                required: "Address Line 1 is required",
              })}
              className="form-input"
              placeholder="Address Line"
            />
            {errors.address_line_1 && (
              <span className="text-red-500">
                {errors.address_line_1.message as string}
              </span>
            )}
          </div>
          <div>
            <p className="form-label font-bold">Address Line 2 (Optional)</p>
            <input
              type="text"
              {...register("address_line_2")}
              className="form-input"
              placeholder="Address"
            />
          </div>
          <div>
            <p className="form-label font-bold">City *</p>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="form-input"
              placeholder="City"
            />
            {errors.city && (
              <span className="text-red-500">
                {errors.city.message as string}
              </span>
            )}
          </div>
          <div className="flex gap-x-4">
            <div>
              <p className="form-label font-bold">State *</p>
              <input
                type="text"
                {...register("state", { required: "State is required" })}
                className="form-input"
                placeholder="State"
              />
              {errors.state && (
                <span className="text-red-500">
                  {errors.state.message as string}
                </span>
              )}
            </div>
            <div>
              <p className="form-label font-bold">zip_code *</p>
              <input
                type="text"
                {...register("zip_code", { required: "zip_code is required" })}
                className="form-input"
                placeholder="zip_code"
              />
              {errors.zip_code && (
                <span className="text-red-500">
                  {errors.zip_code.message as string}
                </span>
              )}
            </div>
          </div>
        </>
      )}

      {type === "zip" && (
        <div>
          <p className="form-label font-bold">zip_code *</p>
          <input
            type="text"
            {...register("zip_code", { required: "zip_code is required" })}
            className="form-input"
            placeholder="zip_code"
          />
          {errors.zip_code && (
            <span className="text-red-500">
              {errors.zip_code.message as string}
            </span>
          )}
        </div>
      )}
    </form>
  );
};

export default AddressForm;
