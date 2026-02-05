"use client";
import Image from "next/image";
import StepIndicator from "./components/StepIndicator";
import Step1Form from "./components/forms/Step1Form";
import Step2Form from "./components/forms/Step2Form";
import Step3Form from "./components/forms/Step3Form";
import Step4Form from "./components/forms/Step4Form";
import ThankYouCard from "./components/forms/ThankYouCard";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [formData, setFormData] = useState({
    // Step 1 data
    name: "",
    email: "",
    phone: "",
    // Step 2 data
    plan: "",
    // Step 3 data
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });
  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };
  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };
  const saveFormData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    handleNextStep();
  };
  const steps = {
    1: (
      <Step1Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        saveFormData={saveFormData}
      />
    ),
    2: (
      <Step2Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        saveFormData={saveFormData}
        isYearly={isYearly}
        toggleBilling={toggleBilling}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
    ),
    3: (
      <Step3Form
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        isYearly={isYearly}
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
          </div>
        </div>
      </div>
    </div>
  );
}
