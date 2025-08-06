import Container from "@/Components/Common/Container";
import {
  MFourSvg,
  MOneSvg,
  MThreeSvg,
  MTwoSvg,
} from "@/Components/Svg/SvgContainer";
import React from "react";
const data = [
  {
    id: 1,
    icon: <MOneSvg />,
    title: "Encourage Individualism",
  },
  {
    id: 2,
    icon: <MTwoSvg />,
    title: "Support Local Businesses",
  },
  {
    id: 3,
    icon: <MThreeSvg />,
    title: "Shorten the Supple Chain",
  },
  {
    id: 4,
    icon: <MFourSvg />,
    title: "Strengthen Our Connection to the Earth",
  },
];

const OurMission = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="section_title text-center">Our Mission</h2>

        <div className="grid grid-cols-4 gap-6">
          {data?.map(item => (
            <div
              key={item?.id}
              className="bg-white shadow-[0_3px_8px_0_rgba(0,0,0,0.09),_0_3px_12px_0_rgba(0,0,0,0.10)] px-5 py-10 rounded-xl group relative overflow-hidden"
            >
              {/* overlay */}
              <div className="absolute bg-[#F0EEE9] leading-[150%] w-full h-full inset-0 duration-800 transition-transform rounded-xl text-lg text-primary-green flex justify-center items-center px-6 py-5 text-center -translate-x-full group-hover:translate-x-0">
                Each individual has the power to make a positive impact on the
                world. Encouraging individuals’ skills, passions, and services
                with intention strengthens the systemic change needed for our
                planet.
              </div>
              <p className="mb-14 size-36 mx-auto">{item?.icon}</p>
              <div className="flex gap-5 items-center">
                <p className="text-3xl font-semibold text-primary-green">
                  {item?.id}.
                </p>
                <p className="text-primary-green text-xl font-semibold">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
