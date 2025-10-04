"use client";
import Link from "next/link";
import React, { use } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Container from "@/Components/Common/Container";
import { getProductDetails } from "@/Hooks/api/cms_api";
import ProductGallery from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductGallery";
import ProductReviews from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductReviews";
import MoreProduct from "@/Components/PageComponents/mainPages/productDetailsComponents/MoreProduct";
import SimilarShop from "@/Components/PageComponents/mainPages/productDetailsComponents/SimilarShop";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import ShopInfo from "@/Components/PageComponents/mainPages/productDetailsComponents/ShopInfo";
import ProductDescription from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductDescription";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetailsSkeleton = () => {
  return (
    <section className="py-10 animate-pulse">
      <div className="container mx-auto">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 items-center mb-5">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Left Side Skeleton */}
          <div className="space-y-16">
            {/* Product Gallery */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[120px] h-[100px] bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 h-[445px] bg-gray-200 rounded-xl"></div>
            </div>

            {/* Reviews Skeleton */}
            <div className="space-y-5">
              <div className="h-8 w-40 bg-gray-200 rounded"></div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Skeleton */}
          <div className="space-y-10">
            {/* Product Description Section */}
            <div className="space-y-4">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
              <div className="h-6 w-2/3 bg-gray-200 rounded"></div>
              <div className="h-20 w-full bg-gray-200 rounded"></div>
            </div>

            {/* Price & Quantity */}
            <div className="flex items-center justify-between">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <div className="h-12 w-full bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded"></div>
            </div>

            {/* Shop Info */}
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="h-10 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* More Products & Subscribe Skeleton */}
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-60 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

const page = ({ params }: Props) => {
  const { id } = use(params);
  const { data: productDetailsData, isLoading } = getProductDetails(id);

  if (isLoading) {
    return (
      <div className="">
        <ProductDetailsSkeleton />
      </div>
    );
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
