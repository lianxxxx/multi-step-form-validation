export default function Step1Form() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md md:shadow-none">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Personal info</h1>
      <h2 className="text-gray-500 mb-6">
        Please provide your name, email address, and phone number.
      </h2>

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
