import React from "react";

/* Components */
import Contact from "./components/Contact";

export default function ContactUs() {
  return (
    <>
      <div className="container mx-auto max-w-[1300px] grid md:grid-cols-2 gap-10 py-20">
        <Contact />
      </div>
    </>
  );
}
