import React, { use } from "react";
import Container from "@/Components/Common/Container";
import ProductGallery from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductGallery";
import ProductDescription from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductDescription";
import ProductReviews from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductReviews";
import MoreProduct from "@/Components/PageComponents/mainPages/productDetailsComponents/MoreProduct";
import SimilarShop from "@/Components/PageComponents/mainPages/productDetailsComponents/SimilarShop";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import ShopInfo from "@/Components/PageComponents/mainPages/productDetailsComponents/ShopInfo";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);

  return (
    <section className="py-10">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex gap-2 items-center mb-5 text-gray-600 font-semibold">
          <Link href="/">Home</Link>
          <MdKeyboardArrowRight className="text-lg" />
          <button>Coconut Bar Soap</button>
        </div>

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
