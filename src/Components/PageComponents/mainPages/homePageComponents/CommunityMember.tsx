"use client";
import Container from "@/Components/Common/Container";
import Image from "next/image";
import React, { useState } from "react";
import communityImage from "@/Assets/community.png";
import Modal from "@/Components/Common/Modal";
import MembershipApplicationModal from "@/Components/Modals/MembershipApplicationModal";
import Link from "next/link";

const CommunityMember = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <section className="rounded-xl">
      <Container>
        <div className="flex">
          {/* Left */}
          <div className="w-[527px] h-[549px] shrink-0 rounded-tl-lg rounded-bl-lg">
            <Image
              src={communityImage}
              alt="community"
              className="rounded-tl-lg rounded-bl-lg w-full h-full"
            />
          </div>

          {/* Right */}
          <div className="grow bg-primary-green rounded-tr-lg rounded-br-lg flex flex-col gap-5 justify-center p-10">
            <h2 className="text-accent-white text-4xl font-semibold">
              Community Member Spotlight
            </h2>

            <h3 className="text-accent-white text-2xl">Paulo Silva</h3>

            <p className="text-lg text-accent-white">
              Paulo is a local master gardener, who offers mentorship and
              housing to those who wish to learn and grow in the permaculture
              space. He sells only what is grown on the lands he nurtures,
              things like flowers, herbs, balms & more. He even offers Homegrown
              Cooking classes for a donation, a most special kind of experience
              worth signing up for.
            </p>

            <Link
              href="/community-member-spotlight"
              className="w-[416px] text-center block duration-500 transition-all border text-lg text-secondary-black cursor-pointer py-3 bg-accent-white rounded-lg shadow-lg hover:scale-105"
            >
              View Their Shop
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="w-[416px] duration-500 transition-all block border border-accent-white text-lg text-accent-white cursor-pointer py-3 rounded-lg shadow-lg hover:scale-105"
            >
              Apply for Community Spotlight
            </button>
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
