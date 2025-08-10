"use client";
import React, { useState } from "react";
import StepOne from "./stepForm/StepOne";
import StepTwo from "./stepForm/StepTwo";
import StepThree from "./stepForm/StepThree";
import StepFour from "./stepForm/StepFour";
import StepFive from "./stepForm/StepFive";
import { StepSvg } from "@/Components/Svg/SvgContainer";
import { useForm, FormProvider } from "react-hook-form";

const StepForm = () => {
  const [step, setStep] = useState(1);

  // Hook Form instance (shared for all steps)
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      companyName: "",
    },
    mode: "onBlur",
  });

  const steps = [
    { label: "Profile Info", component: StepOne },
    { label: "Your Shop", component: StepTwo },
    { label: "About Your Shop", component: StepThree },
    { label: "Geo-Locator", component: StepFour },
    { label: "Choose A Membership", component: StepFive },
  ];

  const CurrentStep = steps[step - 1].component;

  const onSubmit = (data: any) => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      console.log("Final form data:", data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Step bar */}
        <div className="flex gap-28 justify-center items-center">
          {steps.map((item, index) => {
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
                    isActive
                      ? "bg-primary-green size-12"
                      : "bg-[#77978F] size-10"
                  }`}
                >
                  {isActive && <StepSvg />}
                </div>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Step content */}
        <div>
          <CurrentStep
            step={step}
            setStep={setStep}
            totalSteps={steps.length}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default StepForm;
