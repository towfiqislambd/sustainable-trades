import React from "react";
type FormData = {
  name?: string;
  email?: string;
};

const StepTwo = ({ step, setStep, totalSteps }: any) => {
  return (
    <section className="">
      <h2 className="auth_title">Your Shop</h2>

      {/* Btns */}
      <div className="flex justify-between items-center">
        <button onClick={() => setStep(step - 1)} className="auth-primary-btn">
          Back
        </button>
        <button
          onClick={() => setStep(step + 1)}
          className="auth-secondary-btn"
        >
          Save and Continue
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
