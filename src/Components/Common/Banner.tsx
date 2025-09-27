"use client";
import React from "react";
import Image from "next/image";
import Container from "./Container";

type BannerProps = {
  title: string;
  bgImg: string;
};

const Banner = ({ title, bgImg }: BannerProps) => {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src={bgImg}
        alt={title}
        fill
        priority
        quality={90}
        className="object-cover object-center -z-10"
      />

      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <Container>
        <h2 className="relative z-10 text-4xl md:text-6xl font-semibold text-accent-white text-center capitalize">
          {title}
        </h2>
      </Container>
    </section>
  );
};

export default Banner;
