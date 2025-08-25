import React from "react";
import { data2 } from "@/Components/Data/data";
import Product from "@/Components/Common/Product";
import DashBoardHeader from "@/Components/Common/DashBoardHeader";

const page = () => {
  return (
    <>
      <DashBoardHeader
        heading="Yours favorites"
        placeholder="Search favorites"
      />
      <div className="grid grid-cols-4 gap-x-6 gap-y-10 mt-10">
        {data2?.map(product => (
          <Product key={product?.id} product={product} is_feathered={true} />
        ))}
      </div>
    </>
  );
};

export default page;
