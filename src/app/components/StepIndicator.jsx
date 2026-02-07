import Img from "next/image";

export default function StepIndicator({ currentStep }) {
  return (
    <div className="relative w-full h-45 md:h-130 md:w-3xs ">
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
        className="object-cover hidden md:block z-0 rounded-2xl"
      />

      <ul
        className="absolute flex gap-3 justify-center w-full top-8 
               md:flex-col md:w-auto md:left-8 md:top-10 md:gap-8"
      >
        <li className="flex items-center gap-4">
          <div
            className={`
  flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300
  ${
    currentStep === 1
      ? "bg-blue-200 border-blue-200 text-blue-950 font-medium" // Active Style
      : "border-white text-white font-medium" // Inactive Style
  }
`}
          >
            1
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-purple-200 uppercase">Step 1</p>
            <p className="text-sm text-blue-50 font-medium uppercase  tracking-wider">
              Your Info
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div
            className={`
  flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300
  ${
    currentStep === 2
      ? "bg-blue-200 border-blue-200 text-blue-950 font-medium"
      : "border-white text-white font-medium"
  }
`}
          >
            2
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-purple-200 uppercase">Step 2</p>
            <p className="text-sm text-blue-50 font-medium uppercase  tracking-wider">
              Select Plan
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div
            className={`
  flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300
  ${
    currentStep === 3
      ? "bg-blue-200 border-blue-200 text-blue-950 font-medium"
      : "border-white text-white font-medium"
  }
`}
          >
            3
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-purple-200 uppercase">Step 3</p>
            <p className="text-sm text-white font-medium uppercase">Add-Ons</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <div
            className={`
  flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300
  ${
    currentStep === 4
      ? "bg-blue-200 border-blue-200 text-blue-950 font-medium"
      : "border-white text-white font-bold"
  }
`}
          >
            4
          </div>
          <div className="hidden md:block">
            <p className="text-xs  text-purple-200 uppercase">Step 4</p>
            <p className="text-sm text-white font-medium uppercase">Summary</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
