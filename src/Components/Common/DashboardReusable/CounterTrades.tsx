"use client";
import { useRouter, useSearchParams } from "next/navigation";
import CounterBottom from "./CounterBottom";
import CounterProductlist from "./CounterProductlist";
import { useEffect, useState } from "react";
import Image from "next/image";
import DetailsImage from "../../../Assets/e2.jpg";
import { FaRegStar } from "react-icons/fa";
import { LocationSvg1, Reload } from "@/Components/Svg/SvgContainer";
import {
  useSingleTradeOffer,
  useTradeShopProduct,
} from "@/Hooks/api/dashboard_api";
import useAuth from "@/Hooks/useAuth";
import { totalAmount } from "@/helper/useTotalAmount";
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
const CounterTrades = ({ id }: any) => {
  const { data } = useSingleTradeOffer(id);
  const [selectedProducts, setSelectedProducts] = useState<
    Record<number, number>
  >({});
  console.log(data?.data?.sender?.shop_info?.address?.address_line_1);

  const { user } = useAuth();

  // console.log(data?.data?.items?.find((item: any) => item?.type === "offered"));

  console.log(user);

  //login user request a product
  const requestedProduct = data?.data?.items?.find(
    (item: any) => item?.type === "requested"
  );
  // Some one offered me a product
  const offerProduct = data?.data?.items?.find(
    (item: any) => item?.type === "offered"
  );

  console.log(offerProduct?.product?.shop?.id);

  console.log(requestedProduct);

  const { data: offerShopProduct } = useTradeShopProduct(
    offerProduct?.product?.shop?.id
  );

  const { data: requestedShopProduct } = useTradeShopProduct(
    user?.shop_info?.id
  );
  console.log(requestedShopProduct);

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
  const router = useRouter();

  useEffect(() => {
    if (data?.data?.items) {
      const initialSelections: Record<number, number> = {};
      data.data.items.forEach((item: any) => {
        initialSelections[item.id] = item?.product?.id; // key = itemId, value = productId
      });
      setSelectedProducts(initialSelections);
    }
  }, [data]);

  const handleSelectChange = (itemId: number, newProductId: number) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [itemId]: newProductId,
    }));
  };

  return (
    <div className="mb-16">
      <h3 className="text-[#13141D] font-semibold text-[20px] pb-4">
        Counter Offer
      </h3>

      <div>
        {/* Section Header */}
        <div className="mb-6"></div>
        {/* Products in this section */}
        {data?.data?.items?.map(
          (product: any, i: any) => (
            console.log("product", product),
            (
              <div key={product.id}>
                <div className="py-4 border-t border-b border-[#BFBEBE]">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex gap-x-5 2xl:gap-x-10">
                      {product?.product?.images?.map((img: any, i: number) => (
                        <Image
                          key={i}
                          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${img?.image}`}
                          alt={product?.product?.product_name}
                          height={100}
                          width={100}
                          className="h-[100px] object-cover rounded-md"
                        />
                      ))}
                      <div className="flex flex-col gap-y-1">
                        <h3 className="text-base lg:text-[20px] font-semibold text-[#13141D]">
                          {product.product?.product_name}
                        </h3>
                        <h4 className="text-[14px] lg:text-[20px] font-normal text-[#4B4A47] flex flex-col 2xl:flex-row gap-x-5 2xl:items-center">
                          {product?.product?.shop?.shop_name}
                          <span className="text-[12px] lg:text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
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
                          <h5 className="text-[12px] lg:text-[14px] underline cursor-pointer text-[#A7A39C] font-lato">
                            {product?.product?.shop_info_id ===
                              data?.data?.sender?.shop_info?.id &&
                              data?.data?.sender?.shop_info?.address
                                ?.address_line_1}

                            {product?.product?.shop_info_id ===
                              data?.data?.receiver?.shop_info?.id &&
                              data?.data.receiver?.shop_info?.address
                                ?.address_line_1}
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
                          value={selectedProducts[product.id] || ""}
                          onChange={(e) =>
                            handleSelectChange(
                              product.id,
                              Number(e.target.value)
                            )
                          }
                          className="px-4 py-2 rounded-[10px] border border-[#A7A39C] w-full sm:w-[300px] xl:w-[500px]"
                        >
                          {product?.product?.shop_info_id ===
                            data?.data?.sender?.shop_info?.id &&
                            requestedShopProduct?.data?.map((p: any) => (
                              <option key={p?.id} value={p?.id}>
                                {p?.product_name}
                              </option>
                            ))}
                          {product?.product?.shop_info_id ===
                            data?.data?.receiver?.shop_info?.id &&
                            offerShopProduct?.data?.map((p: any) => (
                              <option key={p?.id} value={p?.id}>
                                {p?.product_name}
                              </option>
                            ))}
                        </select>
                        <div className="px-4 py-2 rounded-[10px] border border-[#A7A39C] flex gap-x-3">
                          <button
                            // onClick={() =>
                            //   handleDecrement(sectionIndex, product.id)
                            // }
                            className="font-bold text-[20px] text-[#000] cursor-pointer"
                          >
                            -
                          </button>
                          <button className="font-bold text-[20px] text-[#000]">
                            {/* {product.count} */}
                            {product?.quantity}
                          </button>
                          <button
                            // onClick={() =>
                            //   handleIncrement(sectionIndex, product.id)
                            // }
                            className="font-bold text-[20px] text-[#000] cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <h5 className="flex gap-x-2 text-[16px] font-semibold text-[#4B4A47] items-center justify-end py-2">
                        Total amount:{" "}
                        <span className="text-[20px]">
                          $
                          {totalAmount(
                            product?.quantity,
                            product?.product?.product_price
                          )}
                        </span>
                      </h5>
                      <div className="flex gap-x-5 items-center justify-end">
                        <div
                          className="flex gap-x-2 items-center cursor-pointer hover:opacity-70 transition-opacity"
                          // onClick={() =>
                          //   addProductToSection(sectionIndex, product.id)
                          // }
                        >
                          <h6 className="text-[16px] font-semibold text-[#A7A39C]">
                            +
                          </h6>
                          <p className="text-[16px] font-semibold text-[#A7A39C]">
                            Add another product/service
                          </p>
                        </div>
                        {/* {section.products.length > 1 && (
                        <button
                          onClick={() =>
                            removeProduct(sectionIndex, product.id)
                          }
                          className="text-[16px] font-semibold text-red-500 hover:opacity-70 transition-opacity"
                        >
                          Remove
                        </button>
                      )} */}
                      </div>
                    </div>
                  </div>
                </div>
                {i === 0 && (
                  <div className="flex gap-x-5 items-center  my-8">
                    <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                    <div className="inline-block bg-white">
                      <Reload className="cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out" />
                    </div>
                    <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                  </div>
                )}
              </div>
            )
          )
        )}
      </div>

      <div className="mt-4 md:mt-8 p-3 md:p-6 bg-gray-50 rounded-lg">
        <h4 className="text-[#13141D] font-semibold text-[18px] mb-4">
          Trade Summary
        </h4>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div>
            <h5 className="font-semibold text-[#4B4A47] mb-2">
              Their Offer Value
            </h5>
            <p className="text-[24px] font-bold text-[#13141D]">
              {/* ${calculateSectionTotal(tradeSections[0].products)} */}
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-[#4B4A47] mb-2">
              Your Counter Value
            </h5>
            <p className="text-[24px] font-bold text-[#13141D]">
              {/* ${calculateSectionTotal(tradeSections[1].products)} */}
            </p>
          </div>
        </div>
        <div className="mt-4 p-2 md:p-4 bg-white rounded border">
          <h6 className="font-semibold text-[#4B4A47] mb-2">
            Message with Counter Offer
          </h6>
          <textarea
            placeholder="Explain your counter offer and help both sides negotiate fairly..."
            className="w-full p-1.5 text-sm md:p-3 border border-[#A7A39C] rounded-lg resize-none"
            rows={4}
          />
        </div>
      </div>

      <div className="pb-6 border-b border-[#BFBEBE] rounded-lg">
        <div className="flex gap-2.5 lg:gap-5 flex-wrap mt-6">
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
                className={`relative cursor-pointer py-[5px] md:py-[10px] px-4 rounded-md font-lato font-semibold overflow-hidden
          hover:scale-110 duration-500 ease-in-out text-sm md:text-base
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
          Sending a message with a counter offer gives you a better chance of
          getting it accepted.
        </li>
      </div>
      <div className="mt-4">
        <CounterBottom />
      </div>
      <div className="">
        <CounterProductlist />
      </div>
    </div>
  );
};

export default CounterTrades;
