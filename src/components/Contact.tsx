import React, { forwardRef } from "react";

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="CONTACT-PAGE snap-start h-screen border border-transparent"
    >
      Contact
    </section>
  );
});

export default Contact;
