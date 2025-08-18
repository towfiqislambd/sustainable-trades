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
const SimilarItems = () => {
  return (
    <section className="mb-20">
      <h3 className="section_sub_title">Similar Items</h3>

      {/* Map */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-10">
        {data?.map(product => (
          <Product
            key={product?.id}
            product={product}
            is_feathered={true}
            has_wishlist={false}
            has_cart={false}
            has_slider={false}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarItems;
