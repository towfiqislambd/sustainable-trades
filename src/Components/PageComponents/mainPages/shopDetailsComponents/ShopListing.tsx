import Container from "@/Components/Common/Container";
import React from "react";
import p1 from "@/Assets/p1.jpg";
import Product from "@/Components/Common/Product";
import { SearchSvg } from "@/Components/Svg/SvgContainer";

const data = [
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

const ShopListing = () => {
  return (
    <section id="Listings" className="mt-12">
      <Container>
        {/* Featured Listings */}
        <h2 className="shop_detailed_heading">Featured Listings</h2>
        <div className="grid grid-cols-3 gap-7 mb-10">
          {data?.slice(0, 3)?.map(product => (
            <Product key={product?.id} product={product} />
          ))}
        </div>

        {/* All Listings */}
        <h2 className="shop_detailed_heading">All Listings</h2>

        {/* Filtering */}
        <div className="flex justify-between items-end mb-8">
          {/* Left - Filter */}
          <div className="flex gap-7 items-center">
            <div>
              <h3 className="text-secondary-gray font-semibold mb-1.5">
                Product Category
              </h3>
              <select className="border w-[192px] rounded-lg px-3 py-3 border-gray-400 outline-none text-secondary-gray">
                <option value="">Product 1</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </div>

            <div>
              <h3 className="text-secondary-gray font-semibold mb-1.5">
                Product Sub Category
              </h3>
              <select className="border w-[192px] rounded-lg px-3 py-3 border-gray-400 outline-none text-secondary-gray">
                <option value="">All</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </div>

            <div>
              <h3 className="text-secondary-gray font-semibold mb-1.5">
                Sort By
              </h3>
              <select className="border w-[192px] rounded-lg px-3 py-3 border-gray-400 outline-none text-secondary-gray">
                <option value="">Recently added</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </div>
          </div>

          {/* Right - Search */}
          <div className="flex justify-end gap-1 items-center border border-gray-400 px-2 py-2 rounded-[6px] w-[280px]">
            <SearchSvg />
            <input
              type="text"
              placeholder="Search all listings..."
              className="w-full border-none outline-none"
            />
          </div>
        </div>

        {/* Map */}
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
          {data?.map(product => (
            <Product key={product?.id} product={product} is_feathered={true} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShopListing;
