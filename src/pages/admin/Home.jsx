import React from "react";
import { NavLink } from "react-router-dom";

/* Utils */
import { login, logOut, onAuth, auth } from "../../utils/admin";

function Home() {
  const [user, setUser] = React.useState(null);

  const loginProcess = () => {
    login(
      (u) => {
        setUser(u.user);
      },
      (e) => {
        alert("You are not authorized to access this page!");
        console.log(e);
        logOutProcess();
      }
    );
  };

  const logOutProcess = () => {
    logOut(
      () => {
        setUser(null);
      },
      (e) => {
        console.error(e);
      }
    );
  };

  React.useEffect(() => {
    onAuth(auth, (u) => {
      setUser(u);
    });
  }, []);
  return (
    <>
      {user ? (
        <>
          <div className="container py-12 mx-auto">
            <h1 className="text-center text-slate-800 dark:text-white text-3xl font-[500] mt-10">
              Welcome to Admin Panel <span className="text-slate-400 dark:text-slate-500">:-)</span>
            </h1>
            <div className="_admin-account w-full max-w-[450px] mx-auto mt-5 text-slate-800 dark:text-white text-center">
              <p className="text-slate-500 dark:text-slate-400">
                {user.email} (
                <button
                  className="text-blue-500 hover:underline text-sm"
                  onClick={logOutProcess}
                >
                  Sign Out
                </button>
                )
              </p>
            </div>
            <div className="_admin-menu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
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
      ) : (
        <>
          <div className="container py-12 mx-auto">
            <h1 className="text-center text-slate-800 dark:text-white text-3xl font-[500] mt-10">
              Welcome to Admin Panel
            </h1>
            <div className="_admin-account w-full max-w-[450px] mx-auto mt-8 text-slate-800 dark:text-white text-center">
              <button
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-[500] py-2 px-4 rounded mx-auto"
                onClick={loginProcess}
              >
                <svg
                  className="w-6 h-6 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 25.8 166.3 64.9l-67.6 64.9C303.6 93.7 277.3 80 248 80c-92.6 0-168 75.4-168 168s75.4 168 168 168c74.4 0 135.7-48.2 158.3-116.8H248v-96h240Z"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
