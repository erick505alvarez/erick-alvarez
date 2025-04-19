import React, { forwardRef, memo } from "react";

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
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
            action="https://formsubmit.co/8186275090f2c0e05418a62f7bc396aa"
            method="POST"
            className="w-full h-full max-w-[40rem] flex flex-col p-4 font-montserrat"
          >
            {/* Hidden honey pot field */}
            <input type="text" name="_honey" className="hidden" />

            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Redirect URL (optional) */}
            {/* <input
              type="hidden"
              name="_next"
              value="https://erickalvarez.info/"
            /> */}

            {/* Name Field */}
            <div className="flex flex-col sm:flex-row w-full justify-between mb-8 gap-8 md:gap-0">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="border-b-2 border-black w-full sm:w-[45%] bg-transparent placeholder:text-gray-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="border-b-2 border-black w-full sm:w-[45%] bg-transparent placeholder:text-gray-600"
              />
            </div>

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Message"
              required
              minLength={2}
              className="border-b-2 border-black w-full h-60 bg-transparent resize-none placeholder:text-gray-600"
            ></textarea>

            {/* Submit Button */}
            <div className="w-full pt-8 sm:pt-16">
              <button
                type="submit"
                className="text-white font-bold text-lg sm:text-xl bg-orange-500 py-2 px-4 rounded mx-auto block"
              >
                Let's Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default memo(Contact);
