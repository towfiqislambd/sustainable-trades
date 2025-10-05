import Container from "@/Components/Common/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <h2 className="section_sub_title ">Category Name</h2>

        {/* {listingsLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {Array.from({ length: 4 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </div>
      ) : allListings?.data?.length === 0 || !allListings ? (
        <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 text-center py-5 md:py-20">
          <AiOutlineFileUnknown className="text-xl md:text-3xl lg:text-6xl text-gray-500" />
          <p className="text-gray-600 text-sm md:text-lg font-semibold">
            No product found!!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {allListings?.data?.map((product: any) => (
            <Product key={product?.id} product={product} is_feathered={true} />
          ))}
        </div>
      )} */}
      </Container>
    </div>
  );
};

export default page;
