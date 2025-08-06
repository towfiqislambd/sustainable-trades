"use client";
import Container from "@/Components/Common/Container";
import React, { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<string>("Monthly Billing");

  return (
    <section className="py-20">
      <Container>
        <h2 className="section_title text-center !mb-7">Plans & Benefits</h2>

        <p className="text-center text-xl text-[#4B4A47] mb-7">
          No matter how you want to manage your shop, we got you covered!
        </p>

        {/* Tabs */}
        <div className="flex gap-5 p-3 rounded-xl shadow w-[350px] mx-auto bg-primary-green mb-10">
          <button
            onClick={() => setActiveTab("Monthly Billing")}
            className={`px-5 py-2.5 rounded-lg cursor-pointer shadow font-semibold ${
              activeTab === "Monthly Billing"
                ? "text-primary-green bg-accent-white"
                : "text-accent-white bg-transparent"
            }`}
          >
            Monthly Billing
          </button>

          <button
            onClick={() => setActiveTab("Annual Billing")}
            className={`px-5 py-2.5 rounded-lg cursor-pointer shadow font-semibold ${
              activeTab === "Annual Billing"
                ? "text-primary-green bg-accent-white"
                : "text-accent-white bg-transparent"
            }`}
          >
            Annual Billing
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
