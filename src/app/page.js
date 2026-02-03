"use client";
import Image from "next/image";
import StepIndicator from "./components/StepIndicator";
import Step1Form from "./components/forms/Step1Form";
import Button from "./components/Button";
import Step2Form from "./components/forms/Step2Form";
import Step3Form from "./components/forms/Step3Form";
import Step4Form from "./components/forms/Step4Form";
import ThankYouCard from "./components/forms/ThankYouCard";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };
  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  const steps = {
    1: (
      <Step1Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    ),
    2: (
      <Step2Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    ),
    3: (
      <Step3Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    ),
    4: (
      <Step4Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile */}
      <div className="md:hidden">
        <StepIndicator currentStep={currentStep} />
        <div className="relative px-4 -mt-16 pb-8 z-20">
          {steps[currentStep]}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex min-h-screen items-center justify-center p-4">
        <div className="flex gap-8 bg-white rounded-2xl p-4">
          <StepIndicator currentStep={currentStep} />
          <div className="flex flex-col justify-between">
            {steps[currentStep]}
            <Button
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
              currentStep={currentStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
