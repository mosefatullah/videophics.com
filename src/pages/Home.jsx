import React from "react";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-violet-50" role="main">
        <section className="_hero-section relative py-10 min-h-[calc(100vh-80px)] flex justify-center">
          <div className="_sketch h-[200px] w-[100px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 left-0" />
          <div className="_sketch h-[200px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter right-0 md:left-[40%] bottom-0" />
          <div className="_sketch h-[200px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 right-0 hidden md:block" />
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[1300px]">
            <div className="flex flex-col justify-center items-start z-10 md:order-2">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-[600] mb-4 text-slate-700 leading-10">
                Innovative minds are{" "}
                <span className="text-violet-500">discovering</span> a better
                future
              </h1>
              <p className="text-[14px] md:text-[17px] mt-4 mb-7 text-slate-500 leading-6 md:leading-7">
                Videophics is a graphic design agency dedicated to empowering
                brands, businesses, and individuals through impactful visual
                storytelling. We craft compelling designs for a wide range of
                clients, including companies, organizations, publications, and
                personal promotions.
              </p>
              <button
                className="px-7 text-sm md:text-[16px] md:px-8 py-3 text-white rounded-md from-violet-400 to-violet-600 bg-gradient-to-l hover:from-violet-500 hover:to-violet-700 active:scale-95"
                title="Clixk here to learn more"
              >
                Learn More &rarr;
              </button>
            </div>
            <div className="flex justify-center items-center md:justify-end z-10">
              <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                autoPlay
                muted
                controls={false}
                alt="A visual representation of videophics"
                className="object-cover rounded-lg max-h-[500px] w-full md:max-w-[700px] bg-purple-100"
                style={{
                  aspectRatio: "16/9",
                }}
              />
            </div>
          </div>
        </section>
        <section className="_booking-section my-10 py-[8rem] md:min-h-[calc(100vh-80px)] bg-violet-500 flex flex-col justify-center items-center">
          <div className="container mx-auto max-w-[1300px]">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[600] mb-4 text-white leading-10">
                Book an Appointment
              </h1>
              <p className="text-[14px] md:text-[17px] text-white leading-6 md:leading-7 mb-8">
                Schedule an appointment with us and let's get started on your
                project.
              </p>
              <a
                href="/booking"
                className="bg-white text-violet-500 text-sm md:text-[16px] px-8 py-3 rounded-md from-white to-gray-100 bg-gradient-to-l hover:from-gray-100 hover:to-gray-200 active:scale-95"
                title="Click here to book an appointment"
              >
                Book Now &rarr;
              </a>
            </div>
          </div>
        </section>
        <section className="_services-section py-[5rem] md:min-h-[calc(100vh-80px)]">
          <div className="container mx-auto max-w-[1300px]">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[600] mb-4 text-slate-700 leading-10">
                Our Services
              </h1>
              <p className="text-[14px] md:text-[17px] text-slate-500 leading-6 md:leading-7">
                Look at our services and see what we can do for you.
              </p>
              <a
                href="/services"
                className="text-sm md:text-[16px] mt-4 text-violet-500 hover:underline"
                title="Click here to view all services"
              >
                View All Services &rarr;
              </a>
            </div>
          </div>
          <div className="_services-box mt-10 md:grid grid-cols-2 gap-12">
            <div>
              <div className="bg-purple-100 w-full h-full min-h-[300px]" />
            </div>
            <div>
              <div className="bg-white w-full h-full min-h-[300px]" />
            </div>
          </div>
        </section>
        <section className="_clients-section bg-white py-[3rem] md:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
          <div className="container mx-auto max-w-[1300px]">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-[600] mb-4 text-purple-900 leading-10">
                We're trusted by our clients
              </h3>
            </div>
            <div className="flex justify-center items-center gap-4 mt-10">
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
