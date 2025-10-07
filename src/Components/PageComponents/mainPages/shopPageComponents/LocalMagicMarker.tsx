"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuFileQuestion } from "react-icons/lu";
import { getAllShopsClient } from "@/Hooks/api/cms_api";
import Container from "@/Components/Common/Container";
import { SearchSvg } from "@/Components/Svg/SvgContainer";
import { ShopListSkeleton } from "@/Components/Loader/Loader";
import ShopsMap from "@/Components/PageComponents/mainPages/shopPageComponents/ShopsMap";

type Props = {
  address: string;
};

const LocalMagicMarker = ({ address }: Props) => {
  const [searchShop, setSearchShop] = useState<string>(address);
  const [hoveredShop, setHoveredShop] = useState<any>(null);
  const { data: shopData, isLoading: shopLoading } =
    getAllShopsClient(searchShop);

  return (
    <section className="mt-10 mb-16">
      <Container>
        <div className="space-y-7">
          {/* Upper Part */}
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-0 justify-between items-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-secondary-black">
              Find Your Local Magic Makers
            </h3>

            <div className="flex justify-end gap-1 items-center border border-primary-green px-2 py-2 rounded-[6px] w-full md:w-[350px]">
              <SearchSvg />
              <input
                type="text"
                onChange={e => setSearchShop(e.target.value)}
                placeholder="Denver, CO 80012"
                defaultValue={searchShop}
                className="w-full border-none outline-none"
              />
            </div>
          </div>

          {/* Lower Part */}
          <div className="grid lg:grid-cols-2 gap-5 border border-gray-100 rounded-lg p-3">
            {/* Left - Shop List */}
            {searchShop ? (
              <div className="space-y-2 h-[550px] overflow-y-auto">
                {shopLoading ? (
                  Array.from({ length: 7 }).map((_, idx) => (
                    <ShopListSkeleton key={idx} />
                  ))
                ) : shopData?.data?.length === 0 || !shopData ? (
                  <div className="text-gray-700 font-semibold text-lg text-center flex justify-center flex-col gap-2 items-center h-full p-2 lg:p-8 bg-[#d4e2cb2f]">
                    <LuFileQuestion className="text-5xl text-gray-600" />
                    No Shop Found
                  </div>
                ) : (
                  shopData?.data?.map((item: any) => (
                    <Link
                      href={`/shop-details/${item?.shop_info?.user_id}`}
                      key={item?.id}
                      className="flex flex-col md:flex-row gap-2.5 md:gap-5 md:items-center border-b last:border-b-0 border-gray-300 py-3 cursor-pointer hover:bg-green-50"
                      onMouseEnter={() => setHoveredShop(item)}
                      onMouseLeave={() => setHoveredShop(null)}
                    >
                      <figure className="size-22 shrink-0 rounded-lg relative">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SITE_URL}/${item?.shop_info?.shop_image}`}
                          alt="shop_image"
                          fill
                          className="size-full object-cover rounded-lg"
                        />
                      </figure>

                      <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 md:items-center grow">
                        <div className="grow">
                          <h3 className="text-lg font-semibold text-primary-green">
                            {item?.shop_info?.shop_name}
                          </h3>

                          <div className="flex gap-1 items-center py-2">
                            {Array.from({ length: 3 }).map((_, index) => (
                              <FaStar
                                key={index}
                                className="text-primary-green text-sm"
                              />
                            ))}
                            {Array.from({ length: 2 }).map((_, index) => (
                              <FaRegStar
                                key={index}
                                className="text-primary-green text-sm"
                              />
                            ))}
                          </div>

                          <p className="text-secondary-gray font-semibold text-sm">
                            {item?.shop_info?.address?.address_line_1}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            ) : (
              <div className="flex flex-col justify-center h-full p-2 lg:p-8 bg-[#d4e2cb2f]">
                <h3 className="text-2xl lg:text-3xl font-semibold text-secondary-black mb-5">
                  Search to find your local magic makers
                </h3>
                <p className="text-secondary-black text-sm lg:text-lg mb-5">
                  Use our Geo-locator to find local food, businesses, artisans,
                  and services making a positive impact. Enter your zip code to
                  discover nearby offerings.
                </p>
                <AiOutlineFileSearch className="text-3xl lg:text-5xl" />
              </div>
            )}

            {/* Right - Google Map */}
            <div className="h-[300px] md:h-[550px]">
              {shopData?.data && shopData?.data?.length > 0 ? (
                <ShopsMap
                  shops={shopData?.data}
                  hoveredShop={hoveredShop}
                  shopLoading={shopLoading}
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902653997918!2d90.390686!3d23.750867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91d0e4a30af%3A0x93dd84c6b9c5f8b1!2sDhaka!5e0!3m2!1sen!2sbd!4v1691261744101!5m2!1sen!2sbd"
                  loading="lazy"
                  className="h-full w-full border-0"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocalMagicMarker;
