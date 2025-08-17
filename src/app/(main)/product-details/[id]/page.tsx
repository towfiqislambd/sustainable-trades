import React, { use } from "react";
import Container from "@/Components/Common/Container";
import ProductGallery from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductGallery";
import ProductDescription from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductDescription";
import ProductReviews from "@/Components/PageComponents/mainPages/productDetailsComponents/ProductReviews";
import Image from "next/image";
import author from "@/Assets/shop_author.jpg";
import { Love2Svg } from "@/Components/Svg/SvgContainer";
import MoreProduct from "@/Components/PageComponents/mainPages/productDetailsComponents/MoreProduct";
import SimilarShop from "@/Components/PageComponents/mainPages/productDetailsComponents/SimilarShop";

interface Props {
  params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
  const { id } = use(params);

  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-2 gap-10 mb-16">
          {/* Left - Thumbnail Gallery */}
          <ProductGallery />

          {/* Right - Product Description */}
          <ProductDescription />
        </div>

        <div className="grid grid-cols-2 gap-10">
          {/* Left - Reviews */}
          <ProductReviews />

          {/* Right - Shop Info */}
          <div>
            <div className="flex gap-4 items-center mb-7">
              <Image
                src={author}
                alt="author"
                className="size-14 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-xl">
                  Jimmy Shaw, Veterenarian
                </h3>
                <p className="text-secondary-gray">
                  Organic Bath Soaps, Est. 2023, Location: Houston TX
                </p>
              </div>
            </div>

            <button className="bg-[#B0DEDB] text-xl font-semibold flex gap-3 items-center text-primary-green px-5 py-2 rounded-lg cursor-pointer hover:scale-95 transition-transform duration-500">
              <span>Follow Shop</span>
              <Love2Svg />
            </button>
          </div>
        </div>

        <MoreProduct />
        <SimilarShop />
      </Container>
    </section>
  );
};

export default page;
