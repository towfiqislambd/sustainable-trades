import React from "react";
import Product from "@/Components/Common/Product";
import Container from "@/Components/Common/Container";
import { SearchSvg } from "@/Components/Svg/SvgContainer";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const ProductSkeleton = () => {
  return (
    <div className="rounded-t-lg relative animate-pulse">
      <div className="w-full h-[200px] rounded-lg bg-gray-200 border border-gray-100" />
      <div className="flex justify-between items-center mt-4">
        <div className="h-5 w-2/3 bg-gray-200 rounded" />
        <div className="size-6 rounded-full bg-gray-200" />
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div className="h-9 w-28 sm:w-32 bg-gray-200 rounded-[5px]" />
      </div>
    </div>
  );
};

const ShopListing = ({
  featuredListings,
  allListings,
  setSearch,
  setCategory,
  setSubCategory,
  setSortBy,
  setPage,
  listingsLoading,
  productCategories,
  productSubCategories,
}: any) => {
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
        <h2 className="section_sub_title !mt-20">All Listings</h2>

        {/* Filtering */}
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-end mb-8">
          {/* Left - Filter */}
          <div className="flex flex-wrap md:flex-row  gap-7 md:items-center">
            <div>
              <h3 className="text-secondary-gray md:text-base text-xs font-semibold mb-1.5">
                Product Category
              </h3>

              <select
                onChange={e => setCategory(e.target.value)}
                className="border w-full md:w-[192px] md:text-base text-xs rounded-lg px-3 py-1.5 md:py-3 border-gray-400 outline-none text-secondary-gray"
              >
                {productCategories?.map(
                  ({ id, name }: { id: number; name: string }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <h3 className="text-secondary-gray md:text-base text-xs font-semibold mb-1.5">
                Product Sub Category
              </h3>

              <select
                onChange={e => setSubCategory(e.target.value)}
                className="border w-full md:w-[192px] md:text-base text-xs rounded-lg px-3 py-1.5 md:py-3 border-gray-400 outline-none text-secondary-gray"
              >
                {productSubCategories?.map(
                  ({
                    id,
                    sub_category_name,
                  }: {
                    id: number;
                    sub_category_name: string;
                  }) => (
                    <option key={id} value={id}>
                      {sub_category_name}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <h3 className="text-secondary-gray md:text-base text-xs font-semibold mb-1.5">
                Sort By
              </h3>

              <select
                onChange={e => setSortBy(e.target.value)}
                className="border w-full md:w-[192px] md:text-base text-xs rounded-lg px-3 py-1.5 md:py-3 border-gray-400 outline-none text-secondary-gray"
              >
                <option value="recently_added">Recently added</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>

          {/* Right - Search */}
          <div className="flex gap-3 items-center">
            {/* Search bar */}
            <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-1.5 md:py-3 rounded-[6px] w-full md:w-[280px]">
              <SearchSvg />
              <input
                type="text"
                onChange={e => setSearch(e.target.value)}
                placeholder="Search all listings..."
                className="w-full border-none outline-none md:text-base text-xs"
              />
            </div>

            {/* Reset */}
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
                setSubCategory("");
                setSortBy("");
              }}
              className="flex gap-2 items-center cursor-pointer px-4 py-3 rounded-lg border-gray-200 relative duration-300 transition-all hover:bg-secondary-blue hover:text-white border hover:border-transparent text-white bg-primary-green"
            >
              <GrPowerReset />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Map */}
        {listingsLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {Array.from({ length: 4 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
          </div>
        ) : allListings?.data?.length === 0 || !allListings ? (
          <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 text-center py-20">
            <AiOutlineFileUnknown className="text-6xl text-gray-500" />
            <p className="text-gray-600 text-lg font-semibold">
              No product found!!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {allListings?.data?.map((product: any) => (
              <Product
                key={product?.id}
                product={product}
                is_feathered={true}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!listingsLoading && (
          <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
            {allListings?.links.map((item: any, idx: number) => (
              <button
                key={idx}
                onClick={() => item.url && setPage(item.url.split("=")[1])}
                className={`px-3 py-1 rounded border transition-all duration-200 
        ${
          item.active ? "bg-primary-green text-white" : "bg-white text-gray-700"
        } 
        ${!item.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                disabled={!item.url}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ShopListing;
