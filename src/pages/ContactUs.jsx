import React from "react";
import { Helmet } from "react-helmet";

/* Components */
import Contact from "./components/Contact";
import Animated from "./components/Animated";
import Booking from "./components/Booking";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Videophics</title>
      </Helmet>
      <div className="container mx-auto max-w-[1300px] pb-12">
        <div className="grid md:grid-cols-2 gap-10 py-20">
          <Contact />
        </div>
        <Animated varient="fade-up" speed="fast">
          <section
            id="booking"
            className="_booking-section py-[6rem] bg-violet-500 dark:bg-slate-950 flex flex-col justify-center items-center rounded-lg"
          >
            <Booking />
          </section>
        </Animated>
      </div>
    </>
  );
}
