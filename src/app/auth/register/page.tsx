"use client";
import RegisterForm from "@/Components/PageComponents/authPages/RegisterForm";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
};

export default page;
