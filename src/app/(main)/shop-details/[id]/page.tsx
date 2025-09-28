"use client";
import React, { use } from "react";
import {
  getAllListings,
  getFeaturedListings,
  getShopDetails,
} from "@/Hooks/api/cms_api";
import ShopFAQ from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopFAQ";
import AboutShop from "@/Components/PageComponents/mainPages/shopDetailsComponents/AboutShop";
import ShopBanner from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopBanner";
import ShopPolicies from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopPolicies";
import ShopListing from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopListing";
import ShopReviews from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopReviews";
import DetailsTab from "@/Components/PageComponents/mainPages/shopDetailsComponents/DetailsTab";

interface Props {
  params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);
  const { data: shopDetailsData, isLoading: shopDetailLoading } =
    getShopDetails(id);
  const { data: featuredListings, isLoading: featuredLoading } =
    getFeaturedListings(id);
  const { data: allListings, isLoading: ListingsLoading } = getAllListings(id);

  return (
    <>
      <ShopBanner data={shopDetailsData?.data} />
      <DetailsTab />
      <ShopListing
        featuredListings={featuredListings?.data}
        allListings={allListings?.data?.data}
      />
      <ShopReviews />
      <AboutShop data={shopDetailsData?.data?.shop_info} />
      <ShopPolicies data={shopDetailsData?.data?.shop_info?.policies} />
      <ShopFAQ data={shopDetailsData?.data?.shop_info?.faqs} />
    </>
  );
};

export default page;
