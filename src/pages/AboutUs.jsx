import React from "react";
import { Helmet } from "react-helmet";

/* Components */

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - Videophics</title>
        <meta
          name="description"
          content="We are a branding agency that helps businesses grow organically. We provide best solutions for your business."
        />
      </Helmet>
      <div className="container mx-auto max-w-[1300px] py-20 text-slate-800 dark:text-white">
        <h1 className="text-4xl font-bold text-center">
          Branding Agency —{" "}
          <span className="text-violet-700 dark:text-violet-500">
            Organic Growth
          </span>
        </h1>
        <img
          src="/images/static/aboutView.webp"
          alt="Branding"
          className="w-full h-96 object-cover mt-10 rounded-md bg-slate-200 dark:bg-slate-800"
        />
        <p className="mt-10 text-lg leading-relaxed">
          Videophics is a branding agency that helps businesses grow
          organically. We provide the best solutions for your business. Our
          services include branding, development, brand advisory, marketing,
          content writing, and software testing. We have a team of experts who
          are dedicated to helping you grow your business. We are committed to
          providing you with the best services at an affordable price. Contact
          us today to learn more about how we can help you grow your business.
        </p>
      </div>
    </>
  );
}
