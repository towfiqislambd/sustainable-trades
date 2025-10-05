"use client";
import toast from "react-hot-toast";
import React, { useState } from "react";
import Container from "@/Components/Common/Container";
import { useRouter } from "next/navigation";

const MagicMarkers = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    if (!search) {
      return toast.error("Please enter location");
    }
    router.push(`/location/${search}`);
  };

  return (
    <section className="my-5 xl:my-10">
      <Container>
        <div className="h-[500px] relative">
          {/* Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902653997918!2d90.390686!3d23.750867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91d0e4a30af%3A0x93dd84c6b9c5f8b1!2sDhaka!5e0!3m2!1sen!2sbd!4v1691261744101!5m2!1sen!2sbd"
            loading="lazy"
            className="h-full w-full border-0"
          ></iframe>

          {/* Content */}
          <div className="absolute -bottom-50 left-1/2 -translate-x-1/2  md:bottom-auto md:left-auto md:right-20 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 w-[85%] md:w-[560px] bg-[rgba(246,245,240,0.95)] rounded-2xl p-5  md:px-8 md:py-12 shadow-[0_3px_8px_0_rgba(0,0,0,0.09),_0_3px_12px_0_rgba(0,0,0,0.10)]">
            <h3 className="lg:text-2xl text-lg md:text-xl xl:text-3xl font-semibold text-secondary-black mb-2.5 md:mb-5">
              Find Your Local Magic Makers
            </h3>

            <p className="text-secondary-black text-sm md:text-base xl:text-lg mb-6">
              Use our Geo-locator to find local food, businesses, artisans, and
              services making a positive impact. Enter your zip code to discover
              nearby offerings.
            </p>

            <div className="flex gap-2.5 md:gap-5 flex-col md:flex-row  md:items-center">
              <input
                type="text"
                placeholder="Denver, CO 80012"
                onChange={e => setSearch(e.target.value)}
                className="outline-none border-2 border-primary-green text-sm md:text-base p-1.5 md:p-3 rounded w-full md:w-[416px]"
              />
              <button
                onClick={handleSearch}
                className="shrink-0 border md:border-2 border-primary-green text-accent-white text-sm md:text-base bg-primary-green font-semibold md:py-3 px-10 py-1.5  rounded cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MagicMarkers;
