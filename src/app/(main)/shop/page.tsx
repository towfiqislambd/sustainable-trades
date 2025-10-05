import React from "react";
import { getAllShops } from "@/Hooks/api/cms_api";
import FeaturedShops from "@/Components/PageComponents/mainPages/homePageComponents/FeaturedShop";

const page = async () => {
  const allShops = await getAllShops();

  return (
    <>
      <FeaturedShops data={allShops?.data} featured={false} />
    </>
  );
};

export default page;
