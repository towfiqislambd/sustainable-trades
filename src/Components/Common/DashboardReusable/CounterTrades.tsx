"use client";
import { useRouter } from "next/navigation";
import CounterBottom from "./CounterBottom";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { LocationSvg1, Reload } from "@/Components/Svg/SvgContainer";
import {
  useSingleTradeOffer,
  useTradeSendProduct,
  useTradeShopProduct,
} from "@/Hooks/api/dashboard_api";
import useAuth from "@/Hooks/useAuth";
import { toast } from "react-hot-toast";

const CounterTrades = ({ id }: any) => {
  const router = useRouter();
  const { user } = useAuth();
  const { data } = useSingleTradeOffer(id);

  const [selectedProducts, setSelectedProducts] = useState<
    Record<number, number>
  >({});
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [addonProducts, setAddonProducts] = useState<
    Record<number, { productId: number; quantity: number }[]>
  >({});
  const [message, setMessage] = useState("");

  const { data: offerShopProduct } = useTradeShopProduct(
    data?.data?.sender?.shop_info?.id
  );
  const { data: requestedShopProduct } = useTradeShopProduct(
    data?.data?.receiver?.shop_info?.id
  );

  // initialize products and quantities
  useEffect(() => {
    if (data?.data?.items) {
      const initialSelections: Record<number, number> = {};
      const initialQuantities: Record<number, number> = {};
      data.data.items.forEach((item: any) => {
        initialSelections[item.id] = item?.product?.id;
        initialQuantities[item.id] = item?.quantity || 1;
      });
      setSelectedProducts(initialSelections);
      setQuantities(initialQuantities);
    }
  }, [data]);

  // main product quantity
  const handleSelectChange = (itemId: number, newProductId: number) =>
    setSelectedProducts((prev) => ({ ...prev, [itemId]: newProductId }));

  const handleIncrement = (itemId: number) =>
    setQuantities((prev) => ({ ...prev, [itemId]: (prev[itemId] || 1) + 1 }));

  const handleDecrement = (itemId: number) =>
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) - 1),
    }));

  // addon
  const addAddonProduct = (itemId: number) => {
    setAddonProducts((prev) => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), { productId: 0, quantity: 1 }],
    }));
  };

  const updateAddonProduct = (
    itemId: number,
    index: number,
    productId: number
  ) =>
    setAddonProducts((prev) => ({
      ...prev,
      [itemId]: prev[itemId].map((a, i) =>
        i === index ? { ...a, productId } : a
      ),
    }));

  const updateAddonQuantity = (
    itemId: number,
    index: number,
    quantity: number
  ) =>
    setAddonProducts((prev) => ({
      ...prev,
      [itemId]: prev[itemId].map((a, i) =>
        i === index ? { ...a, quantity: Math.max(1, quantity) } : a
      ),
    }));

  // calculate totals (main + addons)
  const getItemTotal = (
    itemId: number,
    mainPrice: number,
    shopProducts: any[]
  ) => {
    const addonsTotal = (addonProducts[itemId] || []).reduce((sum, addon) => {
      const price =
        shopProducts?.find((p: any) => p.id === addon.productId)
          ?.product_price || 0;
      return sum + price * addon.quantity;
    }, 0);
    return (quantities[itemId] || 1) * mainPrice + addonsTotal;
  };

  // API mutation
  const { mutate, isLoading } = useTradeSendProduct(id);

  const handleSendCounter = () => {
    if (!data?.data) return;
    const receiverId = data?.data?.receiver?.id;

    const offeredItems: any[] = [];
    const requestedItems: any[] = [];

    data?.data?.items?.forEach((item: any) => {
      const selectedProductId = selectedProducts[item.id];
      const qty = quantities[item.id] || 1;
      const addons = addonProducts[item.id] || [];

      const mainItem = {
        product_id: selectedProductId,
        quantity: qty,
      };

      console.log("main item", mainItem);

      // include addons as additional trade items
      const allItems = [
        mainItem,
        ...addons.map((a) => ({
          product_id: a.productId,
          quantity: a.quantity,
        })),
      ];

      if (item.type === "offered") offeredItems.push(...allItems);
      if (item.type === "requested") requestedItems.push(...allItems);
    });

    const formData = new FormData();
    formData.append("receiver_id", receiverId);
    offeredItems.forEach((item, i) => {
      formData.append(
        `offered_items[${i}][product_id]`,
        String(item.product_id)
      );
      formData.append(`offered_items[${i}][quantity]`, String(item.quantity));
    });
    requestedItems.forEach((item, i) => {
      formData.append(
        `requested_items[${i}][product_id]`,
        String(item.product_id)
      );
      formData.append(`requested_items[${i}][quantity]`, String(item.quantity));
    });
    formData.append("message", message);

    mutate(formData);
  };

  const actionButtons = ["Go Back", "Cancel", "Send Counter"];
  const actionButtonStyles: Record<
    string,
    { bg?: string; border?: string; text: string }
  > = {
    "Go Back": { border: "border-gray-200", text: "text-black" },
    Cancel: { border: "border-gray-200", text: "text-black" },
    "Send Counter": { bg: "bg-[#E48872]", text: "text-white" },
  };

  return (
    <div className="mb-16">
      <h3 className="text-[#13141D] font-semibold text-[20px] pb-4">
        Counter Offer
      </h3>

      <div>
        {data?.data?.items?.map((product: any, i: any) => {
          const itemId = product.id;
          const shopProducts =
            product?.product?.shop_info_id === data?.data?.sender?.shop_info?.id
              ? requestedShopProduct?.data
              : offerShopProduct?.data;

          return (
            <div key={itemId}>
              <div className="py-4 border-t border-b border-[#BFBEBE]">
                <div className="flex flex-col md:flex-row justify-between">
                  {/* Left section */}
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
                      <h4 className="text-[14px] lg:text-[20px] text-[#4B4A47] flex flex-col 2xl:flex-row gap-x-5 2xl:items-center">
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

                  {/* Right section */}
                  <div className="flex flex-col gap-y-2 mt-2 md:mt-0">
                    <div className="flex items-end gap-2">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[#4B4A47] font-semibold text-[14px]">
                          Product/Service Trade
                        </h4>
                        <select
                          value={selectedProducts[itemId] || ""}
                          onChange={(e) =>
                            handleSelectChange(itemId, Number(e.target.value))
                          }
                          className="px-4 py-2 rounded-[10px] border border-[#A7A39C] w-full sm:w-[300px] xl:w-[500px]"
                        >
                          {shopProducts?.map((p: any) => (
                            <option key={p.id} value={p.id}>
                              {p.product_name} (${p.product_price})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Quantity */}
                      <div className="px-4 py-1 rounded-[10px] border border-[#A7A39C] flex gap-x-3">
                        <button
                          onClick={() => handleDecrement(itemId)}
                          className="font-bold text-[20px]"
                        >
                          -
                        </button>
                        <button className="font-bold text-[20px]">
                          {quantities[itemId] || product?.quantity || 1}
                        </button>
                        <button
                          onClick={() => handleIncrement(itemId)}
                          className="font-bold text-[20px]"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Addons */}
                    {(addonProducts[itemId] || []).map((addon, idx) => (
                      <div key={idx} className="flex gap-x-2 items-center mt-2">
                        <select
                          value={addon.productId}
                          onChange={(e) =>
                            updateAddonProduct(
                              itemId,
                              idx,
                              Number(e.target.value)
                            )
                          }
                          className="px-4 py-2 rounded-[10px] border border-[#A7A39C] w-full sm:w-[300px] xl:w-[500px]"
                        >
                          <option value="">Choose Addon</option>
                          {shopProducts?.map((p: any) => (
                            <option key={p.id} value={p.id}>
                              {p.product_name} (${p.product_price})
                            </option>
                          ))}
                        </select>

                        <div className="px-4 py-1 rounded-[10px] border border-[#A7A39C] flex gap-x-3">
                          <button
                            onClick={() =>
                              updateAddonQuantity(
                                itemId,
                                idx,
                                addon.quantity - 1
                              )
                            }
                            className="font-bold text-[20px]"
                          >
                            -
                          </button>
                          <button className="font-bold text-[20px]">
                            {addon.quantity}
                          </button>
                          <button
                            onClick={() =>
                              updateAddonQuantity(
                                itemId,
                                idx,
                                addon.quantity + 1
                              )
                            }
                            className="font-bold text-[20px]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Add addon */}
                    <div
                      className="flex gap-x-2 items-center cursor-pointer hover:opacity-70 transition-opacity mt-2"
                      onClick={() => addAddonProduct(itemId)}
                    >
                      <h6 className="text-[16px] font-semibold text-[#A7A39C]">
                        +
                      </h6>
                      <p className="text-[16px] font-semibold text-[#A7A39C]">
                        Add another product/service
                      </p>
                    </div>

                    {/* Total */}
                    <h5 className="flex gap-x-2 text-[16px] font-semibold text-[#4B4A47] items-center justify-end py-2">
                      Total amount:{" "}
                      <span className="text-[20px]">
                        $
                        {getItemTotal(
                          itemId,
                          product?.product?.product_price,
                          shopProducts
                        )}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

              {i === 0 && (
                <div className="flex gap-x-5 items-center my-8">
                  <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                  <div className="inline-block bg-white">
                    <Reload className="cursor-pointer transform transition-transform hover:rotate-180 duration-500 ease-in-out" />
                  </div>
                  <div className="bg-[#BFBEBE] w-full h-[1px]"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Message input */}
      <textarea
        placeholder="Add your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-300 rounded-md p-3 mt-6 w-full"
        rows={3}
      />

      {/* Action buttons */}
      <div className="pb-6 border-b border-[#BFBEBE] rounded-lg mt-6">
        <div className="flex gap-2.5 lg:gap-5 flex-wrap mt-6">
          {actionButtons.map((btn, i) => {
            const style = actionButtonStyles[btn];
            return (
              <button
                key={i}
                disabled={isLoading}
                onClick={() => {
                  if (btn === "Go Back") router.push(`/dashboard/pro/trades`);
                  else if (btn === "Cancel") toast("Counter canceled");
                  else if (btn === "Send Counter") handleSendCounter();
                }}
                className={`relative cursor-pointer py-[8px] px-6 rounded-md font-lato font-semibold overflow-hidden
                hover:scale-105 duration-300 ease-in-out text-sm md:text-base
                ${style.bg || ""} ${style.border || "border-2"} ${style.text}
                border-2 disabled:opacity-50`}
              >
                {btn}
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
    </div>
  );
};

export default CounterTrades;
