import Container from "@/Components/Common/Container";
import React from "react";
import p1 from "@/Assets/p1.jpg";
import Product from "@/Components/Common/Product";

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
    <section id="Listings">
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
        <div className="flex gap-7 items-center mb-7">
          <div>
            <h3 className="text-secondary-gray font-semibold mb-1.5">
              Listing Category
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
              Product Category
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
        <div className="grid grid-cols-3 gap-7">
          {data?.map(product => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShopListing;
