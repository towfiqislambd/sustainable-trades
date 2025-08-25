import DashBoardHeader from "@/Components/Common/DashBoardHeader";
import PaymentOptions from "@/Components/PageComponents/mainPages/cartPageComponents/PaymentOptions";
import React from "react";

const page = () => {
  return (
    <>
      <DashBoardHeader heading="Yours Cart" placeholder="Search Cart..." />
      <div className="mt-10">
        <PaymentOptions/>
      </div>
    </>
  );
};

export default page;
