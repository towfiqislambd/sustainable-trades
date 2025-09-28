import React from "react";
import Product from "@/Components/Common/Product";
import Container from "@/Components/Common/Container";
import { SearchSvg } from "@/Components/Svg/SvgContainer";

const ShopListing = ({ featuredListings, allListings }: any) => {
  return (
    <section id="Listings" className="mt-10">
      <Container>
        {/* Featured Listings */}
        <h2 className="section_sub_title">Featured Listings</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {featuredListings?.slice(0, 3)?.map((product: any) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>

        {/* All Listings */}
        <h2 className="section_sub_title">All Listings</h2>

        {/* Filtering */}
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-end mb-8">
          {/* Left - Filter */}
          <div className="flex flex-wrap md:flex-row  gap-7 md:items-center">
            <div>
              <h3 className="text-secondary-gray md:text-base text-xs font-semibold mb-1.5">
                Product Category
              </h3>

              <select className="border w-full md:w-[192px] md:text-base text-xs rounded-lg px-3 py-1.5 md:py-3 border-gray-400 outline-none text-secondary-gray">
                <option value="">Product 1</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </div>

            <div>
              <h3 className="text-secondary-gray md:text-base text-xs font-semibold mb-1.5">
                Product Sub Category
              </h3>

              <select className="border w-full md:w-[192px] md:text-base text-xs rounded-lg px-3 py-1.5 md:py-3 border-gray-400 outline-none text-secondary-gray">
                <option value="">All</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </div>

            <div>
              <h3 className="text-secondary-gray md:text-base text-xs font-semibold mb-1.5">
                Sort By
              </h3>
              
              <select className="border w-full md:w-[192px] md:text-base text-xs rounded-lg px-3 py-1.5 md:py-3 border-gray-400 outline-none text-secondary-gray">
                <option value="">Recently added</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </div>
          </div>

          {/* Right - Search */}
          <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-1.5 md:py-3 rounded-[6px] w-full md:w-[280px]">
            <SearchSvg />
            <input
              type="text"
              placeholder="Search all listings..."
              className="w-full border-none outline-none md:text-base text-xs"
            />
          </div>
        </div>

        {/* Map */}
        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {allListings?.map((product: any) => (
            <Product key={product?.id} product={product} is_feathered={true} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShopListing;
