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
];

const MoreProduct = () => {
  return (
    <section className="my-20">
      {/* Title */}
      <h3 className="text-3xl font-semibold text-secondary-black mb-7">
        More from this Shop
      </h3>

      {/* Map */}
      <div className="grid grid-cols-5 gap-x-5 gap-y-10">
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

      {/* view more btn */}
      <div className="flex items-center justify-end mt-8">
        <button className="text-primary-green font-semibold text-lg cursor-pointer">
          View all....
        </button>
      </div>
    </section>
  );
};

export default MoreProduct;
