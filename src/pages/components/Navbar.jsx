import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const ServicesList = ({ mobile }) => (
    <>
      <li
        className={
          !mobile
            ? "border-b-[3px] border-purple-700 dark:border-purple-500 hover:border-purple-700 dark:hover:border-purple-500"
            : "border-b-[3px] border-transparent hover:border-purple-700 dark:hover:border-purple-500"
        }
        index="1"
      >
        <NavLink to="/services/branding" className={mobile && "hidden"}>
          Branding
        </NavLink>
        <NavLink to="/services/branding" className="_hover">
          Branding
        </NavLink>
      </li>
      <li
        className="border-b-[3px] border-transparent hover:border-purple-700 dark:hover:border-purple-500"
        index="2"
      >
        <NavLink to="/services/design" className={mobile && "hidden"}>
          Design
        </NavLink>
        <NavLink to="/services/design" className="_hover">
          Design
        </NavLink>
      </li>
      <li
        className="border-b-[3px] border-transparent hover:border-purple-700 dark:hover:border-purple-500"
        index="3"
      >
        <NavLink to="/services/development" className={mobile && "hidden"}>
          Development
        </NavLink>
        <NavLink to="/services/development" className="_hover">
          Development
        </NavLink>
      </li>
      <li
        className="border-b-[3px] border-transparent hover:border-purple-700 dark:hover:border-purple-500"
        index="4"
      >
        <NavLink to="/services/marketing" className={mobile && "hidden"}>
          Marketing
        </NavLink>
        <NavLink to="/services/marketing" className="_hover">
          Marketing
        </NavLink>
      </li>
      <li
        className="border-b-[3px] border-transparent hover:border-purple-700 dark:hover:border-purple-500"
        index="5"
      >
        <NavLink to="/services/content-writing" className={mobile && "hidden"}>
          Content Writing
        </NavLink>
        <NavLink to="/services/content-writing" className="_hover">
          Content Writing
        </NavLink>
      </li>
      <li
        className="border-b-[3px] border-transparent hover:border-purple-700 dark:hover:border-purple-500"
        index="6"
      >
        <NavLink to="/services/bug-fixing" className={mobile && "hidden"}>
          Bug Fixing
        </NavLink>
        <NavLink to="/services/bug-fixing" className="_hover">
          Bug Fixing
        </NavLink>
      </li>
    </>
  );

  const Menu = () => (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="hidden lg:block"
          onMouseEnter={() => {
            document
              .querySelector("._services-menu")
              .classList.remove("transform");
            document
              .querySelector("._services-menu")
              .classList.remove("-translate-x-full");
            document
              .querySelector("._services-menu")
              .classList.add("opacity-100");
          }}
        >
          Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </NavLink>
        <button
          className="lg:hidden"
          onClick={() => {
            document
              .getElementById("service-lists-in-mob")
              .classList.toggle("hidden");
          }}
        >
          Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div id="service-lists-in-mob" className="mt-3 lg:hidden">
          <ol>
            <ServicesList mobile={true} />
          </ol>
        </div>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="block md:hidden">
        <a href="/#contact">Contact Us</a>
      </li>
    </>
  );

  const hideServiceMenu = () => {
    document.querySelector("._services-menu").classList.add("transform");
    document
      .querySelector("._services-menu")
      .classList.add("-translate-x-full");
    document.querySelector("._services-menu").classList.remove("opacity-100");
  };

  React.useEffect(() => {
    window.onscroll = function () {
      if (document.querySelector(".bottom-to-top")) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          document.querySelector(".bottom-to-top").style.display = "block";
        } else {
          document.querySelector(".bottom-to-top").style.display = "none";
        }
      }
    };
    const servicesMenuList = document.querySelectorAll("._services-menu ul li");
    servicesMenuList.forEach((li, index) => {
      li.addEventListener("mouseenter", (e) => {
        servicesMenuList.forEach((list) => {
          list.classList.remove(
            "border-purple-700",
            "dark:border-purple-500",
            "dark:hover:border-purple-500",
            "active"
          );
          list.classList.add("border-transparent");
        });
        li.classList.add("border-purple-700");
        li.classList.add("dark:border-purple-500");
        li.classList.add("dark:hover:border-purple-500");
        li.classList.add("active");
        li.classList.remove("border-transparent");
        const img = document.querySelector(
          `._services-menu #img${e.target.getAttribute("index")}`
        );
        const images = document.querySelectorAll("._services-menu img");
        images.forEach((image) => {
          image.classList.add("hidden");
        });
        img.classList.remove("hidden");
      });
    });
  }, []);

  return (
    <>
      <nav
        className="_navbar sticky top-0 left-0 z-50 text-black border-b border-slate-200 py-4 lg:p-0 dark:bg-slate-800 dark:border-slate-700 bg-white dark:text-white"
        role="navigation"
      >
        <div className="container mx-auto flex justify-between lg:grid grid-cols-3 gap-4 max-w-[1300px]">
          <div className="_logo flex items-center">
            <h1 className="font-medium text-lg flex items-center">
              <img
                src="/logo.jpg"
                alt="Videophics"
                className="h-8 w-8 object-cover rounded-md mr-2"
              />
              <span>Videophics</span>
            </h1>
          </div>
          <ol
            className="_menu text-sm items-center hidden lg:flex"
            onClick={hideServiceMenu}
          >
            <Menu />
          </ol>
          <div className="flex gap-5 md:gap-4 justify-end items-center">
            <NavLink
              to="/contact-us"
              className="bg-purple-700 text-white text-sm px-6 py-3 rounded-full from-purple-500 to-purple-700 bg-gradient-to-l hover:from-purple-600 hover:to-purple-800 active:scale-95 hidden md:block"
            >
              Contact Us
            </NavLink>
            <button
              className="text-black p-2 rounded-full active:scale-95 active:bg-gray-100 dark:text-white dark:active:bg-slate-800 dark:active:text-white"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </button>
            <button
              className="text-black p-2 rounded-full active:scale-95 active:bg-gray-100 block lg:hidden dark:text-white dark:active:bg-slate-800 dark:active:text-white"
              onClick={() => {
                document
                  .querySelector("._drawer-menu-layer")
                  .classList.toggle("hidden");
                document
                  .querySelector("._drawer-menu")
                  .classList.toggle("transform");
                document
                  .querySelector("._drawer-menu")
                  .classList.toggle("translate-x-full");
                document
                  .querySelector("._drawer-menu")
                  .classList.toggle("-translate-y-full");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className="_drawer-menu max-w-[380px] w-[70%] bg-white dark:bg-slate-800 dark:text-white fixed top-0 right-0 h-full transform translate-x-full -translate-y-full transition-all duration-500 ease-in-out p-6 shadow text-xl rounded-lg"
        role="menu"
        style={{ zIndex: "60" }}
      >
        <div className="brand mb-10">
          <h1 className="font-medium text-lg flex items-center">
            <img
              src="/logo.jpg"
              alt="Videophics"
              className="h-8 w-8 object-cover rounded-md mr-2"
            />
            <span>Videophics</span>
          </h1>
        </div>
        <ol>
          <Menu />
        </ol>
      </div>
      <div
        className="_drawer-menu-layer fixed top-0 left-0 h-screen w-full hidden z-50 bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
        onClick={() => {
          document.querySelector("._drawer-menu-layer").classList.add("hidden");
          document
            .querySelector("._drawer-menu")
            .classList.add("translate-x-full");
          document
            .querySelector("._drawer-menu")
            .classList.add("-translate-y-full");
        }}
      />
      <div
        className="_services-menu bg-white dark:bg-slate-800 fixed left-0 w-full transform -translate-x-full transition-all duration-500 ease-in-out px-6 shadow-md opacity-0 hidden md:block"
        role="menu"
        style={{ zIndex: "60" }}
        onMouseLeave={hideServiceMenu}
      >
        <div className="py-12 container mx-auto max-w-[1300px] flex justify-between items-center gap-6">
          <ol className="flex flex-col items-start gap-4 text-3xl font-[500] text-slate-700 dark:text-white text-right">
            <ServicesList />
          </ol>
          <div>
            <img
              src="/logo.jpg"
              alt="Branding"
              id="img1"
              className="w-full max-h-[400px] object-cover rounded-md"
            />
            <img
              src="/logo.jpg"
              alt="Design"
              id="img2"
              className="w-full max-h-[400px] object-cover rounded-md hidden opacity-80"
            />
            <img
              src="/logo.jpg"
              alt="Development"
              id="img3"
              className="w-full max-h-[400px] object-cover rounded-md hidden opacity-50"
            />
            <img
              src="/logo.jpg"
              alt="Marketing"
              id="img4"
              className="w-full max-h-[400px] object-cover rounded-md hidden opacity-40"
            />
            <img
              src="/logo.jpg"
              alt="Content Writing"
              id="img5"
              className="w-full max-h-[400px] object-cover rounded-md hidden opacity-30"
            />
            <img
              src="/logo.jpg"
              alt="Bug Fixing"
              id="img6"
              className="w-full max-h-[400px] object-cover rounded-md hidden opacity-20"
            />
          </div>
        </div>
      </div>
      <div className="bottom-to-top fixed right-4 bottom-4 z-50 hidden">
        <button
          className="p-3 bg-white rounded-full active:scale-95 active:bg-gray-100 shadow-md"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
