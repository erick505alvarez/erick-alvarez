import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";

interface ContactProps {}

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormInputs) => {
    const FORM_URL = "https://formsubmit.co/erick505alvarez@gmail.com";

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form. Try again.");
      }

      alert("Message sent!");
    } catch (error) {
      console.error(error);
    }
  };

  console.log("errors:", errors);

  // Find the first error message
  const firstError = Object.values(errors).find((error) => error);

  return (
    <section
      ref={ref}
      className="CONTACT-PAGE snap-start h-screen border border-transparent flex justify-center items-center"
    >
      <div className="CONTAINER w-[80%] flex flex-col">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-[-0.01em]
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
            <div className="flex flex-col md:flex-row w-full justify-between mb-8">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="border-b-2 border-black w-[45%] bg-transparent placeholder:text-gray-400"
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
                className="border-b-2 border-black w-[45%] bg-transparent placeholder:text-gray-400"
              />
            </div>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: { value: 2, message: "Minimum message length is 2" },
              })}
              placeholder="Message"
              className="border-b-2 border-black w-full h-60 bg-transparent resize-none placeholder:text-gray-400"
            ></textarea>
            <div className="w-full pt-16">
              <button className="text-white font-bold text-xl bg-orange-500 py-2 px-4 rounded mx-auto block">
                Let's Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;
