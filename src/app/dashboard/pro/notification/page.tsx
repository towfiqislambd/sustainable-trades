"use client";
import Image from "next/image";
import React from "react";
import { useNotification } from "@/Hooks/api/dashboard_api";

const page = () => {
  const { data: notificationsData, isLoading, error } = useNotification();

  if (isLoading) {
    return (
      <div className="bg-[#FFF] rounded-lg w-full mx-auto shadow-2xl p-5">
        Loading notifications...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FFF] rounded-lg w-full mx-auto shadow-2xl p-5">
        Error loading notifications.
      </div>
    );
  }

  const notifications = notificationsData?.data || [];

  const formatTimeAgo = (createdAt: string | Date): string => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInMinutes = Math.floor(
      (now.getTime() - created.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}h`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d`;
  };

  const renderAvatar = (user: any) => {
    if (user.avatar) {
      return (
        <Image
          src={user.avatar}
          alt={user.name || "Profile"}
          height={500}
          width={500}
          className="rounded-full w-[50px] h-[50px] md:h-[80px] md:w-[80px] object-cover"
        />
      );
    }

    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "?";
    return (
      <div className="rounded-full w-[50px] h-[50px] md:h-[70px] md:w-[70px] bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
        {firstLetter}
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#FFF] rounded-lg w-full mx-auto shadow-2xl">
        <div className="border-b border-[#E5E5E5]">
          <h3 className="text-[30px] md:text-[40px] font-semibold text-[#000] flex items-center gap-x-2 p-3 md:p-5">
            Notifications
          </h3>
        </div>
        {notifications.length === 0 ? (
          <div className="p-5 text-center text-[#969696]">No notifications</div>
        ) : (
          notifications.map((notification: any) => {
            const { data: notifData, created_at, user } = notification;
            const timeAgo = formatTimeAgo(created_at);

            return (
              <div
                key={notification.id}
                className="border-b border-[#E5E5E5] flex justify-between p-2.5 md:p-5 items-center"
              >
                <div className="flex gap-2.5 md:gap-x-5 items-center">
                  {renderAvatar(user)}
                  <div className="">
                    <h3 className="text-[16px] font-bold text-[#000]">
                      {notifData.subject}
                    </h3>
                    <h4 className="text-[16px] font-normal text-[#000]">
                      {notifData.message}
                    </h4>
                  </div>
                </div>
                <p className="text-[#969696] text-[13px] font-semibold">
                  {timeAgo}
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default page;
