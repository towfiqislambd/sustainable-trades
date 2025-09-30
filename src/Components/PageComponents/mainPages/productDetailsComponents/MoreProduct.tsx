import React from "react";
import Product from "@/Components/Common/Product";
import Link from "next/link";

const MoreProduct = ({ data }: any) => {
  return (
    <section className="my-20">
      {/* Title */}
      <h3 className="text-3xl font-semibold text-secondary-black mb-7">
        More from this Shop
      </h3>

      {/* Map */}
      <div className="grid grid-cols-5 gap-x-5 gap-y-10">
        {data?.more_products_from_shop?.map((product: any) => (
          <Product
            key={product?.id}
            product={product}
            is_feathered={true}
            has_wishlist={false}
            has_cart={false}
          />
        ))}
      </div>

      {/* view more btn */}
      <div className="flex items-center justify-end mt-8">
        <Link
          href={`/shop-details/${data?.shop?.id}`}
          className="text-primary-green font-semibold text-lg cursor-pointer"
        >
          View all....
        </Link>
      </div>
    </section>
  );
};

export default MoreProduct;
