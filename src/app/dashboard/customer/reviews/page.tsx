"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import DashBoardHeader from "@/Components/Common/DashBoardHeader";

const Page = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  console.log(rating);

  return (
    <>
      <DashBoardHeader heading="Tell Us What You Think!" placeholder="Search" />
      <div className="mt-10">
        <div className="flex gap-x-1">
          {[1, 2, 3, 4, 5].map(star => (
            <FaStar
              key={star}
              className={`size-[30px] transition-all cursor-pointer 
              ${
                (rating || hover) >= star ? "fill-amber-300" : "fill-gray-300"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
