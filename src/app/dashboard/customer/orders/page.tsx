import DashBoardHeader from "@/Components/Common/DashBoardHeader";
import DashboardHeader from "@/Shared/DashboardHeader";
import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <section className="mb-[1000px]">
      <DashBoardHeader heading="Yours Orders" placeholder="Search Orders" />
    </section>
  );
};

export default page;
