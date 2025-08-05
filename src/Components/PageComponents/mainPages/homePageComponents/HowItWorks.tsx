import React from "react";
import Container from "@/Components/Common/Container";
import { WOneSvg, WThreeSvg, WTwoSvg } from "@/Components/Svg/SvgContainer";
const data = [
  {
    id: 1,
    title: "Buy",
    description:
      "Explore local goods and services sorted by geographical proximity. Coordinate pickup or shipping with sellers.",
    icon: <WOneSvg />,
  },
  {
    id: 2,
    title: "Sell",
    description:
      "Got sustainable goods or badass skills? Join Sustainable Trades, get unlimited listings! Members pay an annual fee and keep 100% of their cash sales.",
    icon: <WTwoSvg />,
  },
  {
    id: 3,
    title: "Trade",
    description:
      "Members can barter and trade for quality goods and services, how fun!",
    icon: <WThreeSvg />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="section_title text-center">How It Works</h2>
        <div className="grid grid-cols-3 gap-10 text-center mb-10">
          {data?.map(item => (
            <div key={item?.id} className="space-y-3">
              <p className="size-40 mx-auto">{item?.icon}</p>
              <h3 className="text-3xl font-semibold text-primary-green">
                {item?.title}
              </h3>
              <p className="text-lg text-primary-green">{item?.description}</p>
            </div>
          ))}
        </div>

        <button className="w-[416px] hover:bg-primary-green hover:text-white duration-500 transition-all mx-auto block border text-lg text-secondary-black cursor-pointer py-4 rounded-lg shadow-lg hover:scale-105">
          View Membership Plans
        </button>
      </Container>
    </section>
  );
};

export default HowItWorks;
