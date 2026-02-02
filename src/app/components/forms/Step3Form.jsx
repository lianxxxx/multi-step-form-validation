import Img from "next/image";
export default function Step3Form() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md md:shadow-none">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#02295a] mb-2">
          Pick add-ons
        </h1>
        <p className="text-gray-400 ">
          Add-ons help enhance your gaming experience.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {/* Add-on Item 1 */}

        <div className="flex items-center justify-between border border-[#483eff] bg-[#f8f9ff] rounded-lg p-4 md:px-6 cursor-pointer hover:border-[#483eff] transition-all">
          <div className="flex items-center gap-4 md:gap-6">
            {/* Custom Checkbox Appearance */}
            <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center bg-[#483eff] ">
              <Img
                src="/icon-checkmark.svg"
                width={12}
                height={12}
                alt="check"
                className="w-3 h-3"
              />
            </div>

            <div>
              <h3 className="font-bold text-[#02295a] text-sm md:text-base">
                Online service
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Access to multiplayer games
              </p>
            </div>
          </div>

          <span className="text-[#483eff] text-xs md:text-sm">+$1/mo</span>
        </div>

        {/* Add-on Item 2 */}
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 md:px-6 cursor-pointer hover:border-[#483eff] transition-all">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-5 h-5 border border-gray-200 rounded flex items-center justify-center">
              {/* Empty div for unchecked state */}
            </div>
            <div>
              <h3 className="font-bold text-[#02295a] text-sm md:text-base">
                Larger storage
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <span className="text-[#483eff] text-xs md:text-sm">+$2/mo</span>
        </div>

        {/* Add-on Item 3 */}
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 md:px-6 cursor-pointer hover:border-[#483eff] transition-all">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-5 h-5 border border-gray-200 rounded flex items-center justify-center">
              {/* Empty div for unchecked state */}
            </div>
            <div>
              <h3 className="font-bold text-[#02295a] text-sm md:text-base">
                Customizable profile
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <span className="text-[#483eff] text-xs md:text-sm">+$2/mo</span>
        </div>
      </div>
    </div>
  );
}
