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
              <p className="text-[14px] md:text-[17px] mt-4 mb-7 text-slate-500 leading-6 md:leading-7 _heroPara">
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
              <button
                className="bg-white text-violet-500 text-sm md:text-[16px] px-8 py-3 rounded-md from-white to-gray-100 bg-gradient-to-l hover:from-gray-100 hover:to-gray-200 active:scale-95"
                title="Click here to book an appointment"
                onClick={() => {
                  Calendly.initPopupWidget({
                    url: "https://calendly.com/videophics?hide_gdpr_banner=1",
                  });
                  return false;
                }}
              >
                Book Now &rarr;
              </button>
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
        <section className="_clients-section bg-white py-[7rem] md:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
          <div className="container mx-auto max-w-[1300px]">
            <div className="text-center">
              <p className="text-sm text-slate-500 leading-6 md:leading-7 uppercase mb-2">
                Our Clients
              </p>
              <h3 className="text-3xl lg:text-4xl font-[600] mb-2 text-slate-700 leading-10">
                We're trusted by our clients.
              </h3>
            </div>
            <div className="flex justify-center items-center gap-4 mt-10 flex-wrap">
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
              <div className="bg-purple-100 w-32 h-32 rounded-md" />
            </div>
          </div>
        </section>
        <section
          className="_contact-section py-[8rem] md:min-h-[calc(100vh-80px)] bg-violet-100 flex flex-col justify-center items-center"
          id="contact"
        >
          <div className="container mx-auto max-w-[1300px] grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl lg:text-5xl font-[600] mb-4 text-slate-500 leading-10">
                Join us and let's talk about your project.
              </h3>
            </div>
            <div>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  let msgbody = `Hello, I am ${
                    document.getElementById("name").value &&
                    document.getElementById("name").value + " "
                  }from ${
                    document.getElementById("company").value
                  } and I am interested in your ${
                    document.getElementById("service").value
                  } service.\n\nMy budget range is ${
                    document.getElementById("range").value
                  }. Here are the details of my project:\n\n${
                    document.getElementById("message").value
                  }
                    `;

                  window.location.href = `mailto:${
                    document.getElementById("email").value
                  }?subject=Inquiry from ${
                    document.getElementById("name").value
                  }&body=${encodeURIComponent(msgbody)}`;
                }}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500"
                    placeholder="Ex. Abdullah"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm text-slate-500">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500"
                      placeholder="Example Inc."
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-slate-500">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm text-slate-500">
                      Select Service *
                    </label>
                    <select
                      className="p-3 rounded-md border-2 bg-white border-slate-200 focus:outline-none focus:border-violet-500"
                      id="service"
                      required
                    >
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="range" className="text-sm text-slate-500">
                      Budget Range *
                    </label>
                    <select
                      className="p-3 rounded-md border-2 bg-white border-slate-200 focus:outline-none focus:border-violet-500"
                      id="range"
                      required
                    >
                      <option value="0-1000">$0 - $1000</option>
                      <option value="1000-5000">$1000 - $5000</option>
                      <option value="5000-10000">$5000 - $10000</option>
                      <option value="10000+">$10000+</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-slate-500">
                    Details *
                  </label>
                  <textarea
                    id="message"
                    className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500"
                    placeholder="Your project details"
                    required
                  />
                </div>
                <button
                  className="bg-purple-700 text-white text-sm md:text-[16px] px-8 py-3 rounded-md from-purple-500 to-purple-700 bg-gradient-to-l hover:from-purple-600 hover:to-purple-800 active:scale-95"
                  type="submit"
                  title="Click here to submit your message"
                >
                  Submit inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
