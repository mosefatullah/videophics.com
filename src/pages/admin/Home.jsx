import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container py-12 mx-auto">
        <h1 className="text-center text-slate-800 dark:text-white text-3xl font-[500] mt-10">
          Welcome to Admin Panel
        </h1>
        <div className="_admin-account w-full max-w-[450px] mx-auto mt-8 text-slate-800 dark:text-white text-center">
          LOGGED IN
        </div>
        <div className="_admin-menu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <NavLink to="/admin/myblog">
            <div className="bg-white dark:bg-slate-800 shadow-md rounded-md p-6 hover:shadow-lg transition duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer select-none">
              <h2 className="text-slate-700 dark:text-white text-lg font-[500]">
                My Blog
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                Manage blog posts at one place
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
