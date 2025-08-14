import React, { use } from "react";
import AboutShop from "@/Components/PageComponents/mainPages/shopDetailsComponents/AboutShop";
import ShopBanner from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopBanner";
import ShopFAQ from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopFAQ";
import ShopPolicies from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopPolicies";
import ShopListing from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopListing";
import ShopReviews from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopReviews";
import DetailsTab from "@/Components/PageComponents/mainPages/shopDetailsComponents/DetailsTab";
import EditShopBanner from "@/Components/PageComponents/mainPages/shopDetailsComponents/EditShopBanner";

interface Props {
  params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);
  const user = true;

  return (
    <section className="">
      {user ? <EditShopBanner /> : <ShopBanner />}
      <DetailsTab />
      <ShopListing />
      <ShopReviews />
      <AboutShop />
      <ShopPolicies />
      <ShopFAQ />
    </section>
  );
};

export default page;
