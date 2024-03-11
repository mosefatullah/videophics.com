import React from "react";

export default function Navbar() {
 const Menu = () => (
  <>
   <li>
    <a href="/" className="active">
     Home
    </a>
   </li>
   <li>
    <a href="/contact">Services</a>
   </li>
   <li>
    <a href="/about">About</a>
   </li>
   <li>
    <a href="/contact">Contact</a>
   </li>
   <li>
    <a href="/contact">Blog</a>
   </li>
  </>
 );

 return (
  <>
   <div className="_navbar sticky top-0 left-0 z-50 text-black p-4 px-6 border-b-2">
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
     <ul className="_menu text-sm space-x-7 items-center hidden md:flex">
      <Menu />
     </ul>
     <div className="flex gap-5 md:gap-4 justify-end items-center">
      <button
       className="text-black md:p-2 rounded-full active:scale-95 active:bg-gray-100"
       onClick={() => {
        document
         .querySelector("._drawer-search-layer")
         .classList.toggle("hidden");
        document.querySelector("._drawer-search").classList.toggle("transform");
        document
         .querySelector("._drawer-search")
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
         d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
       </svg>
      </button>
      <button
       className="text-black md:p-2 rounded-full active:scale-95 active:bg-gray-100 block md:hidden"
       onClick={() => {
        document
         .querySelector("._drawer-menu-layer")
         .classList.toggle("hidden");
        document.querySelector("._drawer-menu").classList.toggle("transform");
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
   </div>
   <div
    className="_drawer-menu w-[300px] bg-white fixed top-0 left-0 h-full transform -translate-x-full transition-all duration-500 ease-in-out p-4 shadow"
    style={{ zIndex: "60" }}
   >
    <Menu />
   </div>
   <div
    className="_drawer-menu-layer fixed top-0 left-0  h-screen w-full hidden z-50 bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
    onClick={() => {
     document.querySelector("._drawer-menu-layer").classList.add("hidden");
     document.querySelector("._drawer-menu").classList.remove("translate-x-0");
    }}
   />
   <div
    className="_drawer-search fixed top-0 left-0 w-full h-[300px] bg-white transform -translate-y-full transition-all duration-500 ease-in-out p-4 shadow"
    style={{ zIndex: "60" }}
   >
    <div className="container mx-auto max-w-[1300px]">
     <div className="flex items-center gap-4 mt-5">
      <input
       type="search"
       placeholder="Search for something"
       className="w-full p-2 font-[500] md:text-[26px] border-b-2"
      />
     </div>
    </div>
   </div>
   <div
    className="_drawer-search-layer fixed top-0 left-0  h-screen w-full hidden z-50 bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
    onClick={() => {
     document.querySelector("._drawer-search-layer").classList.add("hidden");
     document
      .querySelector("._drawer-search")
      .classList.add("-translate-y-full");
    }}
   />
  </>
 );
}
