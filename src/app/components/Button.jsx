export default function Button({
  handleNextStep,
  currentStep,
  handlePrevStep,
}) {
  return (
    <div
      className={`bg-white p-4 flex ${currentStep > 1 ? "justify-between" : "justify-end"} `}
    >
      {currentStep > 1 && (
        <button onClick={() => handlePrevStep()}>Go Back</button>
      )}
      <button
        className="py-2 px-4 text-white  bg-blue-900 rounded-lg"
        onClick={() => handleNextStep()}
      >
        Next Step
      </button>
    </div>
  );
}
