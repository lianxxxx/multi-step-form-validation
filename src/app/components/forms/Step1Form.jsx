import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Step1Form({
  currentStep,
  handlePrevStep,
  saveFormData,
  formData,
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
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: formData?.name || "",
      email: formData?.email || "",
      phone: formData?.phone || "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    saveFormData(data);
  };

  return (
    <div className="bg-white rounded-lg pt-8 px-6 pb-8 shadow-md md:shadow-none md:pl-12 md:pr-16 md:pb-0 ">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">
          Personal Info
        </h1>
        <p className="text-grey-500">
          Please provide your name, email address, and phone number.
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-1 justify-between"
      >
        <div className="flex flex-col gap-4 md:-mt-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="text-sm font-medium text-blue-950"
              >
                Name
              </label>
              {errors.name && (
                <p className="text-red-500 font-medium text-sm ">
                  {errors.name.message}
                </p>
              )}
            </div>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              {...register("name")}
              className={`border placeholder-grey-500 placeholder:font-medium cursor-pointer ${errors.name ? "border-red-500" : "border-purple-200"} rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-600`}
            />{" "}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="text-sm font-medium text-blue-950"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 font-medium text-sm ">
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
              className={`border placeholder-grey-500 placeholder:font-medium cursor-pointer ${errors.email ? "border-red-500" : "border-purple-200"} rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-600`}
            />{" "}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="text-sm font-medium text-blue-950"
              >
                Phone Number
              </label>
              {errors.phone && (
                <p className="text-red-500 font-medium text-sm ">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="e.g. +1 234 567 890"
              className={`border placeholder-grey-500 placeholder:font-medium cursor-pointer ${errors.phone ? "border-red-500" : "border-purple-200"} rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-600`}
            />{" "}
          </div>
        </div>
        <div
          className={`p-4 flex md:px-0 ${
            currentStep > 1 ? "justify-between" : "justify-end"
          } 
  fixed bottom-0 left-0 w-full bg-white md:static md:w-auto md:bg-transparent md:mt-20 md:px-0`}
        >
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="text-grey-500 hover:text-blue-950"
            >
              Go Back
            </button>
          )}
          <button
            type="submit"
            className="py-2 px-4 text-white bg-blue-950 rounded-md hover:bg-blue-900"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
