"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import TradeLayout from "../../TradeLayout";
import DetailsImage from "../../../../../../Assets/e1.jpg";
import { useRouter, useSearchParams } from "next/navigation";
import { LocationSvg1, Reload } from "@/Components/Svg/SvgContainer";
import CounterBottom from "@/Components/Common/DashboardReusable/CounterBottom";
import CounterProductlist from "@/Components/Common/DashboardReusable/CounterProductlist";

interface ProductRow {
  id: number;
  selectedProduct: string;
  count: number;
  price: number;
}

const page = () => {
  const actionButtons = ["Go Back", "Cancel", "Send Counter"];
  const actionButtonStyles: Record<
    string,
    { bg?: string; border?: string; text: string }
  > = {
    "Go Back": {
      border: "border-gray-200",
      text: "Text-black",
    },
    Cancel: {
      border: "border-gray-200",
      text: "Text-black",
    },
    "Send Counter": {
      bg: "bg-[#E48872]",
      text: "text-white",
    },
  };
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as "Pending";
  const router = useRouter();

  const [productRows, setProductRows] = useState<ProductRow[]>([
    { id: 1, selectedProduct: "Coconut", count: 1, price: 30 },
    { id: 2, selectedProduct: "Coconut", count: 1, price: 30 },
  ]);

  const handleIncrement = (id: number) => {
    setProductRows(prev =>
      prev.map(row => (row.id === id ? { ...row, count: row.count + 1 } : row))
    );
  };

  const handleDecrement = (id: number) => {
    setProductRows(prev =>
      prev.map(row =>
        row.id === id
          ? { ...row, count: row.count > 1 ? row.count - 1 : 1 }
          : row
      )
    );
  };

  const addProductRowAfter = (afterId: number, selectedProduct: string) => {
    const newId = Math.max(...productRows.map(row => row.id)) + 1;
    const insertIndex = productRows.findIndex(row => row.id === afterId) + 1;

    setProductRows(prev => {
      const newRows = [...prev];
      newRows.splice(insertIndex, 0, {
        id: newId,
        selectedProduct: selectedProduct, // Use the passed selected product instead of hardcoded "Coconut"
        count: 1,
        price: 30,
      });
      return newRows;
    });
  };

  const handleProductChange = (id: number, selectedProduct: string) => {
    setProductRows(prev =>
      prev.map(row => (row.id === id ? { ...row, selectedProduct } : row))
    );
  };

  return (
    <div>
      <TradeLayout initialTab={tabParam ?? "Pending"}>
        <div className="my-16">
          <h3 className="text-[#13141D] font-semibold text-[20px] pb-4">
            Counter Offer
          </h3>

          {productRows.map((row, index) => (
            <div key={row.id}>
              <div className="py-4 border-t border-b border-[#BFBEBE]">
                <div className="flex justify-between">
                  <div className="flex gap-x-10">
                    <Image
                      src={DetailsImage || "/placeholder.svg"}
                      alt="DetailsImage"
                      height={100}
                      width={100}
                      className="h-[100px] w-[100px] rounded-lg"
                    />
                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-[20px] font-semibold text-[#13141D]">
                        8oz Watermelon Sustainable Bar Soap
                      </h3>
                      <h4 className="text-[20px] font-normal text-[#4B4A47] flex gap-x-5 items-center">
                        The Soap Shop
                        <span className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                          View Shop
                        </span>
                      </h4>
                      <div className="flex gap-x-[2px]">
                        <FaRegStar className="fill-green-950" />
                        <FaRegStar className="fill-green-950" />
                        <FaRegStar className="fill-green-950" />
                        <FaRegStar className="fill-green-950" />
                        <FaRegStar className="fill-green-950" />
                      </div>
                      <div className="flex gap-x-2 items-center">
                        <LocationSvg1 />
                        <h5 className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                          13 mi. away - Denver, CO
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="text-[#4B4A47] font-semibold text-[14px]">
                      Product/Service Trade
                    </h4>
                    <div className="flex gap-x-5 mt-1">
                      <select
                        value={row.selectedProduct}
                        onChange={e =>
                          handleProductChange(row.id, e.target.value)
                        }
                        className="px-4 py-2 rounded-[10px] border border-[#A7A39C] w-[500px]"
                      >
                        <option
                          value="Coconut"
                          className="font-semibold text-[16px] text-[#13141D]"
                        >
                          Coconut
                        </option>
                        <option
                          value="Coconut Oil"
                          className="font-semibold text-[16px] text-[#13141D]"
                        >
                          Coconut Oil
                        </option>
                        <option
                          value="Organic Soap"
                          className="font-semibold text-[16px] text-[#13141D]"
                        >
                          Organic Soap
                        </option>
                        <option
                          value="Soap Bar"
                          className="font-semibold text-[16px] text-[#13141D]"
                        >
                          Soap Bar
                        </option>
                      </select>
                      <div className="px-4 py-2 rounded-[10px] border border-[#A7A39C] flex gap-x-3">
                        <button
                          onClick={() => handleDecrement(row.id)}
                          className="font-bold text-[20px] text-[#000] cursor-pointer"
                        >
                          -
                        </button>
                        <button className="font-bold text-[20px] text-[#000]">
                          {row.count}
                        </button>
                        <button
                          onClick={() => handleIncrement(row.id)}
                          className="font-bold text-[20px] text-[#000] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <h5 className="flex gap-x-2 text-[16px] font-semibold text-[#4B4A47] items-center justify-end py-2">
                      Total amount:{" "}
                      <span className="text-[20px]">
                        ${row.price * row.count}
                      </span>
                    </h5>
                    <div
                      className="flex gap-x-5 items-center justify-end cursor-pointer hover:opacity-70 transition-opacity"
                      onClick={() =>
                        addProductRowAfter(row.id, row.selectedProduct)
                      } // Pass the current row's selected product
                    >
                      <h6 className="text-[16px] font-semibold text-[#A7A39C]">
                        +
                      </h6>
                      <p className="text-[16px] font-semibold text-[#A7A39C]">
                        Add another product/service
                      </p>
                    </div>
                  </div>
                </div>
                {index < productRows.length - 1 && (
                  <div className="flex gap-x-5 items-center px-10 mt-4">
                    <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                    <div className="inline-block">
                      <Reload
                        className={`cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out`}
                      />
                    </div>
                    <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="pb-6 border-b border-[#BFBEBE] rounded-lg">
            <div className="flex gap-x-5 flex-wrap mt-6">
              {actionButtons.map((btn, i) => {
                const style = actionButtonStyles[btn] || {
                  bg: "bg-gray-200",
                  border: "border-gray-400",
                  text: "text-black",
                };

                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (btn === "Go Back") {
                        router.push(`/dashboard/pro/trades`);
                      } else if (btn === "Cancel") {
                        console.log("Cancel clicked");
                      } else if (btn === "Send Counter") {
                        console.log("Send Counter clicked");
                      }
                    }}
                    className={`relative cursor-pointer py-[10px] px-4 rounded-md font-lato font-semibold overflow-hidden
          hover:scale-110 duration-500 ease-in-out
          ${style.bg || ""} ${style.border || "border-2"} ${style.text}
          border-2
        `}
                  >
                    <span className="relative z-10">{btn}</span>
                  </button>
                );
              })}
            </div>

            <li className="text-[#13141D] font-normal text-[16px] list-disc pt-4">
              Sending a message with a counter offer gives you a better chance
              of getting it accepted.
            </li>
          </div>
          <div className="mt-4">
            <CounterBottom />
          </div>
          <div className="">
            <CounterProductlist />
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </TradeLayout>
    </div>
  );
};

export default page;
