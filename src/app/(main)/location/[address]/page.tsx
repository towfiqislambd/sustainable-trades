"use client";
import React, { use } from "react";
import NearbyProducts from "@/Components/PageComponents/mainPages/shopPageComponents/NearbyProducts";
import Container from "@/Components/Common/Container";
import p1 from "@/Assets/p1.jpg";
import Shop from "@/Components/Common/Shop";
import Product from "@/Components/Common/Product";
import CommunityMember from "@/Components/PageComponents/mainPages/homePageComponents/CommunityMember";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";
import LocalMagicMarker from "@/Components/PageComponents/mainPages/shopPageComponents/LocalMagicMarker";
import {
  getAllShopsClient,
  getMembershipSpotlightClient,
} from "@/Hooks/api/cms_api";
const data = [
  {
    id: 1,
    shop_image: p1,
    shop_name:
      "Silk Skin CA Tower, new delhi, India CA Tower, new delhi, India CA Tower, new delhi, India",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 2,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 3,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 4,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
];

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
  const { data: spotlightData, isLoading } = getMembershipSpotlightClient();
  const { data: shopData, isLoading: shopLoading } = getAllShopsClient(address);

  return (
    <>
      <LocalMagicMarker address={address} shopData={shopData} />
      <NearbyProducts />

      {/* Organic Bath & Beauty */}
      <Container>
        <h3 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-7">
          Organic Bath & Beauty
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mb-14">
          {data?.map(shopInfo => (
            <Shop key={shopInfo?.id} shop={shopInfo} />
          ))}
        </div>
      </Container>

      {/* Sustainable Products & Services Nearby */}
      <Container>
        <h3 className="text-2xl md:text-3xl font-semibold text-secondary-black mb-7">
          Organic Bath & Beauty
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
