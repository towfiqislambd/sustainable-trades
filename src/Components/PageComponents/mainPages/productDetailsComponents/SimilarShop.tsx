import React from "react";
import p1 from "@/Assets/p1.jpg";
import Shop from "@/Components/Common/Shop";
const data = [
  {
    id: 1,
    shop_image: p1,
    shop_name:
      "Silk Skin CA Tower, new delhi, India CA Tower, new delhi, India CA Tower, new delhi, India",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 2,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 3,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
  {
    id: 4,
    shop_image: p1,
    shop_name: "Silk Skin",
    shop_location: "CA Tower, new delhi, India",
  },
];

const SimilarShop = () => {
  return (
    <section className="my-20">
      {/* Title */}
      <h3 className="text-3xl font-semibold text-secondary-black mb-7">
        Consider Similar Shops
      </h3>

      {/* Map */}
      <div className="grid grid-cols-4 gap-x-6 gap-y-10">
        {data?.map(shopInfo => (
          <Shop key={shopInfo?.id} shop={shopInfo} />
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

export default SimilarShop;
