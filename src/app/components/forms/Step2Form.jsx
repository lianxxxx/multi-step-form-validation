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
  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormData({
      plan: selectedPlan,
      billing: isYearly ? "yearly" : "monthly",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-lg pt-8 px-6 pb-6 shadow-md md:shadow-none md:pl-12 md:pr-16 md:pb-0 overflow-visible">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">
            Select your plan
          </h1>
          <p className="text-grey-500">
            You have the option of monthly or yearly billing.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-4 w-full mb-8 md:mt-12">
          {/* Arcade Plan Card */}
          <div
            onClick={() => setSelectedPlan("Arcade")}
            className={`flex md:flex-col items-start md:justify-between border w-full rounded-lg p-4 cursor-pointer transition-all hover:border-purple-600 ${
              selectedPlan === "Arcade"
                ? "border-purple-600 bg-blue-100"
                : "border-purple-200  bg-white "
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
              <p className="font-medium text-blue-950">Arcade</p>
              <p className="text-grey-500 text-sm">
                {isYearly ? "$90/year" : "$9/month"}
              </p>
              {isYearly && (
                <small className="text-[11px] text-blue-950 block mt-1">
                  2 months free
                </small>
              )}
            </div>
          </div>
          {/* Advanced */}
          <div
            onClick={() => setSelectedPlan("Advanced")}
            className={`flex md:flex-col items-start md:justify-between border w-full rounded-lg p-4 cursor-pointer transition-all hover:border-purple-600 ${
              selectedPlan === "Advanced"
                ? "border-purple-600 bg-blue-100"
                : "border-purple-200  bg-white "
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
              <p className="font-medium text-[#02295a]">Advanced</p>
              <p className="text-grey-500 text-sm">
                {isYearly ? "$120/year" : "$12/month"}
              </p>
              {isYearly && (
                <small className="text-[11px] text-blue-950 block mt-1">
                  2 months free
                </small>
              )}
            </div>
          </div>
          {/* Pro */}
          <div
            onClick={() => setSelectedPlan("Pro")}
            className={`flex md:flex-col items-start md:justify-between border w-full rounded-lg p-4 cursor-pointer transition-all hover:border-purple-600 ${
              selectedPlan === "Pro"
                ? "border-purple-600 bg-blue-100"
                : "border-purple-200  bg-white "
            }`}
          >
            <div className="mr-4 md:mr-0 md:mb-10">
              <Image
                src="/icon-pro.svg"
                alt="Pro Icon"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="font-medium text-blue-950">Pro</p>
              <p className="text-grey-500 text-sm">
                {isYearly ? "$150/year" : "$15/month"}
              </p>
              {isYearly && (
                <small className="text-[11px] text-blue-950 block mt-1">
                  2 months free
                </small>
              )}
            </div>
          </div>
        </div>
        {/* Toggle Section */}
        <div className="w-full bg-blue-100 rounded-lg p-3 flex justify-center items-center gap-6 mt-8">
          <span
            className={`text-sm font-medium ${isYearly ? "text-grey-500" : "text-blue-950"}`}
          >
            Monthly
          </span>
          <button
            onClick={toggleBilling}
            className="w-10 h-5 bg-blue-950 rounded-full relative p-1 flex items-center cursor-pointer"
          >
            <div
              className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </button>
          <span
            className={`text-sm font-medium ${isYearly ? "text-blue-950" : "text-grey-500"}`}
          >
            Yearly
          </span>
        </div>
        <div
          className={`p-4 flex md:p-0 ${
            currentStep > 1 ? "justify-between" : "justify-end"
          } 
        fixed bottom-0 left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:mt-19.5 md:px-0`}
        >
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="text-grey-500 hover:text-blue-950  hover:font-medium cursor-pointer"
            >
              Go Back
            </button>
          )}
          <button
            type="submit"
            className="py-2 px-4 text-white bg-blue-950 rounded-md  hover:bg-blue-900"
          >
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
}
