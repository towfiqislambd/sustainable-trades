import Container from "@/Components/Common/Container";
import React from "react";

const MagicMarkers = () => {
  return (
    <section className="">
      <Container>
        <div className="h-[500px] relative">
          {/* Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902653997918!2d90.390686!3d23.750867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91d0e4a30af%3A0x93dd84c6b9c5f8b1!2sDhaka!5e0!3m2!1sen!2sbd!4v1691261744101!5m2!1sen!2sbd"
            loading="lazy"
            className="h-full w-full border-0"
          ></iframe>

          {/* Content */}
          <div className="absolute top-1/2 -translate-y-1/2 right-20 w-[560px] bg-[rgba(246,245,240,0.95)] rounded-2xl px-8 py-12 shadow-[0_3px_8px_0_rgba(0,0,0,0.09),_0_3px_12px_0_rgba(0,0,0,0.10)]">
            <h3 className="text-3xl font-semibold text-secondary-black mb-5">
              Find Your Local Magic Makers
            </h3>

            <p className="text-secondary-black text-lg mb-6">
              Use our Geo-locator to find local food, businesses, artisans, and
              services making a positive impact. Enter your zip code to discover
              nearby offerings.
            </p>

            <div className="flex gap-5 items-center">
              <input
                type="text"
                placeholder="Zipcode"
                className="outline-none border-2 border-primary-green px-3 py-3 rounded w-[416px]"
              />
              <button className="shrink-0 border-2 border-primary-green text-accent-white bg-primary-green font-semibold px-10 py-3 rounded cursor-pointer">
                Explore
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MagicMarkers;
