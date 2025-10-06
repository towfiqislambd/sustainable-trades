"use client";
import {
  getFeaturedProducts,
  getMembershipSpotlightClient,
} from "@/Hooks/api/cms_api";
import p1 from "@/Assets/p1.jpg";
import React, { use } from "react";
import Product from "@/Components/Common/Product";
import Container from "@/Components/Common/Container";
import { ProductSkeleton } from "@/Components/Loader/Loader";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import NearbyProducts from "@/Components/PageComponents/mainPages/shopPageComponents/NearbyProducts";
import CommunityMember from "@/Components/PageComponents/mainPages/homePageComponents/CommunityMember";
import LocalMagicMarker from "@/Components/PageComponents/mainPages/shopPageComponents/LocalMagicMarker";

const data2 = [
  {
    id: 1,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: false,
  },
  {
    id: 2,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 3,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 4,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: false,
  },
  {
    id: 5,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 6,
    product_image: [p1, p1, p1, p1],
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
];

interface Props {
  params: Promise<{ address: string }>;
}

const page = ({ params }: Props) => {
  const { address } = use(params);
  const { data: spotlightData, isLoading: spotlightLoading } =
    getMembershipSpotlightClient();
  const { data: featuredProducts, isLoading: featuredLoading } =
    getFeaturedProducts();

  return (
    <>
      <LocalMagicMarker address={address} />

      <NearbyProducts />

      {/* Featured Products */}
      <Container>
        <h3 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-7">
          Featured Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mb-14">
          {featuredLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))
            : featuredProducts?.data?.map((product: any) => (
                <Product key={product?.id} product={product} />
              ))}
        </div>
      </Container>

      {/* Sustainable Products & Services Nearby */}
      <Container>
        <h3 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-7">
          Sustainable Products & Services Nearby
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {data2?.map(product => (
            <Product key={product?.id} product={product} is_feathered={true} />
          ))}
        </div>
      </Container>

      {/* Community Member */}
      <div className="my-20">
        <CommunityMember data={spotlightData?.data} />
      </div>

      {/* Subscribe */}
      <Subscribe />
    </>
  );
};

export default page;
