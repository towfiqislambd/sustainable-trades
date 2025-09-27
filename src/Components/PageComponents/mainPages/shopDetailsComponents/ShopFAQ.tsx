"use client";
import React, { useState } from "react";
import Container from "@/Components/Common/Container";
import { UpperArrowSvg } from "@/Components/Svg/SvgContainer";
const data = [
  {
    id: 1,
    question: "Augue in nibh urna volutpat mattis?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla cras porttitor ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potenti nibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    id: 2,
    question: "Tempus magna risus interdum ultricies sed urna?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla cras porttitor ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potenti nibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    id: 3,
    question: "Augue in nibh urna volutpat mattis?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla cras porttitor ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potenti nibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
];

const ShopFAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(prev => (prev === id ? null : id));
  };

  return (
    <section className="pt-12 pb-20">
      <Container>
        <h2 className="section_sub_title !mb-3">FAQs</h2>

        <div>
          {data?.map(item => (
            <div
              key={item.id}
              className="border-b-2 border-gray-200 py-2 md:py-4 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className=" md:text-lg lg:text-xl font-semibold text-primary-green">
                  {item.question}
                </h3>
                <span
                  className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-secondary-black duration-500 ${
                    activeAccordion === item.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <UpperArrowSvg />
                </span>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 overflow-hidden ${
                  activeAccordion === item.id
                    ? "max-h-auto opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-secondary-gray text-xs sm:text-sm md:text-base lg:text-[17px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShopFAQ;
