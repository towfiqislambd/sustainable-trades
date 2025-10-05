"use client";
import React, { use } from "react";
import Container from "@/Components/Common/Container";
import Product from "@/Components/Common/Product";
import { ProductSkeleton } from "@/Components/Loader/Loader";
import { getCategoryDetails } from "@/Hooks/api/cms_api";
import { AiOutlineFileUnknown } from "react-icons/ai";

interface Props {
  params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);
  const { data: categoryDetails, isLoading } = getCategoryDetails(id);

  return (
    <section className="py-16">
      <Container>
        <h2 className="section_sub_title ">{categoryDetails?.data?.name}</h2>

        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {Array.from({ length: 4 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
          </div>
        ) : categoryDetails?.data?.products?.length === 0 ||
          !categoryDetails ? (
          <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 text-center py-5 md:py-20">
            <AiOutlineFileUnknown className="text-xl md:text-3xl lg:text-6xl text-gray-500" />
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              No products found!!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {categoryDetails?.data?.products?.map((product: any) => (
              <Product key={product?.id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default page;
