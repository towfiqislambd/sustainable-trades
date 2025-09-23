import React from "react";
import Link from "next/link";
import Pricing from "@/Components/PageComponents/mainPages/homePageComponents/Pricing";

const StepFive = ({ step, setStep }: any) => {
  return (
    <section>
      {/* Pricing */}
      <Pricing
        description="Choose What Works Best For You"
        button1="Yearly (Save 38%)"
        button2="Monthly"
      />

      {/* Btns */}
      <div className="flex justify-between items-center">
        <button onClick={() => setStep(step - 1)} className="auth-primary-btn">
          Back
        </button>

        <Link href="/onBoarding">
          <button className="auth-secondary-btn">Save and Continue</button>
        </Link>
      </div>
    </section>
  );
};

export default StepFive;
