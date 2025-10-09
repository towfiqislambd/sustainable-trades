"use client";
import moment from "moment";
import Image from "next/image";
import React, { use, useState } from "react";
import { getSingleConversation } from "@/Hooks/api/chat_api";
import useAuth from "@/Hooks/useAuth";
import { MessageSkeleton } from "@/Components/Loader/Loader";

type messageItem = {
  id: number;
  sender_id: number;
  message: string;
  created_at: string;
  sender: {
    first_name: string;
    last_name: string;
    avatar: string;
  };
};

interface Props {
  params: Promise<{ id: number }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);
  const { user } = useAuth();
  const { data: singleConversation, isLoading: chatLoading } =
    getSingleConversation(id);
  const [message, setMessage] = useState<string>("");

  const handleSend = () => {
    alert("Hi");
  };

  return (
    <section className="h-full flex flex-col justify-between">
      {/* Chat Header */}
      <div className="border-t-2 border-b-2 py-3 border-gray-200 flex gap-5 items-center">
        {/* Author Image */}
        <figure className="size-14 rounded-full border border-gray-100 grid place-items-center relative bg-accent-red">
          {singleConversation?.data?.conversation?.participants[0]?.participant
            ?.avatar ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${singleConversation?.data?.conversation?.participants[0]?.participant?.avatar}`}
              fill
              alt="author_img"
              className="size-full rounded-full"
            />
          ) : (
            <span className="text-xl font-bold text-white">
              {singleConversation?.data?.conversation?.participants[0]?.participant?.first_name?.at(
                0
              )}
            </span>
          )}
        </figure>

        {/* Author Name */}
        <h3 className="text-xl font-bold text-secondary-black mb-1 flex gap-1 items-center">
          <span>
            {
              singleConversation?.data?.conversation?.participants[0]
                ?.participant?.first_name
            }
          </span>

          <span>
            {
              singleConversation?.data?.conversation?.participants[0]
                ?.participant?.last_name
            }
          </span>
        </h3>
      </div>

      {/* Chat Body */}
      <div className="grow bg-[#eff4ebd3] my-4 p-5 rounded space-y-3 overflow-y-auto chat-scrollbar">
        {chatLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <MessageSkeleton key={index} isSender={index % 2 === 0} />
            ))
          : singleConversation?.data?.messages?.map((msg: messageItem) => (
              <div
                key={msg?.id}
                className={`flex gap-3 ${
                  user?.id === msg?.sender_id ? "justify-end" : "justify-start"
                }`}
              >
                {user?.id !== msg?.sender_id && (
                  <figure className="size-11 rounded-full relative shrink-0 grid place-items-center bg-accent-red text-sm">
                    {msg?.sender?.avatar ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SITE_URL}/${msg?.sender?.avatar}`}
                        alt="author"
                        fill
                        className="size-full rounded-full"
                      />
                    ) : (
                      <span className="text-xl font-bold text-white">
                        {msg?.sender?.first_name?.at(0)}
                      </span>
                    )}
                  </figure>
                )}

                <p className="text-sm py-3 px-3.5 rounded-[6px] max-w-[550px] bg-accent-white shadow">
                  {msg?.message}
                  <br />

                  <span className="text-xs text-gray-500 text-end block mt-1">
                    {moment(msg?.created_at).format("LT")}
                  </span>
                </p>
              </div>
            ))}
      </div>

      {/* Chat Footer */}
      <form onSubmit={handleSend} className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type your message...."
          onChange={e => setMessage(e.target.value)}
          className="border border-gray-300 px-5 py-3 text-sm text-[#071431] w-full outline-0 rounded-lg"
        />

        <button
          type="submit"
          className={`bg-primary-green text-white cursor-pointer px-7 py-3 font-semibold rounded-lg shrink-0`}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default page;
