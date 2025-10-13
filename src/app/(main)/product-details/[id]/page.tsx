"use client";
import Link from "next/link";
import React, { use } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Container from "@/Components/Common/Container";
import { getProductDetails } from "@/Hooks/api/cms_api";
import { ProductDetailsSkeleton } from "@/Components/Loader/Loader";
import ProductGallery from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductGallery";
import ProductReviews from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductReviews";
import MoreProduct from "@/Components/PageComponents/mainPages/productDetailsComponents/MoreProduct";
import SimilarShop from "@/Components/PageComponents/mainPages/productDetailsComponents/SimilarShop";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import ShopInfo from "@/Components/PageComponents/mainPages/productDetailsComponents/ShopInfo";
import ProductDescription from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductDescription";

interface Props {
  params: Promise<{ id: number }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);
  const { data: productDetailsData, isLoading } = getProductDetails(id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <section className="py-10">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex gap-2 items-center mb-5 text-gray-600 font-semibold">
          <Link href="/">Home</Link>
          <MdKeyboardArrowRight className="text-lg" />
          <button>{productDetailsData?.data?.product_name}</button>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Left */}
          <div className="space-y-16">
            {/* Thumbnail Gallery */}
            <ProductGallery data={productDetailsData?.data?.images} />

            {/* Reviews */}
            <ProductReviews />
          </div>

          {/* Right */}
          <div className="space-y-16">
            {/* Product Description */}
            <ProductDescription data={productDetailsData?.data} />

            {/* Shop Info */}
            <ShopInfo data={productDetailsData?.data} />
          </div>
        </div>

        <MoreProduct data={productDetailsData?.data} />

        {/* <SimilarShop /> */}
        <Subscribe />
      </Container>
    </section>
  );
};

export default page;
