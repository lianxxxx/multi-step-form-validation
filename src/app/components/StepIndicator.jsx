import Img from "next/image";

export default function StepIndicator() {
  return (
    <div className="relative w-full h-43.5 md:h-screen md:w-68.5">
      {/* Mobile */}
      <Img
        src="/bg-sidebar-mobile.svg"
        alt="BG for Mobile Phone"
        fill
        className="object-cover md:hidden z-0"
      />
      {/* Desktop */}
      <Img
        src="/bg-sidebar-desktop.svg"
        alt="BG for Desktop"
        fill
        className="object-cover hidden md:block z-0"
      />

      <ul
        className="absolute flex gap-3 justify-center w-full top-8 
               md:flex-col md:w-auto md:left-12 md:top-16 md:gap-6"
      >
        <li className="flex items-center gap-4">
          <div className="border border-white px-3 py-1 text-white rounded-full">
            1
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-gray-400 uppercase">Step 1</p>
            <p className="text-sm text-white font-semibold uppercase">
              Your Info
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div className="border border-white px-3 py-1 text-white rounded-full">
            2
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-gray-400 uppercase">Step 2</p>
            <p className="text-sm text-white font-bold uppercase">
              Select Plan
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div className="border border-white px-3 py-1 text-white rounded-full">
            3
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-gray-400 uppercase">Step 3</p>
            <p className="text-sm text-white font-bold uppercase">Add-Ons</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div className="border border-white px-3 py-1 text-white rounded-full">
            4
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-gray-400 uppercase">Step 4</p>
            <p className="text-sm text-white font-bold uppercase">Summary</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
