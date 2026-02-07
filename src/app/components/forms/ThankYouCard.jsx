import Image from "next/image";

export default function ThankYouCard() {
  return (
    <div className="bg-white rounded-lg px-6  py-20 shadow-md md:shadow-none flex flex-col items-center text-center h-full justify-center md:pl-12 md:pr-16 md:py-0">
      {/* Icon Section */}
      <div className="mb-6">
        <Image
          src="/icon-thank-you.svg"
          alt="Thank You"
          width={80}
          height={80}
          className="w-14 h-14 md:w-20 md:h-20"
        />
      </div>

      {/* Text Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
        Thank you!
      </h1>

      <p className="text-grey-500 leading-relaxed max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
