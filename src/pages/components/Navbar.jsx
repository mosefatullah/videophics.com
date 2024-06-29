import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const offerEndsIn = new Date("19 April 2024");

  const ServicesList = ({ mobile }) => (
    <>
      <Link className="w-fit" to="/services/branding">
        <li
          className={
            !mobile
              ? "border-b-[2px] border-transparent hover:border-violet-700 dark:hover:border-violet-500"
              : "border-b-[2px] border-transparent dark:hover:border-violet-500"
          }
          index="1"
        >
          <p className={mobile && "hidden"}>Branding</p>
          <p className="_hover">Branding</p>
        </li>
      </Link>
      <Link className="w-fit" to="/services/development">
        <li
          className="border-b-[2px] border-transparent hover:border-violet-700 dark:hover:border-violet-500"
          index="3"
        >
          <p className={mobile && "hidden"}>Development</p>
          <p className="_hover">Development</p>
        </li>
      </Link>
      <Link className="w-fit" to="/services/brand-advisory">
        <li
          className="border-b-[2px] border-transparent hover:border-violet-700 dark:hover:border-violet-500"
          index="2"
        >
          <p className={mobile && "hidden"}>Brand Advisory</p>
          <p className="_hover">Brand Advisory</p>
        </li>
      </Link>
      <Link className="w-fit" to="/services/marketing">
        <li
          className="border-b-[2px] border-transparent hover:border-violet-700 dark:hover:border-violet-500"
          index="4"
        >
          <p className={mobile && "hidden"}>Marketing</p>
          <p className="_hover">Marketing</p>
        </li>
      </Link>
      <Link className="w-fit" to="/services/content-writing">
        <li
          className="border-b-[2px] border-transparent hover:border-violet-700 dark:hover:border-violet-500"
          index="5"
        >
          <p className={mobile && "hidden"}>Content Writing</p>
          <p className="_hover">Content Writing</p>
        </li>
      </Link>
      <Link className="w-fit" to="/services/software-testing">
        <li
          className="border-b-[2px] border-transparent hover:border-violet-700 dark:hover:border-violet-500"
          index="6"
        >
          <p className={mobile && "hidden"}>Software Testing</p>
          <p className="_hover">Software Testing</p>
        </li>
      </Link>
    </>
  );
  const navActivated = () => {
    document
      .querySelector("._navbar")
      .classList.add(
        "border-[#cecece]",
        "bg-violet-50/90",
        "backdrop-blur-lg",
        "dark:bg-slate-800/80",
        "dark:border-slate-700"
      );
  };
  const navDeactivated = () => {
    document
      .querySelector("._navbar")
      .classList.remove(
        "border-[#cecece]",
        "bg-violet-50/90",
        "backdrop-blur-lg",
        "dark:bg-slate-800/80",
        "dark:border-slate-700"
      );
  };
  const navEffect = () => {
    if (
      document.getElementById("homepage")
    ) {
      if (window.scrollY > 50) {
        navActivated();
      } else {
        navDeactivated();
      }
    } else {
      navActivated();
    }
  };
  const Menu = () => (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className="relative"
        onMouseLeave={hideServiceMenu}
      >
        <NavLink
          to="/services"
          id="navServiceMenuItem"
          className="hidden lg:block"
          onMouseEnter={() => {
            document
              .querySelector("._services-menu")
              .classList.remove("transform");
            document
              .querySelector("._services-menu")
              .classList.remove("-translate-y-[100rem]");
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
        <div id="service-lists-in-mob" className="mt-3 mb-4 lg:hidden">
          <ol className="flex flex-col">
            <ServicesList mobile={true} />
          </ol>
        </div>
        <div
          className="_services-menu bg-white dark:bg-slate-800 absolute -translate-y-[100rem] transition-all duration-500 ease-in-out px-6 shadow-md opacity-0 hidden md:block w-auto whitespace-nowrap"
          role="menu"
          style={{ zIndex: "10" }}
        >
          <ol
            className="custom flex flex-col gap-3 text-lg font-[500] text-slate-700 dark:text-white py-[1.5rem] "
            onClick={hideServiceMenu}
          >
            <ServicesList />
          </ol>
        </div>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="block lg:hidden">
        <a href="/#contact">Contact Us</a>
      </li>
    </>
  );
  const hideServiceMenu = () => {
    document.querySelector("._services-menu").classList.add("transform");
    document
      .querySelector("._services-menu")
      .classList.add("-translate-y-[100rem]");
    document.querySelector("._services-menu").classList.remove("opacity-100");
  };
  const hideDrawerMenu = () => {
    document.querySelector("._drawer-menu-layer").classList.add("hidden");
    document.querySelector("._drawer-menu").classList.add("transform");
    document.querySelector("._drawer-menu").classList.add("translate-x-full");
    document
      .querySelector("._drawer-menu")
      .classList.add("-translate-y-[100rem]");
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
  }, []);

  React.useEffect(() => {
    const servicesMenuList = document.querySelectorAll("._services-menu ol li");
    servicesMenuList.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        servicesMenuList.forEach((list) => {
          list.classList.remove("active");
        });
        li.classList.add("active");
      });
      li.addEventListener("mouseleave", () => {
        servicesMenuList.forEach((list) => {
          list.classList.remove("active");
        });
      });
    });
    navEffect();
    window.addEventListener("scroll", navEffect);
    if (!document.getElementById("homepage")) {
      document.querySelector("._ad").style.display = "none";
    } else {
      document.querySelector("._ad").style.display = "block";
    }
  }, [document.querySelector("._services-menu ol li")]);

  const initOffer = () => {
    const totalSeconds = Math.floor(
      (offerEndsIn.getTime() - new Date().getTime()) / 1000
    );
    const d = Math.floor(totalSeconds / 3600 / 24);
    const h = Math.floor(totalSeconds / 3600) % 24;
    const m = Math.floor((totalSeconds % 3660) / 60);
    const s = Math.floor(totalSeconds % 60);

    document.getElementById("offerDays").textContent = d + "d";
    document.getElementById("offerHours").textContent = h + "h";
    document.getElementById("offerMinutes").textContent = m + "m";
    document.getElementById("offerSeconds").textContent = s + "s";
  };

  React.useEffect(() => {
    const i = setInterval(() => {
      initOffer();
    }, 1000);
    initOffer();

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="_ad w-full relative bg-violet-100 dark:bg-gradient-to-r dark:from-[#410AC2] dark:to-violet-600 z-20 py-3">
        <div className="container mx-auto max-w-[1300px] text-slate-700 dark:text-white flex flex-col sm:flex-row justify-center sm:items-center gap-2 sm:gap-6 text-sm md:text-md lg:text-2md flex-wrap">
          <div className="md:ml-auto flex flex-wrap gap-1 md:gap-3">
            <p className="font-[600]">Black Friday Sale!</p>
            <p>Up to 20% off in all packages!</p>
          </div>
          <div className="flex md:flex">
            <code className="text-sm md:text-xl">
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerDays"
              >
                0d
              </span>
              :
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerHours"
              >
                0h
              </span>
              :
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerMinutes"
              >
                0m
              </span>
              :
              <span
                className="bg-white text-black px-2 py-1 rounded-md"
                id="offerSeconds"
              >
                0s
              </span>
            </code>
            <button
              className="ml-auto block sm:hidden"
              onClick={() => {
                document.querySelector("._ad").style.display = "none";
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <button
            className="ml-auto hidden sm:block"
            onClick={() => {
              document.querySelector("._ad").style.display = "none";
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className="_navbar sticky top-0 left-0 z-50 py-4 lg:p-0 bg-white/1 text-black dark:text-white border-b border-transparent"
        role="navigation"
      >
        <div className="container mx-auto flex justify-between lg:grid grid-cols-3 gap-4">
          <div className="_logo flex items-center">
            <NavLink to="/">
              <h1 className="font-medium text-lg flex items-center">
                <img
                  src="/logo.jpg"
                  alt="Videophics"
                  className="h-8 w-8 object-cover rounded-md mr-2"
                />
                <span>Videophics</span>
              </h1>
            </NavLink>
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
              className="bg-violet-700 text-white text-sm px-6 py-3 rounded-full from-violet-500 to-violet-700 bg-gradient-to-l hover:from-violet-600 hover:to-violet-800 active:scale-95 hidden md:block"
            >
              Contact Us
            </NavLink>
            <button
              className="text-black p-2 rounded-full active:scale-95 active:bg-gray-100 dark:text-white dark:active:bg-slate-700 dark:active:text-white"
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
                  .classList.toggle("-translate-y-[100rem]");
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
        className="_drawer-menu max-w-[380px] w-[70%] bg-white dark:bg-slate-800 dark:text-white fixed top-0 right-0 h-full transform translate-x-full -translate-y-[100rem] transition-all duration-500 ease-in-out p-6 shadow text-xl rounded-lg"
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
        <ol onClick={hideDrawerMenu}>
          <Menu />
        </ol>
      </div>
      <div
        className="_drawer-menu-layer fixed top-0 left-0 h-screen w-full hidden z-50 bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
        onClick={hideDrawerMenu}
      />
      <div className="bottom-to-top fixed right-4 bottom-4 z-50 hidden animate-bounce">
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
