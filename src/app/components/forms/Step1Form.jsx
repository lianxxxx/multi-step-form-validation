export default function Step1Form() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md md:shadow-none">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#02295a] mb-2">
          Personal Info
        </h1>
        <p className="text-gray-400 ">
          Please provide your name, email address, and phone number.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
