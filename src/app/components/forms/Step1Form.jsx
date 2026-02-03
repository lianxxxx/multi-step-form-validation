import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Step1Form({
  currentStep,
  handlePrevStep,
  handleNextStep,
}) {
  const schema = z.object({
    name: z.string().min(1, "This field is required"),
    email: z.string().email("This field is required"),
    phone: z
      .string()
      .min(1, "This field is required")
      .min(10, "Phone must be at least 10 digits")
      .regex(/^\+?[0-9\s\-]+$/, "Invalid phone format"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    handleNextStep();
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
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              {...register("name")}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="e.g. +1 234 567 890"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
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
