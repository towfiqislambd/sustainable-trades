import React from "react";
import Container from "./Container";

type BannerProps = {
  title: string;
  bgImg: string;
};

const Banner = ({ title, bgImg }: BannerProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-[600px] flex justify-center items-center bg-no-repeat bg-center bg-cover object-cover bg-black/20 bg-blend-overlay"
    >
      <Container>
        <h2 className="text-6xl text-accent-white capitalize text-center">
          {title}
        </h2>
      </Container>
    </section>
  );
};

export default Banner;
