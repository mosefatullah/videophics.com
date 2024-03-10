import React from "react";
import Navbar from "../assets/components/Navbar";

export default function Home() {
 return (
  <>
   <Navbar />
   <div className="flex justify-center items-center h-screen bg-slate-50">
    <h1 className="text-4xl font-bold">Home</h1>
   </div>
  </>
 );
}
