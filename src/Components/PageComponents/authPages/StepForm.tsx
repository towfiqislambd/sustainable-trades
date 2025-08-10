"use client";
import React, { useState } from "react";
import StepOne from "./stepForm/StepOne";
import StepTwo from "./stepForm/StepTwo";
import StepThree from "./stepForm/StepThree";
import StepFour from "./stepForm/StepFour";
import StepFive from "./stepForm/StepFive";
import { StepSvg } from "@/Components/Svg/SvgContainer";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  // Steps configuration
  const steps = [
    { label: "Profile Info", component: StepOne },
    { label: "Your Shop", component: StepTwo },
    { label: "About Your Shop", component: StepThree },
    { label: "Geo-Locator", component: StepFour },
    { label: "Choose A Membership", component: StepFive },
  ];

  const CurrentStep = steps[step - 1].component;

  return (
    <section>
      {/* Step bar */}
      <div className="flex gap-28 justify-center items-center">
        {steps?.map((item, index) => {
          const stepNum = index + 1;
          const isActive = step === stepNum;
          return (
            <div
              key={stepNum}
              className={`text-center ${
                isActive ? "text-primary-green" : "text-[#A7A39C]"
              }`}
            >
              <div
                className={`rounded-full grid place-items-center mx-auto mb-2 ${
                  isActive ? "bg-primary-green size-12" : "bg-[#77978F] size-10"
                }`}
              >
                {isActive && <StepSvg />}
              </div>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <div>
        <CurrentStep
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </section>
  );
};

export default StepForm;
