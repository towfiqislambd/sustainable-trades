"use client";
import moment from "moment";
import Link from "next/link";
import echo from "@/lib/echo";
import Image from "next/image";
import useAuth from "@/Hooks/useAuth";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { SearchSvg } from "@/Components/Svg/SvgContainer";
import { getAllConversation } from "@/Hooks/api/chat_api";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { ConversationCardSkeleton } from "@/Components/Loader/Loader";
import LocalPickup from "@/Components/PageComponents/dashboardPages/messageComponents/LocalPickup";

type Participant = {
  id: number;
  participant_id: number;
  participant: {
    first_name: string;
    last_name: string;
    avatar: string;
  };
};

type conversationItem = {
  id: number;
  unread_message_count: number;
  participants: Participant[];
  last_message: {
    message: string;
    message_type: string;
    created_at: string;
  };
};

const page = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("");
  const { data: allConversation, isLoading } = getAllConversation({
    name: search,
    sent: activeTab === "sent" ? "sent" : "",
    unread: activeTab === "unread" ? "unread" : "",
  });

  const tabs = [
    { id: 1, label: "Inbox", path: "" },
    { id: 2, label: "Sent", path: "sent" },
    { id: 3, label: "Unread", path: "unread" },
    { id: 4, label: "Local Pickup", path: "local pickup" },
  ];

  // Pusher Config
  useEffect(() => {
    if (!echo || !user?.id) return;

    echo
      .private(`conversation-channel.${user?.id}`)
      .listen("ConversationEvent", (e: any) => {
        console.log("🔔 New message event received from main:", e);
        if (+e?.receiverId === +user?.id) {
          queryClient.invalidateQueries(["get-all-conversation"] as any);
        }
      });
  }, [echo, user?.id]);

  return (
    <>
      {/* Upper Part */}
      <div className="flex items-center justify-between mb-7">
        <h3 className="text-3xl text-secondary-black font-semibold">
          Messages
        </h3>

        <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-1 md:py-2 rounded-[6px] w-full md:w-[280px]">
          <SearchSvg />
          <input
            type="text"
            placeholder="Search Messages..."
            className="w-full border-none outline-none"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 items-center mb-10">
        {tabs?.map(item => (
          <button
            key={item?.id}
            onClick={() => setActiveTab(item?.path)}
            className={`font-semibold cursor-pointer border-b-2 px-2 text-lg ${
              activeTab === item?.path
                ? "text-secondary-black border-secondary-black"
                : "text-light-green border-transparent"
            }`}
          >
            {item?.label}
          </button>
        ))}
      </div>

      {/* Message Body */}
      <div>
        {activeTab === "local pickup" ? (
          <LocalPickup />
        ) : isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <ConversationCardSkeleton key={index} />
          ))
        ) : allConversation?.data?.conversations?.length > 0 ? (
          allConversation?.data?.conversations?.map(
            (conversation: conversationItem) => (
              <Link
                key={conversation?.id}
                href={`/dashboard/${
                  user?.role === "vendor" &&
                  user?.membership?.membership_type === "pro"
                    ? "pro"
                    : user?.role === "vendor" &&
                      user?.membership?.membership_type === "basic"
                    ? "basic"
                    : "customer"
                }/messages/${conversation?.participants[0]?.participant_id}`}
                className="border-b-2 border-gray-200 py-7 cursor-pointer duration-300 transition-all hover:bg-gray-100 px-5 flex justify-between items-center"
              >
                {/* Left */}
                <div className="flex gap-3 items-center">
                  <figure className="size-16 rounded-full border border-gray-100 grid place-items-center relative bg-accent-red">
                    {conversation?.participants[0]?.participant?.avatar ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SITE_URL}/${conversation?.participants[0]?.participant?.avatar}`}
                        fill
                        alt="author_img"
                        className="size-full rounded-full"
                      />
                    ) : (
                      <span className="text-xl font-bold text-white">
                        {conversation?.participants[0]?.participant?.first_name?.at(
                          0
                        )}
                      </span>
                    )}
                  </figure>

                  <div>
                    <h3 className="text-xl font-bold text-secondary-black mb-1">
                      {conversation?.participants[0]?.participant?.first_name}
                      {conversation?.participants[0]?.participant?.last_name}
                    </h3>

                    <p className="text-gray-500">
                      {conversation?.last_message?.message?.length > 100
                        ? conversation?.last_message?.message?.slice(0, 100) +
                          "...."
                        : conversation?.last_message?.message}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="shrink-0 flex flex-col items-end gap-2">
                  <p className="font-semibold text-[#1AA884]">
                    {moment(conversation?.last_message?.created_at).format(
                      "ll"
                    )}
                  </p>

                  <p className="bg-[#1AA884] text-white font-bold px-2 text-sm py-1 rounded grid place-items-center">
                    {conversation?.unread_message_count}
                  </p>
                </div>
              </Link>
            )
          )
        ) : (
          <div className="pt-20 flex justify-center items-center flex-col gap-1">
            <IoChatboxEllipsesOutline className="text-5xl text-gray-700" />
            <p className="text-gray-700 text-lg font-semibold">
              No Conversation Found!!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
