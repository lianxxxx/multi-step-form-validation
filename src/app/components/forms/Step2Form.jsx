import Image from "next/image";
import { z } from "zod";
import { useState } from "react";
export default function Step2Form({
  currentStep,
  handlePrevStep,
  saveFormData,
  isYearly,
  toggleBilling,
  selectedPlan,
  setSelectedPlan,
}) {
  const step2Schema = z.object({
    plan: z.enum(["Arcade", "Advanced", "Pro"], {
      errorMap: () => ({ message: "Please select a plan" }),
    }),
    billing: z.enum(["monthly", "yearly"]),
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-md md:shadow-none md:px-12">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#02295a] mb-2">
          Select your plan
        </h1>
        <p className="text-gray-400 text-lg">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 w-full mb-8">
        {/* Arcade Plan Card */}
        <div
          onClick={() => setSelectedPlan("Arcade")}
          className={`flex md:flex-col items-start md:justify-between border w-full rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === "Arcade"
              ? "border-[#483eff] bg-[#f8f9ff]"
              : "border-[#cbcbcd] bg-white hover:border-[#483eff]"
          }`}
        >
          <div className="mr-4 md:mr-0 md:mb-10">
            <Image
              src="/icon-arcade.svg"
              alt="Arcade Icon"
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="font-bold text-[#02295a]">Arcade</p>
            <p className="text-gray-400 text-sm">
              {isYearly ? "$90/year" : "$9/month"}
            </p>
            {isYearly && (
              <small className="text-[11px] text-[#02295a] block mt-1">
                2 months free
              </small>
            )}
          </div>
        </div>

        {/* Advanced */}
        <div
          onClick={() => setSelectedPlan("Advanced")}
          className={`flex md:flex-col items-start md:justify-between border w-full rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === "Advanced"
              ? "border-[#483eff] bg-[#f8f9ff]"
              : "border-[#cbcbcd] bg-white hover:border-[#483eff]"
          }`}
        >
          <div className="mr-4 md:mr-0 md:mb-10">
            <Image
              src="/icon-advanced.svg"
              alt="Advanced Icon"
              width={40}
              height={40}
            />
          </div>

          <div>
            <p className="font-bold text-[#02295a]">Advanced</p>
            <p className="text-gray-400 text-sm">
              {isYearly ? "$120/year" : "$12/month"}
            </p>
            {isYearly && (
              <small className="text-[11px] text-[#02295a] block mt-1">
                2 months free
              </small>
            )}
          </div>
        </div>

        {/* Pro */}
        <div
          onClick={() => setSelectedPlan("Pro")}
          className={`flex md:flex-col items-start md:justify-between border w-full rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === "Pro"
              ? "border-[#483eff] bg-[#f8f9ff]"
              : "border-[#cbcbcd] bg-white hover:border-[#483eff]"
          }`}
        >
          <div className="mr-4 md:mr-0 md:mb-10">
            <Image src="/icon-pro.svg" alt="Pro Icon" width={40} height={40} />
          </div>

          <div>
            <p className="font-bold text-[#02295a]">Pro</p>
            <p className="text-gray-400 text-sm">
              {isYearly ? "$150/year" : "$15/month"}
            </p>
            {isYearly && (
              <small className="text-[11px] text-[#02295a] block mt-1">
                2 months free
              </small>
            )}
          </div>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="w-full bg-[#f8f9ff] rounded-lg p-3 flex justify-center items-center gap-6 mt-8">
        <span className="text-sm font-bold text-[#02295a]">Monthly</span>
        <button
          onClick={toggleBilling}
          className="w-10 h-5 bg-[#02295a] rounded-full relative p-1 flex items-center cursor-pointer"
        >
          <div
            className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
              isYearly ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span className="text-sm font-bold text-gray-400">Yearly</span>
      </div>
      <div
        className={`p-4 flex ${currentStep > 1 ? "justify-between" : "justify-end"}`}
      >
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handlePrevStep}
            className="text-gray-600"
          >
            Go Back
          </button>
        )}
        <button
          onClick={() =>
            saveFormData({
              plan: selectedPlan,
              billing: isYearly ? "yearly" : "monthly",
            })
          }
          type="button"
          className="py-2 px-4 text-white bg-blue-900 rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
