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
          content="We are a branding agency that helps businesses grow organically. We provide best solutions for your business." />
      </Helmet>
      <div className="container mx-auto py-20 text-slate-800 dark:text-white">
        <h1 className="text-4xl font-bold text-center">
          Branding Agency —{" "}
          <span className="text-violet-700 dark:text-violet-500">
            Organic Growth
          </span>
        </h1>
        <img
          src="/images/static/aboutView.webp"
          alt="Branding"
          className="w-full h-96 object-cover mt-10 rounded-md"
        />
      </div>
    </>
  );
}
