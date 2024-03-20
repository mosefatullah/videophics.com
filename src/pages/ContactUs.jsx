import React from "react";
import { Helmet } from "react-helmet";

/* Components */
import Contact from "./components/Contact";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Videophics</title>
      </Helmet>
      <div className="container mx-auto max-w-[1300px] grid md:grid-cols-2 gap-10 py-20">
        <Contact />
      </div>
    </>
  );
}
