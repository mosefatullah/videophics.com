import React from "react";
import Navbar from "../assets/components/Navbar";

export default function Home() {
 return (
  <>
   <Navbar />
   <div className="bg-violet-50">
    <div className="_hero-section px-8 py-10 md:py-0 relative min-h-[calc(100vh-73px)] flex justify-center">
     <div className="_sketch h-[200px] w-[100px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 left-0" />
     <div className="_sketch h-[200px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter left-[40%] bottom-0" />
     <div className="_sketch h-[200px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 right-0 hidden md:block" />
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[1300px]">
      <div className="flex flex-col justify-center items-start z-10">
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-[600] mb-4 text-violet-700 leading-10">
        Innovative minds are{" "}
        <span className="text-violet-500">discovering</span> a better future
       </h1>
       <p className="text-[14px] md:text-[17px] my-4 mb-7 text-slate-500 leading-6 md:leading-7">
        We are a team of professionals who are passionate about creating
        engaging and visually stunning videos for our clients. We are here to
        help you grow your business with our creative and innovative ideas.
       </p>
       <button className="px-7 text-sm md:text-[16px] md:px-8 py-3 text-white rounded-md from-violet-400 to-violet-600 bg-gradient-to-l hover:from-violet-500 hover:to-violet-700 transition-all duration-500 active:scale-95">
        Get Started
       </button>
      </div>
      <div className="flex justify-center items-center md:justify-end z-10">
       <img
        src="/logo.jpg"
        alt="Videophics"
        className="object-cover rounded-lg max-h-[500px] w-full md:w-[500px]"
        style={{
         aspectRatio: "3/3",
        }}
       />
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
