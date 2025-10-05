"use client";
import Container from "@/Components/Common/Container";
import Image from "next/image";
import React, { useState } from "react";
import communityImage from "@/Assets/community.png";
import Modal from "@/Components/Common/Modal";
import MembershipApplicationModal from "@/Components/Modals/MembershipApplicationModal";
import Link from "next/link";
import useAuth from "@/Hooks/useAuth";

const CommunityMember = ({ data, has_community }: any) => {
  const { user } = useAuth();
  const [isOpen, setOpen] = useState<boolean>(false);
  const latestSpotlight = data?.find((item: any) => item?.id === 1);

  return (
    <section className="rounded-xl">
      <Container>
        <div className="flex flex-col md:flex-row w-full">
          {/* Left */}
          <div className="flex-1 max-w-full md:max-w-[500px] md:h-[549px] shrink-0 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg overflow-hidden relative">
            <Image
              src={communityImage}
              alt="community"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex-1 bg-primary-green rounded-b-lg md:rounded-tr-lg md:rounded-br-lg flex flex-col gap-5 justify-center p-5 md:p-10">
            <h2 className="text-accent-white text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              Community Member Spotlight
            </h2>

            <h3 className="text-accent-white text-xl md:text-2xl">
              {latestSpotlight?.name}
            </h3>

            <p className="text-sm md:text-base xl:text-lg text-accent-white">
              {latestSpotlight?.shop_description}
            </p>

            <Link
              href={`/shop-details/${latestSpotlight?.user_id}`}
              className="w-full lg:w-[416px] text-center block duration-500 transition-all border text-sm md:text-lg text-secondary-black cursor-pointer md:py-3 py-2 bg-accent-white rounded-lg shadow-lg hover:scale-105"
            >
              View Their Shop
            </Link>

            {has_community &&
              user?.role === "vendor" &&
              user?.membership?.membership_type === "pro" && (
                <button
                  onClick={() => setOpen(true)}
                  className="w-full lg:w-[416px] duration-500 transition-all block border border-accent-white text-sm md:text-lg text-accent-white cursor-pointer md:py-3 py-2 rounded-lg shadow-lg hover:scale-105"
                >
                  Apply for Community Spotlight
                </button>
              )}
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <MembershipApplicationModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default CommunityMember;
