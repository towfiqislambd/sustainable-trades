"use client";
import Container from "@/Components/Common/Container";
import React, { useState } from "react";
import r1 from "@/Assets/r1.jpg";
import r2 from "@/Assets/r2.jpg";
import r3 from "@/Assets/r3.jpg";
import r4 from "@/Assets/r4.jpg";
import r5 from "@/Assets/r5.jpg";
import r6 from "@/Assets/r6.jpg";
import r7 from "@/Assets/r7.jpg";
import r8 from "@/Assets/r8.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ReviewAuthorSvg, RightArrowSvg } from "@/Components/Svg/SvgContainer";
import { FaRegStar } from "react-icons/fa";

const data = [
  {
    id: 1,
    reviewed_img: r1,
    author_name: "Review by Sarah M",
    review_count: 5,
    review_desc:
      "I'm in love with this coconut soap! The natural scent is incredibly refreshing, and it feels like a mini-vacation every time I use it. My skin has never been this soft and moisturized. Plus, knowing that it's made with organic ingredients makes it my go-to choice for a clean and eco-friendly beauty routine.",
    product_name: "Organic Coconut Bar",
    product_img: r5,
  },
  {
    id: 2,
    reviewed_img: r2,
    author_name: "Review by Sarah M",
    review_count: 5,
    review_desc:
      "I'm in love with this coconut soap! The natural scent is incredibly refreshing, and it feels like a mini-vacation every time I use it. My skin has never been this soft and moisturized. Plus, knowing that it's made with organic ingredients makes it my go-to choice for a clean and eco-friendly beauty routine.",
    product_name: "Organic Coconut Bar",
    product_img: r6,
  },
  {
    id: 3,
    reviewed_img: r3,
    author_name: "Review by Sarah M",
    review_count: 4,
    review_desc:
      "I'm in love with this coconut soap! The natural scent is incredibly refreshing, and it feels like a mini-vacation every time I use it. My skin has never been this soft and moisturized. Plus, knowing that it's made with organic ingredients makes it my go-to choice for a clean and eco-friendly beauty routine.",
    product_name: "Organic Coconut Bar",
    product_img: r7,
  },
  {
    id: 4,
    reviewed_img: r4,
    author_name: "Review by Sarah M",
    review_count: 3,
    review_desc:
      "I'm in love with this coconut soap! The natural scent is incredibly refreshing, and it feels like a mini-vacation every time I use it. My skin has never been this soft and moisturized. Plus, knowing that it's made with organic ingredients makes it my go-to choice for a clean and eco-friendly beauty routine.",
    product_name: "Organic Coconut Bar",
    product_img: r8,
  },
];

const ShopReviews = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreId, setShowMoreId] = useState<number>(0);

  return (
    <section id="Reviews" className="mt-24">
      <Container>
        <h2 className="shop_detailed_heading !mb-3">Read Our Reviews</h2>

        <div>
          {data?.map(item => (
            <div
              key={item?.id}
              className="flex gap-20 items-center border-b last:border-b-0 border-gray-200 py-8"
            >
              {/* Left - Reviews */}
              <div className="grow flex gap-5 items-start">
                {/* Author Image */}
                <p className="shrink-0 size-16 rounded-full grid place-items-center">
                  <ReviewAuthorSvg />
                </p>

                <div className="flex gap-10">
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary-green">
                      {item?.author_name}
                    </h3>

                    {/* Review Count */}
                    <div className="flex gap-1 items-center py-2">
                      {Array.from({ length: item?.review_count }).map(
                        (_, index) => (
                          <FaStar
                            key={index}
                            className="text-primary-green text-sm"
                          />
                        )
                      )}

                      {Array.from({ length: 5 - item?.review_count }).map(
                        (_, index) => (
                          <FaRegStar
                            key={index}
                            className="text-primary-green text-sm"
                          />
                        )
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-secondary-gray text-[15px]">
                      {showMore && item?.id === showMoreId
                        ? item?.review_desc
                        : item?.review_desc?.slice(0, 140)}

                      <button
                        onClick={() => {
                          setShowMore(!showMore);
                          setShowMoreId(item?.id);
                        }}
                        className="text-primary-green font-semibold cursor-pointer pl-2"
                      >
                        {showMore ? "read less" : "read more...."}
                      </button>
                    </p>
                  </div>

                  {/* Reviewed Image */}
                  <div className="flex gap-3 items-center">
                    <figure className="w-[100px] h-[85px] rounded border border-gray-100">
                      <Image
                        src={item?.reviewed_img}
                        alt="Reviewed img"
                        className="w-full h-full rounded"
                      />
                    </figure>

                    <figure className="w-[100px] h-[85px] rounded border border-gray-100">
                      <Image
                        src={item?.reviewed_img}
                        alt="Reviewed img"
                        className="w-full h-full rounded"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Right - Product under review */}
              <div className="w-[300px] shrink-0">
                <h4 className="text-primary-green text-sm font-semibold mb-3">
                  Purchased product:
                </h4>
                <div className="flex items-center gap-5">
                  <Image
                    src={item?.product_img}
                    alt="product image"
                    className="size-16"
                  />
                  <h3 className="text-sm font-semibold text-primary-green">
                    {item?.product_name}
                  </h3>
                  <RightArrowSvg />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ShopReviews;
