import React from "react";
import Image from "next/image";
import E1 from "@/Assets/e1.jpg";
import E2 from "@/Assets/e2.jpg";
import E3 from "@/Assets/e3.png";
import E4 from "@/Assets/e4.jpg";
import E5 from "@/Assets/e5.png";
import E6 from "@/Assets/e6.png";
import Container from "@/Components/Common/Container";
import Link from "next/link";

const data = [
  {
    id: 1,
    product_name: "Local Organic Produce",
    product_image: E1,
  },
  {
    id: 2,
    product_name: "Sustainable Clothing & Textiles",
    product_image: E2,
  },
  {
    id: 3,
    product_name: "Organic Bath & Beauty",
    product_image: E3,
  },
  {
    id: 4,
    product_name: "Handcrafted Gifts",
    product_image: E4,
  },
  {
    id: 5,
    product_name: "Artisan Goods",
    product_image: E5,
  },
  {
    id: 6,
    product_name: "Wellness Services",
    product_image: E6,
  },
  {
    id: 7,
    product_name: "Organic Bath & Beauty",
    product_image: E3,
  },
  {
    id: 8,
    product_name: "Handcrafted Gifts",
    product_image: E1,
  },
];

const ExploreProduct = () => {
  return (
    <section className="py-12 bg-primary-green">
      <Container>
        <h2 className="section_title !text-accent-white">
          Explore Sustainable Products
        </h2>

        <div className="grid grid-cols-4 gap-x-10 gap-y-16">
          {data?.map(item => (
            <Link
              href={`/product-details/${item?.id}`}
              key={item?.id}
              className="text-center"
            >
              <figure className="size-52 mx-auto cursor-pointer rounded-full overflow-hidden">
                <Image
                  src={item?.product_image}
                  alt="shop_image"
                  className="size-full rounded-full object-cover hover:scale-105 duration-500 transition-transform"
                />
              </figure>

              <h3 className="mt-4 text-lg text-accent-white">
                {item?.product_name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExploreProduct;
