import React from "react";
import Pricing from "../../mainPages/homePageComponents/Pricing";
import Link from "next/link";
type FormData = {
  name?: string;
  email?: string;
};

type StepProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData | null;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const StepFive = ({ step, setStep, totalSteps }: any) => {
  return (
    <section className="">
      {/* <h2 className="auth_title mt-16">Plans & Benefits</h2>
      <p className="text-center">Choose What Works Best For You</p> */}
      <div className="">
        <Pricing
          description="Choose What Works Best For You"
          button1="Yearly (Save 38%)"
          button2="Monthly"
        />
      </div>
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
