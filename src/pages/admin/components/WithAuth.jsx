import React from "react";
import { Helmet } from "react-helmet";

/* Utils */
import { onAuth, auth, logOut, login, checkAdmin } from "../../../utils/admin";

function WithAuth({ children }) {
  const [user, setUser] = React.useState(null);

  const loginProcess = () => {
    login(
      (u) => {
        setUser(u.user);
      },
      (e) => {
        alert("You are not authorized to access this page!");
        console.error(e);
        logOutProcess();
      }
    );
  };

  const logOutProcess = () => {
    logOut(
      () => {
        setUser(false);
      },
      (e) => {
        setUser(false);
      }
    );
  };

  React.useEffect(() => {
    onAuth(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(false);
      }
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Admin Panel - Videophics</title>
      </Helmet>
      {user === null ? (
        <div className="container py-12 mx-auto">
          <div className="text-center text-slate-800 dark:text-white text-3xl font-[500] mt-10">
            Loading...
          </div>
        </div>
      ) : user !== false ? (
        children({ user })
      ) : (
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
      )}
    </>
  );
}

export default WithAuth;
