import { Controller, UseFormReturn } from "react-hook-form";
import { FormData } from "@/app/dashboard/basic/create-listing/page"; 

interface QuantitySectionProps {
  control: UseFormReturn<FormData>["control"];
  errors: UseFormReturn<FormData>["formState"]["errors"];
  isBasicMember: boolean;
}

const QuantitySection = ({
  control,
  errors,
  isBasicMember,
}: QuantitySectionProps) => (
  <div>
    <h3 className="text-[20px] md:text-[24px] font-semibold text-[#13141D]">
      Quantity
    </h3>
    <Controller
      name="product_quantity"
      control={control}
      rules={{
        validate: value =>
          !value ||
          /^\d+$/.test(value.toString()) ||
          "Quantity must be a number",
      }}
      render={({ field }) => (
        <input
          type="text"
          {...field}
          readOnly={isBasicMember}
          className={`w-full lg:w-[350px] border border-[#A7A39C] rounded-lg p-2 md:p-4 mt-2 text-[#13141D] font-normal outline-0 ${
            isBasicMember ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""
          }`}
        />
      )}
    />

    <div className="flex flex-col gap-4 mt-2">
      {/* Unlimited Stock */}
      <label
        className={`flex items-center gap-2 text-[20px] md:text-[24px] font-semibold ${
          isBasicMember ? "text-gray-400" : "text-[#13141D]"
        }`}
      >
        Unlimited Stock
        <Controller
          name="unlimited_stock"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              name={field.name}
              ref={field.ref}
              checked={!!field.value}
              onChange={e => field.onChange(e.target.checked)}
              onBlur={field.onBlur}
              disabled={isBasicMember}
              className={`mt-1 accent-[#274F45] ${
                isBasicMember ? "cursor-not-allowed" : ""
              }`}
            />
          )}
        />
      </label>

      {/* Feature */}
      <label className="flex items-center gap-2 text-[20px] md:text-[24px] text-[#13141D] font-semibold">
        Feature
        <Controller
          name="is_featured"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              name={field.name}
              ref={field.ref}
              checked={!!field.value}
              onChange={e => field.onChange(e.target.checked)}
              onBlur={field.onBlur}
              className="mt-1 accent-[#274F45]"
            />
          )}
        />
      </label>

      {/* Out of Stock */}
      <label
        className={`flex items-center gap-2 text-[20px] md:text-[24px] font-semibold ${
          isBasicMember ? "text-gray-400" : "text-[#13141D]"
        }`}
      >
        Out of Stock
        <Controller
          name="out_of_stock"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              name={field.name}
              ref={field.ref}
              checked={!!field.value}
              onChange={e => field.onChange(e.target.checked)}
              onBlur={field.onBlur}
              disabled={isBasicMember}
              className={`mt-1 accent-[#274F45] ${
                isBasicMember ? "cursor-not-allowed" : ""
              }`}
            />
          )}
        />
      </label>

      <p className="text-[16px] text-[#13141D] font-normal w-full md:max-w-[400px]">
        Status automatically changes to "Out of Inventory" when zero inventory
        is reached
      </p>
    </div>
  </div>
);

export default QuantitySection;
