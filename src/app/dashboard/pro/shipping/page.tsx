"use client";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import {
  useFlatRate,
  useWeightRate,
  useWeightRateget,
  useWeightRateDelete,
} from "@/Hooks/api/dashboard_api";
import toast from "react-hot-toast";

const Page = () => {
  const params = useParams();
  const id = params?.id ? parseInt(params.id as string) : undefined;
  const isEdit = !!id;
  const [initialData, setInitialData] = useState<any>(null);
  const [cost, setCost] = useState("");
  const [orderFee, setOrderFee] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [optionName, setOptionName] = useState("");
  const [peritemFee, setPerItemFee] = useState("");
  const { data: weightRanges, refetch } = useWeightRateget();
  const { mutate: deleteWeightRange } = useWeightRateDelete();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { mutate: FlatRateMutation, isPending } = useFlatRate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { mutate: useWeightMutation, isPending: weightloading } =
    useWeightRate();

  useEffect(() => {
    if (isEdit && id && weightRanges?.data) {
      const foundData = weightRanges.data.find((item: any) => item.id === id);
      if (foundData) {
        setInitialData(foundData);
        setSelectedOption("Depending on Weight");
        setMinWeight(foundData.min_weight || "");
        setMaxWeight(foundData.max_weight || "");
        setCost(foundData.cost || "");
      }
    }
  }, [id, isEdit, weightRanges]);

  useEffect(() => {
    if (initialData && isEdit) {
      setIsDropdownOpen(false);
      if (initialData.type === "flat_rate") {
        setSelectedOption("Flat Rate");
        setOptionName(initialData.option_name || "");
        setOrderFee(initialData.per_order_fee || "");
        setPerItemFee(initialData.per_item_fee || "");
      } else if (initialData.type === "weight_range") {
        setSelectedOption("Depending on Weight");
        setMinWeight(initialData.min_weight || "");
        setMaxWeight(initialData.max_weight || "");
        setCost(initialData.cost || "");
      }
    }
  }, [initialData, isEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!optionName || !orderFee || !peritemFee) {
      toast.error("all field is required");
      return;
    }
    FlatRateMutation(
      {
        ...(isEdit && initialData && { id: initialData.id }),
        option_name: optionName,
        per_order_fee: orderFee,
        per_item_fee: peritemFee,
      },
      {
        onSuccess: (data: any) => {
          toast.success(
            isEdit
              ? "Flat rate updated successfully!"
              : "Flat rate added successfully!"
          );
          if (!isEdit) {
            setOptionName("");
            setOrderFee("");
            setPerItemFee("");
          }
          closeModal();
        },
      }
    );
  };

  const handleSubmitweight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!maxWeight || !minWeight || !cost) {
      toast.error("all filed is required");
      return;
    }
    useWeightMutation(
      {
        ...(isEdit && initialData && { id: initialData.id }),
        max_weight: maxWeight,
        cost: cost,
        min_weight: minWeight,
      },
      {
        onSuccess: (data: any) => {
          if (data) {
            toast.success(
              isEdit
                ? "Weight range updated successfully!"
                : "Weight range added successfully!"
            );
            if (!isEdit) {
              setMaxWeight("");
              setMinWeight("");
              setCost("");
            }
            closeModal();
            refetch();
          }
        },
      }
    );
  };

  const handleDeleteRange = (id: number) => {
    deleteWeightRange(
      {
        endpoint: `/api/weight_range/${id}`,
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setSelectedOption(null);
    if (!isEdit) {
      setOptionName("");
      setOrderFee("");
      setPerItemFee("");
      setMaxWeight("");
      setMinWeight("");
      setCost("");
    }
  };

  return (
    <>
      <div className="border-b border-[#BFBEBE] pb-4">
        <h2 className="text-[30px] md:text-[40px] font-lato font-semibold text-[#000]">
          Shipping
        </h2>
        <h5 className="cursor-pointer flex items-center gap-x-1 text-[#13141D] font-normal text-[16px]">
          <FaAngleLeft />
          Back
        </h5>
      </div>

      <div className="pt-3 md:pt-6">
        <h4 className="text-[#13141D] text-[20px] md:text-[24px] font-bold">
          Shipping Settings
        </h4>
        <p className="text-[#13141D] text-[13px] md:text-[16px] font-normal ">
          You can manage available shipping options for customers and set up
          your preferred shipping calculator.
        </p>

        <div className="pt-3 md:pt-6 flex flex-col gap-y-2 md:gap-y-4">
          <h5 className="text-[#13141D] text-[13px] md:text-[16px] font-semibold">
            Shipping Options
          </h5>
          <p className="text-[#13141D] text-[12px]  md:text-[16px] font-normal max-w-[570px]">
            You can choose how you want to apply shipping costs to your order.
            Shipping cost can be calculated with a flat rate, by weight, or
            connect your store to ShipStation and enjoy full shipping
            integration including automated shipping labels!
          </p>

          {/* Example existing card */}
          <div className="border-2 border-[#67645F] bg-[#E6F5F4] px-3 md:px-6 py-2 md:py-4 rounded-lg max-w-[700px]">
            <h4 className="text-[13px] md:text-[16px] font-bold text-[#13141D] pb-3">
              USPS MAIL
            </h4>
            <h6 className="text-[12px] md:text-[16px] font-medium text-[#13141D]">
              Flat Rate: $6.00 per order, $1.00 per item
            </h6>
            <p className="text-[12px] md:text-[16px] font-medium text-[#13141D]">
              United States (54 of 54), Canada (13 of 13)
            </p>
          </div>

          {/* Dropdown button - only show if not edit */}
          {!isEdit && (
            <div className="relative w-full">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-[#274F45] text-white px-4 py-2 rounded-lg w-fit font-semibold flex gap-x-5 items-center text-[14px] md:text-[16px] cursor-pointer"
              >
                <FaAngleDown />
                Add Shipping Option
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-5 w-full flex flex-col gap-y-4">
                  <div
                    onClick={() => handleOptionClick("Flat Rate")}
                    className="px-2 md:px-4py-2 cursor-pointer bg-[#F2EFE8] border border-[#3C665B] p-4 rounded-lg w-full max-w-[700px]"
                  >
                    <h3 className="text-[#274F45] font-bold text-[14px] md:text-[16px]">
                      Flat Rate
                    </h3>
                    <p className="text-[13px] md:text-[16px] text-[#3D3D3D] font-medium pt-1">
                      Define a charge for every order and a flat fee for each
                      item.
                    </p>
                  </div>
                  <div
                    onClick={() => handleOptionClick("Depending on Weight")}
                    className="px-2 md:px-4 py-2 cursor-pointer bg-[#F2EFE8] border border-[#3C665B] p-4 rounded-lg w-full max-w-[700px]"
                  >
                    <h3 className="text-[#274F45] font-bold text-[14px] md:text-[16px]">
                      Depending on Weight
                    </h3>
                    <p className="text-[13px] md:text-[16px] text-[#3D3D3D] font-medium pt-1">
                      Define a charge for every order and a flat fee for each
                      item.
                    </p>
                  </div>
                  <div
                    onClick={() => handleOptionClick("Connect ShipStation")}
                    className="px-2 md:px-4 py-2 cursor-pointer bg-[#F2EFE8] border border-[#3C665B] p-4 rounded-lg w-full max-w-[700px]"
                  >
                    <h3 className="text-[#274F45] font-bold text-[16px]">
                      Connect ShipStation
                    </h3>
                    <p className="text-[16px] text-[#3D3D3D] font-medium pt-1">
                      Define a charge for every order and a flat fee for each
                      item.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Flat Rate */}
      {selectedOption === "Flat Rate" && (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-3 md:px-0">
          <div className="bg-white p-3 md:p-6 rounded-lg max-w-[850px] w-full">
            <div className="">
              <div className="flex justify-end">
                <RxCross1 onClick={closeModal} className="cursor-pointer" />
              </div>
              <h3 className="text-[#3D3D3D] text-[18px] md:text-[24px] font-bold text-center">
                {isEdit ? "EDIT" : "ADD"} FLAT RATE
              </h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-2.5 md:mt-5 flex flex-col gap-y-5"
            >
              <h5 className="text-[#3D3D3D] font-semibold text-[16px] text-center pb-4 border-b border-[#3D3D3D]">
                Formula
              </h5>
              <div>
                <p className="form-label font-bold">Option Name *</p>
                <input
                  type="text"
                  className="form-input"
                  placeholder="“FedEx Next Day”, “USPS Express Mail”"
                  value={optionName}
                  onChange={e => setOptionName(e.target.value)}
                />
              </div>
              <div className="flex gap-x-10">
                <div className="w-full">
                  <p className="form-label font-bold">Per Order Fee </p>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="$ XXX"
                    value={orderFee}
                    onChange={e => setOrderFee(e.target.value)}
                  />
                  <p className="text-[16px] font-normal text-[#67645F] pt-3">
                    A base fee for every order placed
                  </p>
                </div>
                <div className="w-full">
                  <p className="form-label font-bold">Fee per item </p>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="$ XXX"
                    value={peritemFee}
                    onChange={e => setPerItemFee(e.target.value)}
                  />
                  <p className="text-[16px] font-normal text-[#67645F] pt-3">
                    An additional fee for each physical item in the order
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mt-8 px-4 py-2 md:py-4 text-white font-semibold bg-[#274F45] rounded cursor-pointer w-[190px]"
                >
                  {isPending ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Depending on Weight */}
      {selectedOption === "Depending on Weight" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[800px]">
            <div>
              <div className="flex justify-end">
                <RxCross1 onClick={closeModal} className="cursor-pointer" />
              </div>

              <h3 className="text-[#3D3D3D] text-[24px] font-bold text-center pb-4 border-b border-[#3D3D3D]">
                {isEdit ? "EDIT" : "ADD"} WEIGHT RANGE RATE
              </h3>

              <form
                onSubmit={handleSubmitweight}
                className="mt-2.5 md:mt-5 flex flex-col gap-y-5"
              >
                <div>
                  <p className="form-label font-bold">Cost *</p>
                  <input
                    onChange={e => setCost(e.target.value)}
                    value={cost}
                    type="number"
                    className="form-input"
                    placeholder="Cost"
                  />
                </div>

                <div className="flex gap-x-10">
                  <div className="w-full">
                    <p className="form-label font-bold">Min Weight</p>
                    <input
                      type="number"
                      onChange={e => setMinWeight(e.target.value)}
                      value={minWeight}
                      className="form-input"
                      placeholder="kg"
                    />
                  </div>
                  <div className="w-full">
                    <p className="form-label font-bold">Max Weight</p>
                    <input
                      type="number"
                      onChange={e => setMaxWeight(e.target.value)}
                      value={maxWeight}
                      className="form-input"
                      placeholder="kg"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="mt-8 px-4 py-2 md:py-4 text-white font-semibold bg-[#274F45] rounded cursor-pointer w-[190px]"
                  >
                    {weightloading ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>

              <h4 className="text-[20px] font-semibold text-[#274F45] mt-5">
                Weight Ranges
              </h4>
              <p className="font-normal text-[16px] text-[#3D3D3D]">
                Depending on the total weight, you can charge different amounts
                for shipping.
              </p>

              {/* Table */}
              <table className="w-full border-collapse my-5 px-5">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-[18px] font-medium text-[#13141D]">
                      Weight (lbs)
                    </th>
                    <th className="text-left py-2 text-[18px] font-medium text-[#13141D]">
                      Cost
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {weightRanges?.data?.length > 0 ? (
                    weightRanges.data.map((range: any) => (
                      <tr key={range.id} className="group hover:bg-[#C2D5D0]">
                        <td className="p-2 text-sm text-[#13141D]">
                          {range.min_weight} to {range.max_weight}
                        </td>
                        <td className="py-2 text-sm text-[#13141D]">
                          ${range.cost}
                        </td>
                        <td className="px-5 text-right">
                          <button
                            onClick={() => handleDeleteRange(range.id)}
                            className="text-gray-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-2 text-center text-gray-500">
                        No weight ranges available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Connect ShipStation */}
      {selectedOption === "Connect ShipStation" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[650px] shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div className="flex items-center gap-3">
                {/* Icon box */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#274F45] rounded">
                  <span className="text-green-400 text-xl">⚙️</span>
                </div>
                <h2 className="text-lg font-bold text-[#13141D] uppercase">
                  CONNECT TO SHIPSTATION
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 space-y-5">
              {/* Pricing */}
              <p className="font-semibold text-[#13141D]">
                Only $9.00 per month (paid directly to ShipStation)
              </p>

              {/* Features list */}
              <ul className="list-disc list-inside space-y-1 text-[#13141D] text-[15px]">
                <li>
                  Easily import and manage orders from all your sales channels.
                </li>
                <li>
                  Access the lowest shipping rates, no matter how much you ship.
                </li>
                <li>
                  Streamline your processes with powerful automation tools to
                  save time and boost efficiency.
                </li>
              </ul>

              {/* Description */}
              <p className="text-sm text-[#13141D] leading-relaxed">
                ShipStation is the world’s leading web-based shipping solution
                for ecommerce retailers. It allows users to import, organize,
                and ship orders efficiently across multiple sales platforms.
                With over 180 integrations—including marketplaces, carriers, and
                fulfillment providers—ShipStation offers features like automatic
                shipping preference, customizable automation rules,
                multi-carrier rate calculators, and more.
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-end px-6 py-2 md:py-4 border-t">
              <button className="bg-[#0B3C32] text-white px-6 py-2 rounded-md font-medium hover:bg-[#094C40] transition">
                Connect to ShipStation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
