"use client";
import {
  getFeaturedProducts,
  getMembershipSpotlightClient,
  getNearbyProducts,
  getTopVendors,
} from "@/Hooks/api/cms_api";
import React, { use } from "react";
import useAuth from "@/Hooks/useAuth";
import Product from "@/Components/Common/Product";
import Container from "@/Components/Common/Container";
import { ProductSkeleton } from "@/Components/Loader/Loader";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import TopVendors from "@/Components/PageComponents/mainPages/shopPageComponents/TopVendors";
import CommunityMember from "@/Components/PageComponents/mainPages/homePageComponents/CommunityMember";
import LocalMagicMarker from "@/Components/PageComponents/mainPages/shopPageComponents/LocalMagicMarker";

interface Props {
  params: Promise<{ address: string }>;
}


const page = ({ params }: Props) => {
  // Hooks
  const { address } = use(params);
  const { latitude, longitude } = useAuth();

  // Queries
  const { data: spotlightData } = getMembershipSpotlightClient();
  const { data: topVendors, isLoading: vendorLoading } = getTopVendors();
  const { data: featuredProducts, isLoading: featuredLoading } =
    getFeaturedProducts();
  const { data: nearbyProducts, isLoading: nearbyLoading } = getNearbyProducts(
    latitude,
    longitude
  );

  return (
    <>
      {/* Local Magic Marker */}
      <LocalMagicMarker address={address} />

      {/* Top Local Vendors */}
      <TopVendors data={topVendors?.data} vendorLoading={vendorLoading} />

      {/* Featured Products */}
      <Container>
        <h3 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-7">
          Featured Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mb-22">
          {featuredLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))
            : featuredProducts?.data?.map((product: any) => (
                <Product key={product?.id} product={product} />
              ))}
        </div>
      </Container>

      {/* Nearby Products */}
      <Container>
        <h3 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-10">
          Sustainable Products & Services Nearby
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {nearbyLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))
            : nearbyProducts?.data?.map((product: any) => (
                <Product key={product?.id} product={product} />
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
