import Container from "@/Components/Common/Container";
import React from "react";

const Subscribe = () => {
  return (
    <section className="pb-40">
      <Container>
        <h2 className="section_title text-center !mb-7">
          Stay Loop’d on the Eco-Front!
        </h2>

        <p className="text-center text-xl text-primary-green mb-8 max-w-[700px] mx-auto">
          Subscribe to our newsletter to receive weekly updates on the latest
          goods, trade opportunities, and sustainable living tips.
        </p>

        <div className="flex gap-5 justify-center items-center mb-8">
          <input
            type="text"
            placeholder="email@sustainabletrades.com"
            className="outline-none border-2 border-primary-green px-3 py-3 rounded-lg w-[400px]"
          />
          <button className="shrink-0 border-2 border-accent-red text-secondary-black bg-accent-red font-semibold px-10 py-3 rounded-lg cursor-pointer hover:scale-105 duration-300 transition-transform">
            Subscribe
          </button>
        </div>

        <p className="text-center text-lg text-primary-green max-w-[500px] mx-auto">
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </p>
      </Container>
    </section>
  );
};

export default Subscribe;
