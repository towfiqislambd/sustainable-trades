"use client";
import React, { useRef, useState } from "react";
import ProfileInfo, { StepFormRef } from "./ProfileInfo";
import { FaCheck } from "react-icons/fa";

// Dummy step components without validation
const YourShop: React.FC = () => (
  <div className="text-center mt-[64px] text-[#274F45] text-[40px] font-lato font-bold">
    Your Shop
  </div>
);
const AboutYourShop: React.FC = () => (
  <div className="text-center mt-[64px] text-[#274F45] text-[40px] font-lato font-bold">
    About Your Shop
  </div>
);
const GeoLocator: React.FC = () => (
  <div className="text-center mt-[64px] text-[#274F45] text-[40px] font-lato font-bold">
    Geo-Locator
  </div>
);
const ChooseMembership: React.FC = () => (
  <div className="text-center mt-[64px] text-[#274F45] text-[40px] font-lato font-bold">
    Choose A Membership
  </div>
);

type Step = {
  title: string;
  component: React.ComponentType<any>;
  hasValidation?: boolean; // only step 0 has validation
};

const StepForm: React.FC = () => {
  const steps: Step[] = [
    { title: "Profile Info", component: ProfileInfo, hasValidation: true },
    { title: "Your Shop", component: YourShop },
    { title: "About Your Shop", component: AboutYourShop },
    { title: "Geo-Locator", component: GeoLocator },
    { title: "Choose A Membership", component: ChooseMembership },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [stepOneCompleted, setStepOneCompleted] = useState(false);

  // Ref for step 1 validation
  const stepRef = useRef<StepFormRef>(null);

  const CurrentStepComponent = steps[activeStep].component;

  const onNext = async () => {
    if (steps[activeStep].hasValidation) {
      if (stepRef.current) {
        const valid = await stepRef.current.validate();
        if (!valid) return;

        if (activeStep === 0) setStepOneCompleted(true);
      }
    }
    setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  // Show Back button only if NOT on step 0 OR if step 1 is completed
  const showBackButton = !(activeStep === 0 && !stepOneCompleted);

  return (
    <div className="relative">
      {/* Stepper */}
      <div className="px-[200px] flex items-start w-full relative mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative cursor-pointer"
            onClick={() => setActiveStep(index)}
          >
            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-[2px] -z-10 bg-[#F0EEE9]"></div>
            )}

            {/* Circle States */}
            {index < activeStep ? (
              <div className="h-8 w-8 rounded-full bg-green-950 flex justify-center items-center text-white">
                <FaCheck size={12} />
              </div>
            ) : index === activeStep ? (
              <div className="h-8 w-8 rounded-full bg-green-950 flex justify-center items-center">
                <div className="h-3 w-3 rounded-full bg-white"></div>
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-[#77978F]"></div>
            )}

            {/* Label */}
            <h3
              className={`text-center text-sm mt-2 ${
                index === activeStep ? "text-[#274F45]" : "text-[#A7A39C]"
              }`}
            >
              {step.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Step component */}
      <div>
        {steps[activeStep].hasValidation ? (
          <CurrentStepComponent ref={stepRef} />
        ) : (
          <CurrentStepComponent />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        {showBackButton ? (
          <button
            onClick={() => setActiveStep(prev => Math.max(prev - 1, 0))}
            className="px-[22px] py-4 hover:bg-green-950 hover:text-white rounded cursor-pointer border bg-transparent text-black border-black duration-500 ease-in-out font-normal font-lato max-w-[190px] w-full"
            aria-label="Back"
          >
            Back
          </button>
        ) : (
          <div style={{ width: "64px" }} /> // to keep layout consistent
        )}
        <button
          onClick={onNext}
          disabled={activeStep === steps.length - 1}
          className="px-[22px] py-4 bg-green-950 text-white rounded cursor-pointer border hover:bg-transparent hover:text-black hover:border-black duration-500 ease-in-out font-normal font-lato"
          aria-label="Save and Continue"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default StepForm;
