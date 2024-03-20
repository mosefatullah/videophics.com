import React from "react";
import { Helmet } from "react-helmet";

/* Components */

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Videophics</title>
      </Helmet>
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center text-violet-900 dark:text-slate-50">
          About Us
        </h1>
        <p className="text-center text-violet-700 dark:text-slate-300 mt-4">
          We are a team of professionals who are passionate about what we do.
        </p>
      </div>
    </>
  );
}
