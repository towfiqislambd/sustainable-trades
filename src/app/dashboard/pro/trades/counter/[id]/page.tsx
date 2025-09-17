"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import DetailsImage from "../../../../../../Assets/e1.jpg";
import { useRouter, useSearchParams } from "next/navigation";
import { LocationSvg1, Reload } from "@/Components/Svg/SvgContainer";
import CounterBottom from "@/Components/Common/DashboardReusable/CounterBottom";
import CounterProductlist from "@/Components/Common/DashboardReusable/CounterProductlist";
import TradeLayout from "../../TradeLayout";

interface ProductRow {
  id: number;
  selectedProduct: string;
  count: number;
  price: number;
  shopName?: string;
  shopLocation?: string;
  rating?: number;
}

interface TradeSection {
  title: string;
  subtitle: string;
  products: ProductRow[];
  isOwnShop: boolean;
}

const page = () => {
  const actionButtons = ["Go Back", "Cancel", "Send Counter"];
  const actionButtonStyles: Record<
    string,
    { bg?: string; border?: string; text: string }
  > = {
    "Go Back": {
      border: "border-gray-200",
      text: "text-black",
    },
    Cancel: {
      border: "border-gray-200",
      text: "text-black",
    },
    "Send Counter": {
      bg: "bg-[#E48872]",
      text: "text-white",
    },
  };

  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as "Pending";
  const router = useRouter();

  const [tradeSections, setTradeSections] = useState<TradeSection[]>([
    {
      title: "Their Offer",
      subtitle: "Products/Services from The Soap Shop",
      isOwnShop: false,
      products: [
        {
          id: 1,
          selectedProduct: "8oz Watermelon Sustainable Bar Soap",
          count: 1,
          price: 500,
          shopName: "The Soap Shop",
          shopLocation: "13 mi. away - Denver, CO",
          rating: 5,
        },
      ],
    },
    {
      title: "Your Counter Offer",
      subtitle: "Products/Services from Your Shop",
      isOwnShop: true,
      products: [
        {
          id: 2,
          selectedProduct: "Website Design Service",
          count: 5,
          price: 100,
          shopName: "Your Shop",
          shopLocation: "Denver, CO",
          rating: 5,
        },
      ],
    },
  ]);

  const handleIncrement = (sectionIndex: number, productId: number) => {
    setTradeSections(prev =>
      prev.map((section, idx) =>
        idx === sectionIndex
          ? {
              ...section,
              products: section.products.map(product =>
                product.id === productId
                  ? { ...product, count: product.count + 1 }
                  : product
              ),
            }
          : section
      )
    );
  };

  const handleDecrement = (sectionIndex: number, productId: number) => {
    setTradeSections(prev =>
      prev.map((section, idx) =>
        idx === sectionIndex
          ? {
              ...section,
              products: section.products.map(product =>
                product.id === productId
                  ? {
                      ...product,
                      count: product.count > 1 ? product.count - 1 : 1,
                    }
                  : product
              ),
            }
          : section
      )
    );
  };

  const addProductToSection = (sectionIndex: number, afterId?: number) => {
    const section = tradeSections[sectionIndex];
    const newId = Math.max(...section.products.map(p => p.id), 0) + 1;
    const insertIndex = afterId
      ? section.products.findIndex(p => p.id === afterId) + 1
      : section.products.length;

    const newProduct: ProductRow = {
      id: newId,
      selectedProduct: section.isOwnShop ? "Select Service" : "Select Product",
      count: 1,
      price: section.isOwnShop ? 100 : 30,
      shopName: section.isOwnShop ? "Your Shop" : "The Soap Shop",
      shopLocation: section.isOwnShop
        ? "Denver, CO"
        : "13 mi. away - Denver, CO",
      rating: 5,
    };

    setTradeSections(prev =>
      prev.map((section, idx) =>
        idx === sectionIndex
          ? {
              ...section,
              products: [
                ...section.products.slice(0, insertIndex),
                newProduct,
                ...section.products.slice(insertIndex),
              ],
            }
          : section
      )
    );
  };

  const handleProductChange = (
    sectionIndex: number,
    productId: number,
    selectedProduct: string
  ) => {
    setTradeSections(prev =>
      prev.map((section, idx) =>
        idx === sectionIndex
          ? {
              ...section,
              products: section.products.map(product =>
                product.id === productId
                  ? { ...product, selectedProduct }
                  : product
              ),
            }
          : section
      )
    );
  };

  const removeProduct = (sectionIndex: number, productId: number) => {
    setTradeSections(prev =>
      prev.map((section, idx) =>
        idx === sectionIndex
          ? {
              ...section,
              products: section.products.filter(
                product => product.id !== productId
              ),
            }
          : section
      )
    );
  };

  const calculateSectionTotal = (products: ProductRow[]) => {
    return products.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };

  const getProductOptions = (isOwnShop: boolean) => {
    if (isOwnShop) {
      return [
        "Website Design Service",
        "Logo Design",
        "SEO Consultation",
        "Social Media Management",
        "Content Writing",
      ];
    } else {
      return [
        "8oz Watermelon Sustainable Bar Soap",
        "Coconut Oil Soap",
        "Organic Lavender Soap",
        "Shea Butter Soap Bar",
        "Tea Tree Oil Soap",
      ];
    }
  };

  return (
    <div>
      <TradeLayout initialTab={tabParam ?? "Pending"}>
        <div className="my-16">
          <h3 className="text-[#13141D] font-semibold text-[20px] pb-4">
            Counter Offer
          </h3>

          {tradeSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Header */}
              <div className="mb-6">
                <h4 className="text-[#13141D] font-semibold text-[18px]">
                  {section.title}
                </h4>
                <p className="text-[#4B4A47] text-[14px]">{section.subtitle}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#A7A39C] text-[14px]">
                    {section.products.length} item
                    {section.products.length !== 1 ? "s" : ""}
                  </span>
                  <span className="text-[#13141D] font-semibold text-[16px]">
                    Total: ${calculateSectionTotal(section.products)}
                  </span>
                </div>
              </div>

              {/* Products in this section */}
              {section.products.map((product, productIndex) => (
                <div key={product.id}>
                  <div className="py-4 border-t border-b border-[#BFBEBE]">
                    <div className="flex justify-between">
                      <div className="flex gap-x-10">
                        <Image
                          src={DetailsImage || "/placeholder.svg"}
                          alt="Product Image"
                          height={100}
                          width={100}
                          className="h-[100px] w-[100px] rounded-lg"
                        />
                        <div className="flex flex-col gap-y-1">
                          <h3 className="text-[20px] font-semibold text-[#13141D]">
                            {product.selectedProduct}
                          </h3>
                          <h4 className="text-[20px] font-normal text-[#4B4A47] flex gap-x-5 items-center">
                            {product.shopName}
                            <span className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                              View Shop
                            </span>
                          </h4>
                          <div className="flex gap-x-[2px]">
                            {[...Array(product.rating || 5)].map((_, i) => (
                              <FaRegStar key={i} className="fill-green-950" />
                            ))}
                          </div>
                          <div className="flex gap-x-2 items-center">
                            <LocationSvg1 />
                            <h5 className="text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                              {product.shopLocation}
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
                            value={product.selectedProduct}
                            onChange={e =>
                              handleProductChange(
                                sectionIndex,
                                product.id,
                                e.target.value
                              )
                            }
                            className="px-4 py-2 rounded-[10px] border border-[#A7A39C] w-[500px]"
                            disabled={!section.isOwnShop}
                          >
                            {getProductOptions(section.isOwnShop).map(
                              option => (
                                <option
                                  key={option}
                                  value={option}
                                  className="font-semibold text-[16px] text-[#13141D]"
                                >
                                  {option}
                                </option>
                              )
                            )}
                          </select>
                          <div className="px-4 py-2 rounded-[10px] border border-[#A7A39C] flex gap-x-3">
                            <button
                              onClick={() =>
                                handleDecrement(sectionIndex, product.id)
                              }
                              className="font-bold text-[20px] text-[#000] cursor-pointer"
                              disabled={!section.isOwnShop}
                            >
                              -
                            </button>
                            <button className="font-bold text-[20px] text-[#000]">
                              {product.count}
                            </button>
                            <button
                              onClick={() =>
                                handleIncrement(sectionIndex, product.id)
                              }
                              className="font-bold text-[20px] text-[#000] cursor-pointer"
                              disabled={!section.isOwnShop}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <h5 className="flex gap-x-2 text-[16px] font-semibold text-[#4B4A47] items-center justify-end py-2">
                          Total amount:{" "}
                          <span className="text-[20px]">
                            ${product.price * product.count}
                          </span>
                        </h5>
                        <div className="flex gap-x-5 items-center justify-end">
                          {section.isOwnShop && (
                            <div
                              className="flex gap-x-2 items-center cursor-pointer hover:opacity-70 transition-opacity"
                              onClick={() =>
                                addProductToSection(sectionIndex, product.id)
                              }
                            >
                              <h6 className="text-[16px] font-semibold text-[#A7A39C]">
                                +
                              </h6>
                              <p className="text-[16px] font-semibold text-[#A7A39C]">
                                Add another product/service
                              </p>
                            </div>
                          )}
                          {section.isOwnShop && section.products.length > 1 && (
                            <button
                              onClick={() =>
                                removeProduct(sectionIndex, product.id)
                              }
                              className="text-[16px] font-semibold text-red-500 hover:opacity-70 transition-opacity"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {sectionIndex === 0 && (
                <div className="flex gap-x-5 items-center  my-8">
                  <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                  <div className="inline-block bg-white">
                    <Reload className="cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out" />
                  </div>
                  <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="text-[#13141D] font-semibold text-[18px] mb-4">
              Trade Summary
            </h4>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-[#4B4A47] mb-2">
                  Their Offer Value
                </h5>
                <p className="text-[24px] font-bold text-[#13141D]">
                  ${calculateSectionTotal(tradeSections[0].products)}
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-[#4B4A47] mb-2">
                  Your Counter Value
                </h5>
                <p className="text-[24px] font-bold text-[#13141D]">
                  ${calculateSectionTotal(tradeSections[1].products)}
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded border">
              <h6 className="font-semibold text-[#4B4A47] mb-2">
                Message with Counter Offer
              </h6>
              <textarea
                placeholder="Explain your counter offer and help both sides negotiate fairly..."
                className="w-full p-3 border border-[#A7A39C] rounded-lg resize-none"
                rows={4}
              />
            </div>
          </div>

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
      </TradeLayout>
    </div>
  );
};

export default page;
