"use client";
import React, { use, useState } from "react";
import {
  getAllListings,
  getFeaturedListings,
  getProductCategoriesClient,
  getProductSubCategoriesClient,
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
  // Hook
  const { id } = use(params);

  // States
  const [category_id, setCategory] = useState<string>("");
  const [sub_category_id, setSubCategory] = useState<string>("");
  const [short_by, setSortBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  // Queries
  const { data: productCategories, isLoading: categoryLoading } =
    getProductCategoriesClient();
  const { data: productSubCategories, isLoading: subCategoryLoading } =
    getProductSubCategoriesClient();
  const { data: shopDetailsData, isLoading: shopDetailLoading } =
    getShopDetails(id);
  const { data: featuredListings, isLoading: featuredLoading } =
    getFeaturedListings(id);
  const { data: allListings, isLoading: listingsLoading } = getAllListings(
    id,
    category_id,
    sub_category_id,
    short_by,
    search
  );

  return (
    <>
      <ShopBanner data={shopDetailsData?.data} />
      <DetailsTab />
      <ShopListing
        featuredListings={featuredListings?.data}
        allListings={allListings?.data?.data}
        setSearch={setSearch}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
        setSortBy={setSortBy}
        listingsLoading={listingsLoading}
        productCategories={productCategories?.data}
        productSubCategories={productSubCategories?.data}
      />
      <ShopReviews />
      <AboutShop data={shopDetailsData?.data?.shop_info} />
      <ShopPolicies data={shopDetailsData?.data?.shop_info?.policies} />
      <ShopFAQ data={shopDetailsData?.data?.shop_info?.faqs} />
    </>
  );
};

export default page;
