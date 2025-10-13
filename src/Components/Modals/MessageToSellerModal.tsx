"use client";
import React from "react";
import {
  BackSvg,
  LocationTwoSvg,
  MessageSvg,
} from "@/Components/Svg/SvgContainer";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { useSendMessage } from "@/Hooks/api/chat_api";

type messageProps = {
  id: number | null;
  shopInfo: {
    product_name: string;
    product_price: string;
    shop: {
      shop_name: string;
      address: {
        address_line_1: string;
      };
    };
  };
  setMsgOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface MessageFormData {
  message: string;
}

const MessageToSellerModal = ({ id, shopInfo, setMsgOpen }: messageProps) => {
  const { mutate: sendMessageMutation, isPending } = useSendMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MessageFormData>();

  const onSubmit = async (data: MessageFormData) => {
    const payload = {
      receiver_id: id,
      ...data,
    };

    await sendMessageMutation(payload, {
      onSuccess: (data: any) => {
        if (data?.success) {
          toast.success(data?.message);
          reset();
          setMsgOpen(false);
        }
      },
    });
  };

  return (
    <>
      <h3 className="text-light-green font-semibold text-lg mb-2">
        Trade Offer
      </h3>

      {/* Shop Name */}
      <h4 className="text-2xl font-semibold text-secondary-black mb-2">
        {shopInfo?.shop?.shop_name}
      </h4>

      {/* Shop Review */}
      <div className="flex gap-1 items-center mb-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <FaStar key={index} className="text-primary-green text-sm" />
        ))}
      </div>

      {/* Shop Location */}
      <div className="flex gap-1 items-center">
        <LocationTwoSvg />
        <span className="text-light-green">
          {shopInfo?.shop?.address?.address_line_1}
        </span>
      </div>

      <hr className="my-3 text-gray-300" />

      <div className="flex justify-between items-center mb-2 text-lg font-semibold text-secondary-black">
        {/* Product Name */}
        <p>{shopInfo?.product_name}</p>

        {/* Product Price */}
        <p>${shopInfo?.product_price}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="msg"
            className="text-light-green font-semibold mb-2 block"
          >
            Message to the Seller
          </label>

          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className={`form-input`}
            rows={3}
            placeholder="Type message here..."
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message as string}
            </p>
          )}
        </div>

        <div className="flex gap-4 items-center">
          <button
            type="button"
            onClick={() => setMsgOpen(false)}
            className="primary_btn flex-1 !flex gap-2 items-center justify-center"
          >
            <BackSvg />
            <span>Go back</span>
          </button>

          <button
            type="submit"
            disabled={isPending}
            className={`primary_btn flex-1 !flex gap-2 items-center justify-center ${
              isPending
                ? "!cursor-not-allowed opacity-85 hover:!bg-primary-green hover:!text-white"
                : "cursor-pointer"
            }`}
          >
            {isPending ? (
              <span className="flex gap-2 items-center justify-center">
                <CgSpinnerTwo className="animate-spin text-xl" />
                <span>Please wait....</span>
              </span>
            ) : (
              <span className="flex gap-3 items-center">
                <MessageSvg />
                <span>Send message</span>
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageToSellerModal;
