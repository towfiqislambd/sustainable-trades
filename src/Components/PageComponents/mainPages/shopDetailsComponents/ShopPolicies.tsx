import Container from "@/Components/Common/Container";
import { PaypalSvg } from "@/Components/Svg/SvgContainer";
import React from "react";

const ShopPolicies = () => {
  return (
    <section id="Shop_policies" className="mt-16">
      <Container>
        <h2 className="section_sub_title !mb-5">Shop Policies</h2>

        <h3 className="text-sm sm:text-base md:text-lg  font-semibold text-secondary-black mb-2">
          Accepted Payment Methods
        </h3>
        <PaypalSvg />

        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-secondary-black mt-5 mb-1">
          Returns/Exchanges
        </h3>
        <div className="text-secondary-gray text-xs sm:text-sm md:text-base">
          View individual listings for return/exchange information
        </div>
      </Container>
    </section>
  );
};

export default ShopPolicies;
