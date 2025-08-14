import Container from "@/Components/Common/Container";
import Image from "next/image";
import React from "react";
import Setupbg from "../../../Assets/shopframe.png";

const page = () => {
  return (
    <div className="pt-20 pb-[200px]">
      <Container>
        <h2 className="auth_title">You’re All Set Up!</h2>
        <Image src={Setupbg} alt="setup" className="mx-auto my-9" />
        <p className="text-[20px] text-[#67645F] font-bold text-center max-w-[700px] w-full mx-auto">
          Now that we have your preferences all sorted out, it's time to unveil
          your amazing selection of products!
        </p>
        <div className="flex justify-center gap-x-10 items-center mt-9">
          <button className="auth-primary-btn">Go to Dashboard</button>
          <button type="submit" className="auth-secondary-btn">
            Add First Inventory
          </button>
        </div>
      </Container>
    </div>
  );
};

export default page;
