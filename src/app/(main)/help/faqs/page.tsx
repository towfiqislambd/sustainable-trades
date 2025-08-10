"use client";
import Banner from "@/Components/Common/Banner";
import React, { useState } from "react";
import faqBg from "@/Assets/faq.png";
import Container from "@/Components/Common/Container";
import HelpUsTab from "@/Components/Common/HelpUsTab";

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

const Page = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(prev => (prev === id ? null : id));
  };

  return (
    <>
      <Banner title="FAQs" bgImg={faqBg.src} />
      <section className="mb-40 mt-20">
        <Container>
          <div className="flex items-start gap-14">
            {/* Left - Tabs */}
            <HelpUsTab />

            {/* Right */}
            <div className="grow">
              {data?.map(item => (
                <div
                  key={item.id}
                  className="border-b-2 border-gray-200 py-4 cursor-pointer"
                  onClick={() => toggleAccordion(item.id)}
                >
                  {/* Question */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-secondary-black">
                      {item.question}
                    </h3>
                    <span className="text-2xl text-secondary-black">
                      {activeAccordion === item.id ? "⨯" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  <div
                    className={`px-3 transition-all duration-300 overflow-hidden ${
                      activeAccordion === item.id
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-secondary-gray text-[17px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
