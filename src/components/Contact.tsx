import React, { forwardRef } from "react";

interface ContactProps {}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  return <section ref={ref}>Contact</section>;
});

export default Contact;
