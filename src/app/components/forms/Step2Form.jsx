import Image from "next/image";

export default function Step2Form() {
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
        <div className="flex md:flex-col items-start md:justify-between border border-[#483eff] bg-[#f8f9ff] w-full rounded-lg p-4 cursor-pointer hover:border-[#483eff] transition-all">
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
            <p className="text-gray-400 text-sm">$9/mo</p>
            <small className="text-[11px] text-[#02295a] block mt-1">
              2 months free
            </small>
          </div>
        </div>

        {/* Advanced */}
        <div className="flex md:flex-col items-start md:justify-between border border-[#483eff] bg-[#f8f9ff] w-full rounded-lg p-4 cursor-pointer hover:border-[#483eff] transition-all">
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
            <p className="text-gray-400 text-sm">$12/mo</p>
            <small className="text-[11px] text-[#02295a] block mt-1">
              2 months free
            </small>
          </div>
        </div>

        {/* Pro */}
        <div className="flex md:flex-col items-start md:justify-between border border-[#483eff] bg-[#f8f9ff] w-full rounded-lg p-4 cursor-pointer hover:border-[#483eff] transition-all">
          <div className="mr-4 md:mr-0 md:mb-10">
            <Image src="/icon-pro.svg" alt="Pro Icon" width={40} height={40} />
          </div>

          <div>
            <p className="font-bold text-[#02295a]">Pro</p>
            <p className="text-gray-400 text-sm">$15/mo</p>
            <small className="text-[11px] text-[#02295a] block mt-1">
              2 months free
            </small>
          </div>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="w-full bg-[#f8f9ff] rounded-lg p-3 flex justify-center items-center gap-6 mt-8">
        <span className="text-sm font-bold text-[#02295a]">Monthly</span>
        <div className="w-10 h-5 bg-[#02295a] rounded-full relative p-1 flex items-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <span className="text-sm font-bold text-gray-400">Yearly</span>
      </div>
    </div>
  );
}
