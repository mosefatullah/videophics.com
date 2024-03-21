import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

/* Components */
import NotFound from "./NotFound";

export default function ServicesView() {
  const service =
    useParams().service.charAt(0).toUpperCase() +
    useParams().service.slice(1).replace(/-/g, " ");

  const allowedPaths = [
    "branding",
    "marketing",
    "development",
    "design",
    "content-writing",
    "bug-fixing",
  ];

  if (allowedPaths.includes(useParams().service)) {
    return (
      <>
        <Helmet>
          <title>
            {service
              ? "Videophics" + service + " | Agency Services"
              : "Services - Videophics"}
          </title>
        </Helmet>
        <div className="container mx-auto py-20 text-slate-800 dark:text-white capitalize">
          <h1 className="text-4xl font-bold text-center">
            {service ? service : "Services"}
          </h1>
          <p className="text-center text-slate-700 dark:text-slate-300 mt-4">
            We provide a variety of services to our clients.
          </p>
        </div>
      </>
    );
  } else {
    return <NotFound />;
  }
}
