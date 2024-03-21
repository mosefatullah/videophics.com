import React from "react";
import { Helmet } from "react-helmet";

/* Components */

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Videophics</title>
      </Helmet>
      <div className="container mx-auto py-20 text-slate-800 dark:text-white">
        <h1 className="text-4xl font-bold text-center">
          Branding Agency — <span className="text-violet-700 dark:text-violet-500">Best in the Business</span>
        </h1>
        <p className="text-lg mt-6">
          Videophics is a branding agency that specializes in creating brand identities for businesses of all sizes.
        </p>
      </div>
    </>
  );
}
