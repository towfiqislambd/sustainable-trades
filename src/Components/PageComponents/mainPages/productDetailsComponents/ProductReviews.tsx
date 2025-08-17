"use client";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
const data = [
  {
    id: 1,
    author_name: "Alex R",
    review:
      "As someone with sensitive skin, I'm always cautious about the products I use. This coconut bar soap has been a game-changer. It's gentle, nourishing, and leaves my skin feeling hydrated without any irritation. The tropical scent is just the cherry on top. Highly recommend for anyone with finicky skin!",
    review_count: 4,
  },
  {
    id: 2,
    author_name: "Jon Doe",
    review:
      "As someone with sensitive skin, I'm always cautious about the products I use. This coconut bar soap has been a game-changer. It's gentle, nourishing, and leaves my skin feeling hydrated without any irritation. The tropical scent is just the cherry on top. Highly recommend for anyone with finicky skin!",
    review_count: 5,
  },
  {
    id: 3,
    author_name: "Alex R",
    review:
      "As someone with sensitive skin, I'm always cautious about the products I use. This coconut bar soap has been a game-changer. It's gentle, nourishing, and leaves my skin feeling hydrated without any irritation. The tropical scent is just the cherry on top. Highly recommend for anyone with finicky skin!",
    review_count: 3,
  },
];

const ProductReviews = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreId, setShowMoreId] = useState<number>(0);

  return (
    <section>
      {/* Upper part */}
      <div className="flex gap-5 items-center mb-2">
        <h3 className="text-4xl font-semibold text-secondary-black">
          140 Reviews
        </h3>
        <div className="flex gap-1 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-primary-green" />
          ))}
        </div>
      </div>

      {/* Lower part */}
      <div>
        {data?.map(item => (
          <div className="border-b border-gray-300 py-6" key={item?.id}>
            <div className="flex gap-5 items-center">
              {/* Author Name */}
              <h3 className="text-lg font-semibold text-primary-green">
                Review by {item?.author_name}
              </h3>

              {/* Review Count */}
              <div className="flex gap-1 items-center py-2">
                {Array.from({ length: item?.review_count }).map((_, index) => (
                  <FaStar key={index} className="text-primary-green text-sm" />
                ))}

                {Array.from({ length: 5 - item?.review_count }).map(
                  (_, index) => (
                    <FaRegStar
                      key={index}
                      className="text-primary-green text-sm"
                    />
                  )
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-secondary-gray">
              {showMore && item?.id === showMoreId
                ? item?.review
                : item?.review?.slice(0, 120)}

              <button
                onClick={() => {
                  setShowMore(!showMore);
                  setShowMoreId(item?.id);
                }}
                className="text-primary-green font-semibold cursor-pointer pl-2"
              >
                {showMore && item?.id === showMoreId
                  ? "read less"
                  : "read more...."}
              </button>
            </p>
          </div>
        ))}

        {/* see more btn */}
        <div className="flex items-center justify-end mt-8">
          <button className="text-primary-green font-semibold text-lg cursor-pointer">
            See More....
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
