import Container from "@/Components/Common/Container";
import Image from "next/image";
import React from "react";
import Setupbg from "../../../Assets/shopframe.png";

const page = () => {
  return (
    <div className="lg:pt-20 pt-10 lg:pb-[200px] pb-[50px]">
      <Container>
        <h2 className="auth_title">You’re All Set Up!</h2>
        <Image src={Setupbg} alt="setup" className="mx-auto my-9" />
        <p className="text-[20px] text-[#67645F] font-bold text-center max-w-[700px] w-full mx-auto">
          Now that we have your preferences all sorted out, it's time to unveil
          your amazing selection of products!
        </p>
        <div className="lg:flex justify-center gap-x-10 items-center mt-9">
          <button className="auth-primary-btn w-full md:w-fit">
            Go to Dashboard
          </button>
          <button
            type="submit"
            className="auth-secondary-btn md:mt-0 mt-3 w-full md:w-fit"
          >
            Add First Inventory
          </button>
        </div>
      </Container>
    </div>
  );
};

export default page;
