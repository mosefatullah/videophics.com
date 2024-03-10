import React from "react";

export default function Navbar() {
 return (
  <div className="_navbar text-black p-4 px-6 border-b-2">
   <div className="container mx-auto grid grid-cols-3 gap-4">
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
    <ul className="_menu text-sm flex space-x-7 items-center">
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
    </ul>
    <div className="flex gap-2 justify-end items-center">
     <button className="text-black px-4 py-2 rounded-md">
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
     <button className="text-black px-4 py-2 rounded-md">
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
 );
}
