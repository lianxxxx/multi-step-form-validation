export default function Step4Form({
  currentStep,
  handlePrevStep,
  formData,
  isYearly,
  setCurrentStep,
  setIsSubmitted,
}) {
  // Calculate prices
  const planPrices = {
    Arcade: isYearly ? 90 : 9,
    Advanced: isYearly ? 120 : 12,
    Pro: isYearly ? 150 : 15,
  };

  const addOnPrices = {
    onlineService: isYearly ? 10 : 1,
    largerStorage: isYearly ? 20 : 2,
    customizableProfile: isYearly ? 20 : 2,
  };

  const planPrice = planPrices[formData.plan] || 0;

  let addOnsTotal = 0;
  if (formData.addOns.onlineService) addOnsTotal += addOnPrices.onlineService;
  if (formData.addOns.largerStorage) addOnsTotal += addOnPrices.largerStorage;
  if (formData.addOns.customizableProfile)
    addOnsTotal += addOnPrices.customizableProfile;

  const total = planPrice + addOnsTotal;

  return (
    <div className="bg-white rounded-lg pt-8 px-6 pb-8 shadow-md md:shadow-none md:pl-12 md:pr-16 md:pb-0 ">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">
          Finishing up
        </h1>
        <p className="text-grey-500">
          Double-check everything looks OK before confirming.
        </p>
      </header>

      {/* Main Summary Container */}
      <div className="bg-[#f8f9ff] rounded-lg p-4 min-h-50 md:min-h-0">
        {/* Plan Summary */}
        <div className="flex justify-between items-center pb-4 border-b border-purple-200">
          <div>
            <p className="font-medium text-blue-950">
              {formData.plan} ({isYearly ? "Yearly" : "Monthly"})
            </p>
            <button
              onClick={() => setCurrentStep(2)}
              className="text-sm text-grey-500 underline hover:text-purple-600 hover:font-medium cursor-pointer"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-blue-950">
            ${planPrice}/{isYearly ? "yr" : "mo"}
          </p>
        </div>

        {/* Add-ons */}
        <div className="pt-4 space-y-3">
          {formData.addOns.onlineService && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-grey-500">Online service</p>
              <p className="text-sm text-blue-950">
                +${addOnPrices.onlineService}/{isYearly ? "yr" : "mo"}
              </p>
            </div>
          )}
          {formData.addOns.largerStorage && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-grey-500">Larger storage</p>
              <p className="text-sm text-blue-950">
                +${addOnPrices.largerStorage}/{isYearly ? "yr" : "mo"}
              </p>
            </div>
          )}
          {formData.addOns.customizableProfile && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-grey-500">Customizable profile</p>
              <p className="text-sm text-blue-950">
                +${addOnPrices.customizableProfile}/{isYearly ? "yr" : "mo"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center p-4  ">
        <p className="text-sm text-grey-500">
          Total (per {isYearly ? "year" : "month"})
        </p>
        <p className="text-xl font-bold text-purple-600">
          +${total}/{isYearly ? "yr" : "mo"}
        </p>
      </div>

      {/* Buttons */}
      <div
        className={`p-4 flex md:p-0 ${
          currentStep > 1 ? "justify-between" : "justify-end"
        } 
        fixed bottom-0 left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:mt-21 md:px-0`}
      >
        <button
          type="button"
          onClick={handlePrevStep}
          className="text-grey-500 hover:font-medium hover:text-blue-950 cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={() => setIsSubmitted(true)}
          type="button"
          className="py-2 px-4 text-white bg-purple-600 rounded-lg hover:bg-blue-300"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
