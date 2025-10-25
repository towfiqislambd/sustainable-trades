"use client";
import React, { useState } from "react";
import {
  AboutShopSkeleton,
  EditShopBannerSkeleton,
  ShopBannerSkeleton,
  ShopFAQSkeleton,
  ShopPoliciesSkeleton,
} from "@/Components/Loader/Loader";
import {
  getAllListings,
  getFeaturedListings,
  getProductCategoriesClient,
  getProductSubCategoriesClient,
  getShopDetails,
  getShopReviews,
} from "@/Hooks/api/cms_api";
import { useSearchParams } from "next/navigation";
import ShopFAQ from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopFAQ";
import AboutShop from "@/Components/PageComponents/mainPages/shopDetailsComponents/AboutShop";
import ShopBanner from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopBanner";
import ShopPolicies from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopPolicies";
import ShopListing from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopListing";
import ShopReviews from "@/Components/PageComponents/mainPages/shopDetailsComponents/ShopReviews";
import DetailsTab from "@/Components/PageComponents/mainPages/shopDetailsComponents/DetailsTab";
import EditShopBanner from "@/Components/PageComponents/mainPages/shopDetailsComponents/EditShopBanner";

const page = () => {
  // Hook
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const listing_id = Number(searchParams.get("listing_id"));
  const view = String(searchParams.get("view"));

  // States
  const [category_id, setCategory] = useState<string>("");
  const [sub_category_id, setSubCategory] = useState<string>("");
  const [short_by, setSortBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<string>("");
  const [reviewPage, setReviewPage] = useState<string>("");

  // Queries
  const { data: productCategories, isLoading: categoryLoading } =
    getProductCategoriesClient();
  const { data: productSubCategories, isLoading: subCategoryLoading } =
    getProductSubCategoriesClient();
  const { data: shopDetailsData, isLoading: shopDetailLoading } =
    getShopDetails(id);
  const { data: featuredListings, isLoading: featuredLoading } =
    getFeaturedListings(listing_id);
  const { data: shopReviews, isLoading: reviewLoading } = getShopReviews(
    listing_id,
    reviewPage
  );
  const { data: allListings, isLoading: listingsLoading } = getAllListings(
    listing_id,
    category_id,
    sub_category_id,
    short_by,
    search,
    page
  );

  return (
    <>
      {/* Shop Banner */}
      {view === "customer" ? (
        shopDetailLoading ? (
          <ShopBannerSkeleton />
        ) : (
          <ShopBanner data={shopDetailsData?.data} id={id} />
        )
      ) : shopDetailLoading ? (
        <EditShopBannerSkeleton />
      ) : (
        <EditShopBanner data={shopDetailsData?.data} shop_id={id} />
      )}

      {/* Shop Tabs */}
      <DetailsTab />

      {/* Shop Listings */}
      <ShopListing
        featuredListings={featuredListings?.data}
        allListings={allListings?.data}
        setSearch={setSearch}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
        setSortBy={setSortBy}
        setPage={setPage}
        featuredLoading={featuredLoading}
        listingsLoading={listingsLoading}
        categoryLoading={categoryLoading}
        subCategoryLoading={subCategoryLoading}
        productCategories={productCategories?.data}
        productSubCategories={productSubCategories?.data}
      />

      {/* Shop Reviews */}
      <ShopReviews
        data={shopReviews?.data}
        reviewLoading={reviewLoading}
        setReviewPage={setReviewPage}
      />

      {/* Shop About */}
      {shopDetailLoading ? (
        <AboutShopSkeleton />
      ) : (
        <AboutShop data={shopDetailsData?.data?.shop_info} />
      )}

      {/* Shop Policies */}
      {shopDetailLoading ? (
        <ShopPoliciesSkeleton />
      ) : (
        <ShopPolicies data={shopDetailsData?.data?.shop_info?.policies} />
      )}

      {/* Shop FAQ */}
      {shopDetailLoading ? (
        <ShopFAQSkeleton />
      ) : (
        <ShopFAQ data={shopDetailsData?.data?.shop_info?.faqs} />
      )}
    </>
  );
};

export default page;
