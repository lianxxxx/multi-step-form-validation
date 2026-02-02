import Image from "next/image";
import StepIndicator from "./components/StepIndicator";
import Step1Form from "./components/forms/Step1Form";
import Button from "./components/Button";
import Step2Form from "./components/forms/Step2Form";
import Step3Form from "./components/forms/Step3Form";
import Step4Form from "./components/forms/Step4Form";
import ThankYouCard from "./components/forms/ThankYouCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile */}
      <div className="md:hidden">
        <StepIndicator />
        <div className="relative px-4 -mt-16 pb-8 z-20">
          <ThankYouCard />
        </div>
        <Button />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex min-h-screen items-center justify-center p-4">
        <div className="flex gap-8 bg-white rounded-2xl p-4">
          <StepIndicator />
          <div className="flex flex-col justify-between">
            <ThankYouCard />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
