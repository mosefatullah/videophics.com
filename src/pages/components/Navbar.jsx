import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const Menu = () => (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  React.useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.querySelector(".bottom-to-top").style.display = "block";
      } else {
        document.querySelector(".bottom-to-top").style.display = "none";
      }
    };
  }, []);

  return (
    <>
      <nav
        className="_navbar sticky top-0 left-0 z-50 text-black border-b-2 py-3 md:p-0"
        role="navigation"
      >
        <div className="container mx-auto flex justify-between md:grid grid-cols-3 gap-4 max-w-[1300px]">
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
          <ul className="_menu text-sm items-center hidden md:flex">
            <Menu />
          </ul>
          <div className="flex gap-5 md:gap-4 justify-end items-center">
            <a
              href="/#contact"
              className="bg-purple-700 text-white text-sm px-6 py-3 rounded-full from-purple-500 to-purple-700 bg-gradient-to-l hover:from-purple-600 hover:to-purple-800 active:scale-95"
            >
              Contact Us
            </a>
            <button
              className="text-black p-2 rounded-full active:scale-95 active:bg-gray-100 block md:hidden"
              onClick={() => {
                document
                  .querySelector("._drawer-menu-layer")
                  .classList.toggle("hidden");
                document
                  .querySelector("._drawer-menu")
                  .classList.toggle("transform");
                document
                  .querySelector("._drawer-menu")
                  .classList.toggle("translate-x-0");
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
        className="_drawer-menu w-[300px] bg-white fixed top-0 left-0 h-full transform -translate-x-full transition-all duration-500 ease-in-out p-4 shadow"
        role="menu"
        style={{ zIndex: "60" }}
      >
        <Menu />
      </div>
      <div
        className="_drawer-menu-layer fixed top-0 left-0  h-screen w-full hidden z-50 bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
        onClick={() => {
          document.querySelector("._drawer-menu-layer").classList.add("hidden");
          document
            .querySelector("._drawer-menu")
            .classList.remove("translate-x-0");
        }}
      />
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
