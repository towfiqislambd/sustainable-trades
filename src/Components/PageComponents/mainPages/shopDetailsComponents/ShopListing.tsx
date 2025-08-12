import Container from "@/Components/Common/Container";
import React from "react";
import p1 from "@/Assets/p1.png";
import Product from "@/Components/Common/Product";

const data = [
  {
    id: 1,
    product_image: p1,
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: false,
  },
  {
    id: 2,
    product_image: p1,
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: true,
  },
  {
    id: 3,
    product_image: p1,
    product_title: "Organic Coconut Soap",
    product_price: "8.50",
    is_wishlist: false,
  },
];

const ShopListing = () => {
  return (
    <section id="Listings">
      <Container>
        <h2 className="shop_detailed_heading">Featured Listings</h2>
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
