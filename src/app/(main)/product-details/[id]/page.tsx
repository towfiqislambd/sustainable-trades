import React, { use } from "react";
import Container from "@/Components/Common/Container";
import ProductGallery from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductGallery";
import ProductDescription from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductDescription";
import ProductReviews from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductReviews";
import MoreProduct from "@/Components/PageComponents/mainPages/productDetailsComponents/MoreProduct";
import SimilarShop from "@/Components/PageComponents/mainPages/productDetailsComponents/SimilarShop";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import ShopInfo from "@/Components/PageComponents/mainPages/productDetailsComponents/ShopInfo";

interface Props {
  params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Left */}
          <div className="space-y-16">
            {/* Thumbnail Gallery */}
            <ProductGallery />

            {/* Reviews */}
            <ProductReviews />
          </div>

          {/* Right */}
          <div className="space-y-16">
            {/* Product Description */}
            <ProductDescription />

            {/* Shop Info */}
            <ShopInfo />
          </div>
        </div>

        <MoreProduct />
        <SimilarShop />
        <Subscribe />
      </Container>
    </section>
  );
};

export default page;
