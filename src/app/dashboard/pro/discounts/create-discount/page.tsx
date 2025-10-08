"use client";
import { getallListings, useCreateDiscount } from "@/Hooks/api/dashboard_api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaAngleLeft } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";

interface Product {
  id: number;
  product_name: string;
}

interface ListingsResponse {
  data: Product[];
}

const CreateDiscount = () => {
  const router = useRouter();
  const { mutate, isPending } = useCreateDiscount();
  const [discountType, setDiscountType] = useState("code");
  const [appliesTo, setAppliesTo] = useState("Any Order");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [promoType, setPromoType] = useState("Percent Off");
  const [amount, setAmount] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [limitPerCustomer, setLimitPerCustomer] = useState(false);
  const [totalUsesLimit, setTotalUsesLimit] = useState(false);
  const [totalUses, setTotalUses] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [neverExpires, setNeverExpires] = useState(false);
  const { data: productlist }: { data: ListingsResponse | undefined } = getallListings();

  const generateRandomCode = () => {
    return (
      Math.random().toString(36).substring(2, 7).toUpperCase() +
      Math.floor(Math.random() * 100)
    );
  };

  const handleGenerateCode = () => {
    setCode(generateRandomCode());
  };

const handleSave = () => {
  if (!name.trim()) {
    toast.error("Discount name is required.");
    return;
  }
  if (!amount.trim()) {
    toast.error("Discount amount is required.");
    return;
  }
  if (!startDate) {
    toast.error("Start date is required.");
    return;
  }
  if (appliesTo === "Single Product" && !selectedProduct) {
    toast.error("Please select a product.");
    return;
  }
  if (totalUsesLimit && !totalUses.trim()) {
    toast.error("Please enter total usage limit.");
    return;
  }

  const finalCode =
    discountType === "code"
      ? code.trim() || generateRandomCode()
      : generateRandomCode();

  const payload = {
    name: name.trim(),
    discount_type:
      discountType === "code" ? "discount_code" : "automatic_discount",
    code: finalCode,
    promotion_type: promoType === "Percent Off" ? "percentage" : "fixed",
    amount: amount.trim(),
    applies: appliesTo === "Any Order" ? "any_order" : "single_product",
    ...(appliesTo === "Single Product" && { product_id: selectedProduct }),
    limit_one_per_shopper: limitPerCustomer,
    ...(totalUsesLimit &&
      totalUses.trim() && { discount_limits: totalUses.trim() }),
    start_date: startDate,
    start_time: startTime || null,
    never_expires: neverExpires,
    ...(neverExpires
      ? { end_date: null, end_time: null }
      : { end_date: endDate || null, end_time: endTime || null }),
  };

  mutate(payload, {
    onSuccess: (data:any) => {
      if (data?.success) {
        router.push("/dashboard/pro/discounts");
      }
    },
  });
};

  const handleDiscard = () => {
    if (confirm("Are you sure you want to discard?")) {
      router.back();
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleNeverExpiresChange = (e:any) => {
    const checked = e.target.checked;
    setNeverExpires(checked);
    if (checked) {
      setEndDate("");
      setEndTime("");
    }
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Title */}
      <h2 className="text-[30px] md:text-[40px] font-semibold text-[#13141D]">
        Create Discount
      </h2>

      {/* Back */}
      <div className="border-b border-gray-300">
        <h4
          onClick={handleBack}
          className="flex gap-x-1 items-center text-[#13141D] font-normal py-4 cursor-pointer"
        >
          <FaAngleLeft />
          Back
        </h4>
      </div>

      {/* Name */}
      <div className="pt-4 md:pt-8 pb-6 md:pb-12">
        <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
          Name
        </h4>
        <input
          type="text"
          placeholder="Example: 15% Off Order"
          value={name}
          onChange={e => setName(e.target.value)}
          className="px-4 py-2.5 md:py-5 border-2 border-[#67645F] rounded-[8px] text-[16px] font-bold text-[#67645F] my-3 w-full lg:w-[750px]"
        />
        <p className="text-[13px] md:text-[16px] font-bold text-[#13141D]">
          The name that shoppers will see at checkout.
        </p>
      </div>

      {/* Discount Type */}
      <div className="pb-4 md:pb-8">
        <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
          Discount Type
        </h4>
        <div className="flex mt-3 ">
          <button
            onClick={() => setDiscountType("code")}
            className={`px-4 py-[9px] md:py-[18px] rounded-l-md cursor-pointer text-[16px] md:text-[20px] text-[#274F45] font-semibold ${
              discountType === "code"
                ? "bg-[#D4E2CB] border-2 border-[#274F45] "
                : "bg-white border-2 border-[#67645F]"
            }`}
          >
            Discount Code
          </button>
          <button
            onClick={() => setDiscountType("auto")}
            className={`px-6 py-2 rounded-r-md cursor-pointer  text-[16px] md:text-[20px] text-[#274F45] font-semibold ${
              discountType === "auto"
                ? "bg-[#D4E2CB] border-2 border-[#274F45] "
                : "bg-white border-2 border-[#67645F]"
            }`}
          >
            Automatic Discount
          </button>
        </div>
      </div>

      {/* Discount Code */}
      {discountType === "code" && (
        <div className="pb-4 md:pb-8">
          <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
            Discount Code
          </h4>
          <div className="flex gap-2 mt-3 w-full lg:w-[750px] relative">
            <input
              type="text"
              placeholder="Discount Code (Ex. SALE15)"
              value={code}
              onChange={e => setCode(e.target.value)}
              className="px-4 py-2.5 md:py-5 border-2 border-[#67645F] rounded-[8px] text-[13px] md:text-[16px] font-bold text-[#67645F] my-3 w-full md:w-[750px]"
            />
            <button
              onClick={handleGenerateCode}
              className="absolute top-[50%] -translate-y-[50%] right-5 cursor-pointer text-[#5C7F60] font-bold text-[13px] md:text-[16px]"
            >
              Generate Code
            </button>
          </div>
          <p className="text-[13px] md:text-[16px] font-bold text-[#13141D]">
            Shoppers enter this code at checkout.
          </p>
        </div>
      )}

      {/* Promotion */}
     <div className="pb-4 md:pb-8">
        <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
          Promotion
        </h4>
        <div className="flex mt-3  w-full lg:w-[750px] border border-[#67645F]  rounded-md ">
          <select
            className="px-4 py-2.5 md:py-5 w-full bg-[#D4E2CB] rounded-l-md text-[#5C7F60] font-bold text-[13px] md:text-[16px] outline-0"
            value={promoType}
            onChange={(e) => setPromoType(e.target.value)}
          >
            <option>Percent Off</option>
            <option>Fixed Amount</option>
          </select>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder={promoType === "Percent Off" ? "0%" : "0"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="rounded-r-md px-4 py-2 flex-1 text-[#13141D] font-bold text-[13px] md:text-[16px] outline-0"
          />
        </div>
      </div>

      {/* Applies To */}
      <div className="pb-4 md:pb-8">
        <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
          Applies To
        </h4>
        <select
          className="mt-3 border border-[#3D3D3D] rounded-md px-4 py-2.5 md:py-5  w-full lg:w-[750px] bg-[#D4E2CB] text-[13px] md:text-[16px] font-bold text-[#274F45]"
          value={appliesTo}
          onChange={e => setAppliesTo(e.target.value)}
        >
          <option value="Any Order">Any Order</option>
          <option value="Single Product">Single Product</option>
        </select>

        {/* Show product selection dropdown if Single Product is selected */}
        {appliesTo === "Single Product" && (
          <div className="mt-4  w-full lg:w-[750px]">
            <h5 className="text-[13px] md:text-[16px] font-semibold text-[#13141D] mb-2">
              Select Product
            </h5>
            <select
              value={selectedProduct}
              onChange={e => setSelectedProduct(e.target.value)}
              className="w-full border border-[#67645F] rounded-md px-4 py-5 text-[16px] font-bold text-[#13141D]"
            >
              <option value="">Select a product</option>
              {productlist?.data?.map(product => (
                <option key={product.id} value={product.id}>
                  {product?.product_name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Discount Limits */}
      <div className="pb-4 md:pb-8">
        <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
          Discount Limits
        </h4>
        <div className="mt-3 flex flex-col gap-2">
          <label className="flex items-center gap-2 text-[13px] md:text-[16px] font-semibold text-[#13141D]">
            <input
              type="checkbox"
              className="w-3 h-3 md:w-4 md:h-4 "
              checked={limitPerCustomer}
              onChange={e => setLimitPerCustomer(e.target.checked)}
            />
            Limit One Per Shopper
          </label>
          <label className="flex items-center gap-2 text-[13px] md:text-[16px]  font-semibold text-[#13141D]">
            <input
              type="checkbox"
              className="w-3 h-3 md:w-4 md:h-4 "
              checked={totalUsesLimit}
              onChange={e => setTotalUsesLimit(e.target.checked)}
            />
            Limit number of times this discount can be used in total
          </label>
          <input
            type="number"
            min="1"
            placeholder="Enter usage limit (ex: 5)"
            value={totalUses}
            onChange={e => setTotalUses(e.target.value)}
            disabled={!totalUsesLimit}
            className="px-4 py-2.5 md:py-5 border border-[#3D3D3D] rounded-[8px] text-[16px] font-bold text-[#67645F] my-1  w-full lg:w-[750px]"
          />
        </div>
      </div>

      {/* Active Dates */}
      <div className="pb-4 md:pb-8">
        <h4 className="text-[16px] md:text-[20px] font-normal text-[#13141D]">
          Active Dates
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-3  w-full lg:w-[750px]">
          {/* Start Date */}
          <div>
            <label className="block text-[14px] md:text-[16px] font-normal text-[#13141D] mb-1 md:mb-2">
              Start Date
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-2.5 md:py-5 gap-2 bg-[#E6F5F4]">
              <FiCalendar />
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[14px] md:text-[16px] font-normal text-[#13141D] mb-2">
              Start Time (PDT)
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-2.5 md:py-5 gap-2 bg-[#E6F5F4]">
              <FiClock />
              <input
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-[14px] md:text-[16px] font-normal text-[#13141D] mb-2">
              End Date
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-2.5 md:py-5 gap-2 bg-[#E6F5F4]">
              <FiCalendar />
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                disabled={neverExpires}
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[14px] md:text-[16px] font-normal text-[#13141D] mb-2">
              End Time (PDT)
            </label>
            <div className="flex items-center border border-[#67645F] rounded-md px-4 py-2.5 md:py-5 gap-2 bg-[#E6F5F4]">
              <FiClock />
              <input
                type="time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
                disabled={neverExpires}
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
        <label className="flex items-center text-[13px] md:text-base  gap-2 mt-1.5 md:mt-3">
          <input
            type="checkbox"
            className="w-3 h-3 md:w-4 md:h-4"
            checked={neverExpires}
            onChange={handleNeverExpiresChange}
          />
          Never Expires
        </label>
      </div>
      <div className="flex flex-col md:flex-row justify-end mt-3 md:mt-12 gap-3.5 md:gap-x-10">
        <button
          onClick={handleDiscard}
          disabled={isPending}
          className="text-[#274F45] border-[#274F45] border rounded-[8px] px-16 py-2 md:py-4 text-base  md:text-[20px] font-semibold cursor-pointer hover:bg-[#D4E2CB] duration-500 ease-in-out disabled:opacity-50"
        >
          Discard
        </button>
        <button
          onClick={handleSave}
          disabled={isPending}
          className="hover:border-[#D4E2CB] hover:border border hover:bg-transparent rounded-[8px] px-16 py-2 md:py-4 text-base md:text-[20px] font-semibold cursor-pointer bg-[#D4E2CB] w-full md:w-fit text-[#274F45] duration-500 ease-in-out disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save Discount"}
        </button>
      </div>
    </div>
  );
};

export default CreateDiscount;
