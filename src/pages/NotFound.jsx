import React from "react";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found - Videophics</title>
      </Helmet>
      <div className="flex items-center justify-center h-[90vh]">
        <h1 className="text-2xl md:text-4xl font-bold text-violet-900 dark:text-slate-50">
          404 Not Found
        </h1>
      </div>
    </>
  );
}

export default NotFound;
