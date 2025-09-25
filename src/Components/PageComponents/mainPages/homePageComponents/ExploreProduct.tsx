import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/Components/Common/Container";

type categoryItem = {
  id: number;
  name: string;
  image: string;
};

interface categoryProps {
  data: categoryItem[];
}

const ExploreProduct = ({ data }: categoryProps) => {
  return (
    <section className="py-12 bg-primary-green">
      <Container>
        <h2 className="section_title !text-accent-white md:text-start text-center">
          Explore Sustainable Products
        </h2>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-x-10 gap-y-16">
          {data?.map(({ id, name, image }) => (
            <Link
              key={id}
              href={`/product-details/${id}`}
              className="text-center"
            >
              <figure className="size-30 lg:size-52 mx-auto cursor-pointer rounded-full overflow-hidden relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/${image}`}
                  alt="shop_image"
                  fill
                  className="size-full rounded-full object-cover hover:scale-105 duration-500 transition-transform"
                />
              </figure>

              <h3 className="mt-4 text-sm md:text-lg text-accent-white">{name}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExploreProduct;
