import React from "react";

const ShopLocation = () => {
  return (
    <section className="mb-10">
      <h3 className="section_sub_title">
        Current Shop Location - See where your order is...
      </h3>

      <div className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902653997918!2d90.390686!3d23.750867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91d0e4a30af%3A0x93dd84c6b9c5f8b1!2sDhaka!5e0!3m2!1sen!2sbd!4v1691261744101!5m2!1sen!2sbd"
          loading="lazy"
          className="h-full w-full border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default ShopLocation;
