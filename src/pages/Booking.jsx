import React from "react";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Booking() {
  return (
    <>
      <Navbar />
      <main className="bg-violet-50" role="main">
        <div className="_booking-section py-[8rem] md:min-h-[calc(100vh-80px)] bg-violet-100">
          <div className="container mx-auto max-w-[1300px] flex items-center">
            <div className="col-6 text-center">
              <h3 className="text-2xl lg:text-3xl font-[600] mb-4 text-purple-900 leading-10">
                Book an appointment
              </h3>
              <p className="text-[14px] md:text-[17px] text-slate-500 leading-6 md:leading-7">
                Book an appointment with us and let's talk about your project.
              </p>

              <button
                className="bg-purple-700 text-white text-sm md:text-[16px] px-8 py-3 rounded-md from-purple-500 to-purple-700 bg-gradient-to-l hover:from-purple-600 hover:to-purple-800 active:scale-95 mt-8"
                onClick={() => {
                  Calendly.initPopupWidget({
                    url: "https://calendly.com/videophics?hide_gdpr_banner=1",
                  });
                  return false;
                }}
              >
                Book a demo
              </button>
            </div>
            <div className="col-6">
              <div className="_booking-process mt-10 flex flex-col gap-12">
                <div className="flex flex-col justify-center items-center">
                  <p className="bg-purple-700 text-white text-4xl md:text-3xl font-[600] mb-4 text-purple-900 leading-10 rounded-full w-16 h-16 flex items-center justify-center">
                    1
                  </p>
                  <h4 className="text-lg md:text-xl mb-4 text-purple-900 leading-8">
                    Choose an appointment type
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="bg-purple-700 text-white text-4xl md:text-3xl font-[600] mb-4 text-purple-900 leading-10 rounded-full w-16 h-16 flex items-center justify-center">
                    2
                  </p>
                  <h4 className="text-lg md:text-xl mb-4 text-purple-900 leading-8">
                    Choose a date and time
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="bg-purple-700 text-white text-4xl md:text-3xl font-[600] mb-4 text-purple-900 leading-10 rounded-full w-16 h-16 flex items-center justify-center">
                    3
                  </p>
                  <h4 className="text-lg md:text-xl mb-4 text-purple-900 leading-8">
                    Confirmation by email
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
