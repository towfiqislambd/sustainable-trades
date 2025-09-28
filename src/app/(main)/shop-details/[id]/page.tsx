import React from "react";
import { getShopDetails } from "@/Hooks/api/cms_api";
import ShopFAQ from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopFAQ";
import AboutShop from "@/Components/PageComponents/mainPages/shopDetailsComponents/AboutShop";
import ShopBanner from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopBanner";
import ShopPolicies from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopPolicies";
import ShopListing from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopListing";
import ShopReviews from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopReviews";
import DetailsTab from "@/Components/PageComponents/mainPages/shopDetailsComponents/DetailsTab";

const page = async ({ params }: any) => {
  const { id } = params;
  const shopDetails = await getShopDetails(id);

  return (
    <>
      <ShopBanner data={shopDetails?.data} />
      <DetailsTab />
      <ShopListing />
      <ShopReviews />
      <AboutShop />
      <ShopPolicies />
      <ShopFAQ />
    </>
  );
};

export default page;
