export default function Step4Form() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md md:shadow-none md:p-0">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#02295a] mb-2">
          Finishing up
        </h1>
        <p className="text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
      </header>

      {/* Main Summary Container */}
      <div className="bg-[#f8f9ff] rounded-lg p-4 md:p-6">
        {/* Selected Plan Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-bold text-[#02295a] text-sm md:text-base">
              Arcade (Yearly)
            </p>
            <button className="text-gray-400 underline text-sm hover:text-[#483eff] transition-colors">
              Change
            </button>
          </div>
          <p className="font-bold text-[#02295a] text-sm md:text-base">
            $90/yr
          </p>
        </div>

        <hr className="border-gray-200 mb-4" />

        {/* Add-ons List */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Online Service</p>
            <p className="text-[#02295a] text-sm font-medium">+$10/yr</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Large storage</p>
            <p className="text-[#02295a] text-sm font-medium">+$20/yr</p>
          </div>
        </div>
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-center p-4 md:px-6 mt-2">
        <p className="text-gray-400 text-sm">Total (per year)</p>
        <p className="text-[#483eff] font-bold text-lg md:text-xl">+$120/yr</p>
      </div>
    </div>
  );
}
