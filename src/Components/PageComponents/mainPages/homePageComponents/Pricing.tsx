"use client";
import Image from "next/image";
import React, { useState } from "react";
import Container from "@/Components/Common/Container";

type benefitItem = {
  id: string;
  benefit_name: string;
  benefit_description: string;
  benefit_icon: string;
};

type pricingData = {
  id: number;
  name: string;
  description: string;
  price: string;
  interval: string;
  subscription_benefit: benefitItem[];
};

interface PricingProps {
  description: string;
  button1: string;
  button2: string;
  data?: pricingData[];
}

const Pricing = ({ data, description, button1, button2 }: PricingProps) => {
  const [activeTab, setActiveTab] = useState<string>("monthly");

  return (
    <section id="membership_plan" className="py-20">
      <Container>
        <h2 className="section_title text-center !mb-7">Plans & Benefits</h2>

        <p className="text-center text-xl text-[#4B4A47] mb-7">{description}</p>

        {/* Tabs */}
        <div className="flex gap-5 p-3 rounded-xl shadow w-[350px] mx-auto bg-primary-green mb-14">
          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-5 py-2.5 rounded-lg cursor-pointer shadow font-semibold ${
              activeTab === "monthly"
                ? "text-primary-green bg-accent-white"
                : "text-accent-white bg-transparent"
            }`}
          >
            {button1}
          </button>

          <button
            onClick={() => setActiveTab("yearly")}
            className={`px-5 py-2.5 rounded-lg cursor-pointer shadow font-semibold ${
              activeTab === "yearly"
                ? "text-primary-green bg-accent-white"
                : "text-accent-white bg-transparent"
            }`}
          >
            {button2}
          </button>
        </div>

        {/* Pricing Plan */}
        <div className="flex gap-10 justify-center">
          {data?.map(
            (
              { id, name, description, price, interval, subscription_benefit },
              idx
            ) => (
              <div
                key={id}
                className={`border border-primary-green shadow rounded-2xl p-6 w-[400px] flex flex-col justify-between ${
                  idx === 1 && "bg-[#EDF3F1]"
                }`}
              >
                <div>
                  <p className="size-12 rounded-full border">Icon</p>

                  <h3 className="py-3 text-2xl font-semibold text-secondary-black">
                    {name}
                  </h3>

                  <p className="text-secondary-gray mb-7">{description}</p>

                  <div className="flex gap-2 items-end">
                    <h2 className="text-4xl font-semibold text-secondary-black">
                      ${price}
                    </h2>

                    <p className="capitalize">/ {interval}</p>
                  </div>

                  <hr className="my-5 text-gray-500" />

                  <div className="space-y-5 mb-10">
                    {subscription_benefit?.map(
                      ({
                        id,
                        benefit_name,
                        benefit_description,
                        benefit_icon,
                      }) => (
                        <div key={id} className="flex gap-3 items-center">
                          <figure className="size-10 rounded-full bg-[#B0DEDB] grid place-items-center relative">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_SITE_URL}/${benefit_icon}`}
                              alt="image"
                              fill
                            />
                          </figure>

                          <div>
                            <h4 className="text-secondary-black font-semibold">
                              {benefit_name}
                            </h4>
                            <p className="text-secondary-gray text-[15px]">
                              {benefit_description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <button
                  className={`w-full block duration-500 transition-all text-lg cursor-pointer py-3 border-2 border-primary-green font-semibold rounded-lg shadow-lg hover:scale-105 ${
                    idx === 0
                      ? "text-primary-green hover:bg-primary-green hover:text-accent-white"
                      : "text-accent-white hover:text-primary-green bg-primary-green hover:bg-transparent"
                  }`}
                >
                  Choose {name}
                </button>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
