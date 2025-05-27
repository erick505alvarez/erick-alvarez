import React, { forwardRef, memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast default styles

interface ContactProps {}

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  // console.log("Contact component rendered");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Create a ref for the form element (required by EmailJS)
  // const formRef = useRef<HTMLFormElement | null>(null);

  // Handle form submission
  const onSubmit = async (data: FormInputs) => {
    toast.info("Sending...");

    if (isSubmitting) {
      return;
    }

    const { name, email, message } = data;

    if (
      !process.env.GATSBY_EMAILJS_SERVICE_ID ||
      !process.env.GATSBY_EMAILJS_TEMPLATE_ID ||
      !process.env.GATSBY_EMAILJS_PUBLIC_KEY
    ) {
      console.error("Missing environment variables.");
      setError("message", {
        type: "manual",
        message: "Unable to send message at this time. Please try again later.",
      });
      toast.error("Unable to send message. Please try again later.");
      return;
    }

    try {
      // Send the form data using EmailJS
      await emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        process.env.GATSBY_EMAILJS_PUBLIC_KEY
      );

      // Simulate a delay using setTimeout wrapped in a Promise
      // await new Promise<void>((resolve) => {
      //   toast.info("Sending...");
      //   setTimeout(() => {
      //     console.log("done");
      //     resolve();
      //   }, 2000); // Simulate a 5-second delay
      // });

      clearErrors();
      toast.dismiss();
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error(
        "Error sending message. Please refresh the page and try again."
      );
    }
  };

  // Find the first error message
  const firstError = Object.values(errors).find((error) => error);

  return (
    <section
      ref={ref}
      id="contact"
      className="CONTACT-PAGE md:snap-start h-dvh border border-transparent flex justify-center items-center relative"
    >
      <div className="CONTAINER w-[80%] flex flex-col z-10">
        <h1
          className="text-3xl md:text-5xl xl:text-7xl font-bold tracking-[-0.01em]
            mb-20 text-orange-500 text-center"
        >
          Shoot me a message!
        </h1>
        <div className="w-full flex items-center justify-center flex-grow">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full max-w-[40rem] flex flex-col p-4 font-montserrat"
          >
            {/* Hidden honey pot field */}
            <input type="text" name="_honey" className="hidden" />

            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Error Section */}
            {firstError && (
              <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mb-6">
                <p>{firstError.message?.toString()}</p>
              </div>
            )}

            {/* Name and Email Fields */}
            <div className="flex flex-col sm:flex-row w-full justify-between mb-8 gap-8 md:gap-0">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="border-b-2 border-black w-full sm:w-[45%] bg-transparent placeholder:text-gray-600"
              />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Email"
                className="border-b-2 border-black w-full sm:w-[45%] bg-transparent placeholder:text-gray-600"
              />
            </div>

            {/* Message Field */}
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: { value: 2, message: "Minimum message length is 2" },
              })}
              placeholder="Message"
              className="border-b-2 border-black w-full h-60 bg-transparent resize-none placeholder:text-gray-600"
            ></textarea>

            {/* Submit Button */}
            <div className="w-full pt-8 sm:pt-16">
              {/* <button
                type="submit"
                className="text-white font-bold text-lg sm:text-xl bg-orange-500 py-2 px-4 rounded mx-auto block"
              >
                Let's Connect
              </button> */}
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while loading
                className={`text-white font-bold text-lg sm:text-xl py-2 px-4 rounded mx-auto block ${
                  isSubmitting
                    ? "bg-orange-500 cursor-not-allowed"
                    : "bg-orange-500"
                }`}
              >
                {isSubmitting ? "Sending..." : "Let's Connect"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Add ToastContainer to render notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
});

Contact.displayName = "Contact"; // Important for React DevTools and debugging

export default memo(Contact);
