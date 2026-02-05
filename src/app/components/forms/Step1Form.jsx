import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Step1Form({
  currentStep,
  handlePrevStep,
  saveFormData,
}) {
  const schema = z.object({
    name: z.string().min(1, "This field is required"),
    email: z.string().email("This field is required"),
    phone: z.string().min(10, "This field is required"),
    // .regex(/^\+?[0-9\s\-]+$/, "Invalid phone format"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    saveFormData(data);
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              {errors.name && (
                <p className="text-red-500 font-medium text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              {...register("name")}
              className={`border ${errors.name ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />{" "}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 font-medium text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
              className={`border ${errors.email ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />{" "}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              {errors.phone && (
                <p className="text-red-500 font-medium text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="e.g. +1 234 567 890"
              className={`border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />{" "}
          </div>
        </div>
        <div
          className={`p-4 flex ${currentStep > 1 ? "justify-between" : "justify-end"}`}
        >
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="text-gray-600"
            >
              Go Back
            </button>
          )}
          <button
            type="submit"
            className="py-2 px-4 text-white bg-blue-900 rounded-lg"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
