import React from "react";
import { Helmet } from "react-helmet";

/* Utils */
import { onAuth, auth, logOut, login, checkAdmin } from "../../../utils/admin";

function WithAuth({ children }) {
  const [user, setUser] = React.useState(null);

  const loginProcess = () => {
    setUser(null);
    login(
      (u) => {
        setUser(u.user);
      },
      () => {
        alert("You are not authorized to access this page!");
        logOutProcess();
      }
    );
  };

  const logOutProcess = () => {
    setUser(null);
    logOut(
      () => {
        setUser(false);
      },
      () => {
        setUser(false);
      }
    );
  };

  React.useEffect(() => {
    onAuth(auth, (u) => {
      if (u) {
        checkAdmin(
          u.email,
          () => {
            setUser(u);
          },
          () => {
            logOutProcess();
          }
        );
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
          <div className="text-center text-slate-800 dark:text-white text-3xl font-[500] mt-10 flex flex-col items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-400 font-[400] mt-6">
              Refresh or clear the site data if it takes too long and try again.
            </p>
          </div>
        </div>
      ) : user !== false ? (
        children({ user })
      ) : (
        <div className="container py-12 mx-auto max-w-[1300px]">
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
