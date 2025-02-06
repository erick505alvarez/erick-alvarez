import React from "react";

function Footer() {
  return (
    <section className="w-full flex justify-center mt-10 mb-14">
      <div className="PILL flex rounded-2xl overflow-hidden text w-[300px] md:w-[600px] h-min">
        <div className="hidden bg-white font-bold py-2 md:flex justify-center items-center w-[50%]">
          Let's Work Together
        </div>
        <div className="text-white font-bold bg-primary py-2 flex justify-center flex-grow items-center w-[50%]">
          erickalvarez.official@gmail.com
        </div>
      </div>
    </section>
  );
}

export default Footer;
