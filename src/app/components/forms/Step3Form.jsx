import Img from "next/image";
import { z } from "zod";
import { useState } from "react";

export default function Step3Form({
  currentStep,
  handlePrevStep,
  saveFormData,
  isYearly,
  selectedAddOns,
  setSelectedAddOns,
}) {
  const toggleAddOn = (name) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [name]: !selectedAddOns[name],
    });
  };
  return (
    <div className="bg-white rounded-lg pt-8 px-6 pb-8 shadow-md md:shadow-none md:pl-12 md:pr-16 md:pb-0 ">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">
          Pick add-ons
        </h1>
        <p className="text-grey-500">
          Add-ons help enhance your gaming experience.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {/* Add-on Item 1 */}

        <div
          className={`flex items-center justify-between border border-purple-200 rounded-lg p-4 md:px-6 cursor-pointer  transition-all hover:border-purple-600 ${selectedAddOns.onlineService ? "border-purple-600 bg-blue-100" : ""}`}
        >
          <div className="flex items-center gap-4 md:gap-6 bg">
            {/* Custom Checkbox Appearance */}
            <button
              onClick={() => toggleAddOn("onlineService")}
              className={`w-5 h-5 border border-purple-200 rounded flex items-center justify-center ${selectedAddOns.onlineService ? "bg-purple-600 border-0" : ""}`}
            >
              {selectedAddOns.onlineService && (
                <Img
                  src="/icon-checkmark.svg"
                  width={12}
                  height={12}
                  alt="check"
                  className="w-3 h-3"
                />
              )}
            </button>

            <div>
              <h3 className="font-medium text-blue-950 text-sm md:text-base">
                Online service
              </h3>
              <p className="text-grey-500 text-xs md:text-sm">
                Access to multiplayer games
              </p>
            </div>
          </div>

          <span className="text-purple-600 text-xs md:text-sm">
            {isYearly ? "+$10/year" : "+$1/month"}
          </span>
        </div>

        {/* Add-on Item 2 */}
        <div
          className={`flex items-center justify-between border border-purple-200 rounded-lg p-4 md:px-6 cursor-pointer  transition-all hover:border-purple-600${selectedAddOns.largerStorage ? "border-purple-600 bg-blue-100" : ""}`}
        >
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => toggleAddOn("largerStorage")}
              className={`w-5 h-5 border border-purple-200 rounded flex items-center justify-center ${selectedAddOns.largerStorage ? "bg-purple-600 border-0" : ""} `}
            >
              {selectedAddOns.largerStorage && (
                <Img
                  src="/icon-checkmark.svg"
                  width={12}
                  height={12}
                  alt="check"
                  className="w-3 h-3 text-white"
                />
              )}
            </button>
            <div>
              <h3 className="font-medium text-blue-950 text-sm md:text-base">
                Larger storage
              </h3>
              <p className="text-grey-500 text-xs md:text-sm">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <span className="text-purple-600 text-xs md:text-sm">
            {isYearly ? "+$20/year" : "+$2/month"}
          </span>
        </div>

        {/* Add-on Item 3 */}
        <div
          className={`flex items-center justify-between border border-purple-200 rounded-lg p-4 md:px-6 cursor-pointer  transition-all hover:border-purple-600 ${selectedAddOns.customizableProfile ? "border-purple-600 bg-blue-100" : ""}`}
        >
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => toggleAddOn("customizableProfile")}
              className={`w-5 h-5 border border-gray-200 rounded flex items-center justify-center ${selectedAddOns.customizableProfile ? "bg-purple-600 border-0" : ""}`}
            >
              {selectedAddOns.customizableProfile && (
                <Img
                  src="/icon-checkmark.svg"
                  width={12}
                  height={12}
                  alt="check"
                  className="w-3 h-3"
                />
              )}
            </button>
            <div>
              <h3 className="font-medium text-blue-950 text-sm md:text-base">
                Customizable profile
              </h3>
              <p className="text-grey-500 text-xs md:text-sm">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <span className="text-purple-600 text-xs md:text-sm">
            {isYearly ? "+$20/year" : "+$2/month"}
          </span>
        </div>
      </div>

      <div
        className={`p-4 flex md:p-0 ${
          currentStep > 1 ? "justify-between" : "justify-end"
        } 
        fixed bottom-0 left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:mt-20 md:px-0`}
      >
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handlePrevStep}
            className="text-grey-500 hover:font-medium hover:text-blue-950 cursor-pointer"
          >
            Go Back
          </button>
        )}
        <button
          onClick={() => saveFormData({ addOns: selectedAddOns })}
          type="button"
          className="py-2 px-4 text-white bg-blue-950 rounded-lg hover:bg-blue-900"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
