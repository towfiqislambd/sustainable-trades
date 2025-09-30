"use client";
import React from "react";
import Container from "@/Components/Common/Container";
import PaymentOptions from "@/Components/PageComponents/mainPages/cartPageComponents/PaymentOptions";
import ShopLocation from "@/Components/PageComponents/mainPages/cartPageComponents/ShopLocation";
import SimilarItems from "@/Components/PageComponents/mainPages/cartPageComponents/SimilarItems";
import { getProductCart } from "@/Hooks/api/cms_api";

const page = () => {
  const { data: cartData, isLoading } = getProductCart();

  return (
    <section className="my-10">
      <Container>
        <PaymentOptions data={cartData?.data} />
        <SimilarItems />
        <ShopLocation />
      </Container>
    </section>
  );
};

export default page;
