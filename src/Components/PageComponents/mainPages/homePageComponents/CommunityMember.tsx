"use client";
import Container from "@/Components/Common/Container";
import Image from "next/image";
import React, { useState } from "react";
import communityImage from "@/Assets/community.png";
import Modal from "@/Components/Common/Modal";
import MembershipApplicationModal from "@/Components/Modals/MembershipApplicationModal";
import Link from "next/link";

const CommunityMember = ({ has_community }: any) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <section className="rounded-xl">
      <Container>
        <div className="flex flex-col md:flex-row">
          {/* Left */}
          <div className="md:w-[527px] md:h-[549px] shrink-0 rounded-tl-lg rounded-bl-lg">
            <Image
              src={communityImage}
              alt="community"
              className="rounded-tl-lg rounded-bl-lg w-full h-full"
            />
          </div>

          {/* Right */}
          <div className="grow bg-primary-green rounded-tr-lg rounded-br-lg flex flex-col gap-5 justify-center p-5 md:p-10">
            <h2 className="text-accent-white text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              Community Member Spotlight
            </h2>

            <h3 className="text-accent-white text-xl md:text-2xl">
              Paulo Silva
            </h3>

            <p className="text-sm md:text-base xl:text-lg text-accent-white">
              Paulo is a local master gardener, who offers mentorship and
              housing to those who wish to learn and grow in the permaculture
              space. He sells only what is grown on the lands he nurtures,
              things like flowers, herbs, balms & more. He even offers Homegrown
              Cooking classes for a donation, a most special kind of experience
              worth signing up for.
            </p>

            <Link
              href="/community-member-spotlight"
              className="md:w-[416px] text-center block duration-500 transition-all border text-sm md:text-lg text-secondary-black cursor-pointer md:py-3 py-2  bg-accent-white rounded-lg shadow-lg hover:scale-105"
            >
              View Their Shop
            </Link>

            {has_community && (
              <button
                onClick={() => setOpen(true)}
                className="md:w-[416px] duration-500 transition-all block border border-accent-white text-sm md:text-lg text-accent-white cursor-pointer md:py-3 py-2 rounded-lg shadow-lg hover:scale-105"
              >
                Apply for Community Spotlight
              </button>
            )}
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <MembershipApplicationModal />
      </Modal>
    </section>
  );
};

export default CommunityMember;
