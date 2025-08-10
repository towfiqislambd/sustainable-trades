import React from "react";
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

const StepFive = ({ step, setStep, formData, setFormData }: StepProps) => {
  return (
    <section className="">
      <h2 className="auth_title">Plans & Benefits</h2>

      {/* Btns */}
      <div className="flex justify-between items-center">
        <button onClick={() => setStep(step - 1)} className="auth-primary-btn">
          Back
        </button>
        <button className="auth-secondary-btn">Save and Continue</button>
      </div>
    </section>
  );
};

export default StepFive;
