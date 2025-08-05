"use client";
import React from "react";
import Lottie from "lottie-react";
import notFoundAnimation from "@/Assets/404.json";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen text-2xl">
      <Lottie animationData={notFoundAnimation} loop={true} />
    </div>
  );
};


export default page;
