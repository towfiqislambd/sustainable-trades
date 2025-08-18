import React from "react";
import Container from "@/Components/Common/Container";
import PaymentOptions from "@/Components/PageComponents/mainPages/cartPageComponents/PaymentOptions";
import ShopLocation from "@/Components/PageComponents/mainPages/cartPageComponents/ShopLocation";
import SimilarItems from "@/Components/PageComponents/mainPages/cartPageComponents/SimilarItems";

const page = () => {
  return (
    <section className="my-10">
      <Container>
        <PaymentOptions />
        <SimilarItems />
        <ShopLocation />
      </Container>
    </section>
  );
};

export default page;
