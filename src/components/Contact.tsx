import React, { forwardRef, memo } from "react";
import { useForm } from "react-hook-form";

interface ContactProps {}

interface FormInputs {
  name: string;
  email: string;
  message: string;
  _captcha: string;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  console.log("Contact component rendered");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: { name: "", email: "", message: "", _captcha: "false" },
  });

  const onSubmit = async (data: FormInputs) => {
    const FORM_URL =
      "https://formsubmit.co/ajax/8186275090f2c0e05418a62f7bc396aa";

    const { name, email, message, _captcha } = data;

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _captcha,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form. Try again.");
      }

      console.log("data:", data);
      console.log("res:", res);

      alert("Message sent!");
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please refresh the page and try again.");
    }
  };

  console.log("errors:", errors);

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full max-w-[40rem] flex flex-col p-4 font-montserrat"
          >
            {/* <!-- Hidden honey pot field --> */}
            <input type="text" name="_honey" className="hidden" />

            {/* <!-- Disable captcha --> */}
            <input type="hidden" name="_captcha" value="false" />

            {/* <!-- Redirect URL --> */}
            {/* <!-- <input
              type="hidden"
              name="_next"
              value={`https://erickalvarez.info/`}
            /> --> */}
            {/* Error Section */}
            {firstError && (
              <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mb-6">
                <p>{firstError.message?.toString()}</p>
              </div>
            )}
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
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: { value: 2, message: "Minimum message length is 2" },
              })}
              placeholder="Message"
              className="border-b-2 border-black w-full h-60 bg-transparent resize-none placeholder:text-gray-600"
            ></textarea>
            <div className="w-full pt-8 sm:pt-16">
              <button className="text-white font-bold text-lg sm:text-xl bg-orange-500 py-2 px-4 rounded mx-auto block">
                Let's Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact"; // Important for React DevTools and debugging

export default memo(Contact);
