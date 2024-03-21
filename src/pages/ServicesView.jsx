import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

/* Components */
import NotFound from "./NotFound";

const Branding = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid grid-cols-2 gap-9 items-center">
          <div>
            <h1 className="text-5xl font-bold">Branding</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Elevate your brand with our comprehensive branding solutions. We
              help you create a strong brand identity that resonates with your
              audience.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Find out solutions!
            </a>
          </div>

          <img
            src="/images/static/brandingView.webp"
            alt="Branding"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-8 px-4" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Branding Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="/images/static/mr4JG4SYOF8-unsplash.jpg"
                  alt="Logo Design"
                  className="w-full object-cover rounded-md mx-auto"
                  style={{ aspectRatio: "3/2" }}
                />
                <h3 className="text-2xl font-semibold mt-4">Logo Design</h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                  Create a memorable logo to represent your brand across all
                  platforms.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/static/QL0FAxaq2z0-unsplash.jpg"
                  alt="Brand Messaging"
                  className="w-full object-cover rounded-md mx-auto"
                  style={{ aspectRatio: "3/2" }}
                />
                <h3 className="text-2xl font-semibold mt-4">Brand Messaging</h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                  Develop a unique brand voice that resonates with your
                  audience.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/static/yeB9jDmHm6M-unsplash.jpg"
                  alt="Social Media Branding"
                  className="w-full object-cover rounded-md mx-auto"
                  style={{ aspectRatio: "3/2" }}
                />
                <h3 className="text-2xl font-semibold mt-4">
                  Social Media Branding
                </h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                  Create a consistent brand image across all social media
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Design = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid grid-cols-2 gap-9 items-center">
          <div>
            <h1 className="text-5xl font-bold">UI/UX & Web Design</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Create a stunning user interface and user experience with our
              design solutions. We help you build a visually appealing website
              that is easy to navigate and use.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Fix your design!
            </a>
          </div>

          <img
            src="/images/static/designOne.webp"
            alt="Branding"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-8 px-4" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Design Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="/images/static/IyaNci0CyRk-unsplash.jpg"
                  alt="UI/UX Design"
                  className="w-full object-cover rounded-md mx-auto"
                  style={{ aspectRatio: "3/2" }}
                />
                <h3 className="text-2xl font-semibold mt-4">UI/UX Design</h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                  Create a visually appealing and user-friendly interface for
                  your website or app.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/static/bs2Ba7t69mM-unsplash.jpg"
                  alt="Web Design"
                  className="w-full object-cover rounded-md mx-auto"
                  style={{ aspectRatio: "3/2" }}
                />
                <h3 className="text-2xl font-semibold mt-4">Web Design</h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                  Build a stunning website that is easy to navigate and use.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/static/v9vII5gV8Lw-unsplash.jpg"
                  alt="Graphic Design"
                  className="w-full object-cover rounded-md mx-auto"
                  style={{ aspectRatio: "3/2" }}
                />
                <h3 className="text-2xl font-semibold mt-4">Graphic Design</h3>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                  Create visually appealing graphics for your website and social
                  media.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default function ServicesView() {
  const service =
    useParams().service.charAt(0).toUpperCase() +
    useParams().service.slice(1).replace(/-/g, " ");

  const allowedPaths = [
    "branding",
    "marketing",
    "development",
    "design",
    "content-writing",
    "bug-fixing",
  ];

  const componentsList = {
    branding: <Branding />,
    design: <Design />,
  };

  if (allowedPaths.includes(useParams().service)) {
    return (
      <>
        <Helmet>
          <title>
            {service
              ? "Videophics" + service + " | Agency Services"
              : "Services - Videophics"}
          </title>
        </Helmet>
        {useParams().service && componentsList[useParams().service] ? (
          componentsList[useParams().service]
        ) : (
          <NotFound />
        )}
      </>
    );
  } else {
    return <NotFound />;
  }
}
