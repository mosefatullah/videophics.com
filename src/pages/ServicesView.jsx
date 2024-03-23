import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

/* Components */
import NotFound from "./NotFound";
import Animated from "./components/Animated";

const Branding = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid lg:grid-cols-2 gap-9 items-center py-12">
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
        <section className="_list-section min-h-screen py-12 pb-20" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Branding Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/mr4JG4SYOF8-unsplash.jpg"
                    alt="Logo Design"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Logo Design</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create a memorable logo to represent your brand across all
                      platforms.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/QL0FAxaq2z0-unsplash.jpg"
                    alt="Brand Messaging"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Brand Messaging</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Develop a unique brand voice that resonates with your
                      audience.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/yeB9jDmHm6M-unsplash.jpg"
                    alt="Social Media Branding"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Social Media Branding
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create a consistent brand image across all social media
                      platforms.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/IyaNci0CyRk-unsplash.jpg"
                    alt="UI/UX Design"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">UI/UX Design</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create a visually appealing and user-friendly interface
                      for your website or app.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/bs2Ba7t69mM-unsplash.jpg"
                    alt="Web Design"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Web Design</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Build a stunning website that is easy to navigate and use.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/v9vII5gV8Lw-unsplash.jpg"
                    alt="Graphic Design"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Graphic Design</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create visually appealing graphics for your website and
                      social media.
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const BrandAdvisory = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid lg:grid-cols-2 gap-9 items-center py-12">
          <div>
            <h1 className="text-5xl font-bold">Brand Advisory</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Get expert advice on building and growing your brand with our
              brand advisory solutions. We help you develop a strategic brand
              plan that aligns with your business goals.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Get advice for your brand!
            </a>
          </div>

          <img
            src="/images/static/designOne.webp"
            alt="Brand Advisory"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-12 pb-20" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Brand Advisory Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/5fNmWej4tAA-unsplash.jpg"
                    alt="Brand Consulting"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Brand Consulting</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Get expert advice on building and growing your brand with
                      a strategic brand plan.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/QL0FAxaq2z0-unsplash.jpg"
                    alt="Brand Strategy"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Brand Strategy</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Develop a comprehensive brand strategy that defines your
                      brand's identity and positioning.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/PEJtZfT6C1Q-unsplash.jpg"
                    alt="Brand Messaging"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Brand Messaging</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Develop a compelling brand story that resonates with your
                      audience and communicates your brand values.
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Development = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid lg:grid-cols-2 gap-9 items-center py-12">
          <div>
            <h1 className="text-5xl font-bold">Web Development</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Build a stunning website or web application with our development
              solutions. We help you create a functional and user-friendly web
              app that meets your business needs.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Develop your website!
            </a>
          </div>

          <img
            src="/images/static/eYpcLDXHVb0-unsplash.jpg"
            alt="Web Development"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-12 pb-20" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/ayjnmG4oUX4-unsplash.jpg"
                    alt="Frontend Development"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Frontend Development
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create frontend interfaces that are visually appealing and
                      user-friendly.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/M5tzZtFCOfs-unsplash.jpg"
                    alt="Backend Development"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Backend Development
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Develop backend systems that power your website or web
                      application.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/ehyV_XOZ4iA-unsplash.jpg"
                    alt="API Development"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">API Development</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Build custom APIs to connect your website or app to
                      external services.
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Marketing = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid lg:grid-cols-2 gap-9 items-center py-12">
          <div>
            <h1 className="text-5xl font-bold">Digital Marketing</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Grow your online presence with our digital marketing solutions. We
              help you reach your target audience and drive traffic to your
              website or app.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Boost your marketing!
            </a>
          </div>

          <img
            src="/images/static/tZc3vjPCk-Q-unsplash.jpg"
            alt="Marketing"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-12 pb-20" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Marketing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/shrXn8S8QU-unsplash.jpg"
                    alt="SEO"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">SEO</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Improve your website's search engine rankings and
                      visibility.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/kLmt1mpGJVg-unsplash.jpg"
                    alt="Social Media Marketing"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Social Media Marketing
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Promote your brand and engage with your audience on social
                      media platforms.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/3GZNPBLImWc-unsplash.jpg"
                    alt="Content Marketing"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Content Marketing
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create valuable content that attracts and engages your
                      target audience.
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const ContentWriting = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid lg:grid-cols-2 gap-9 items-center py-12">
          <div>
            <h1 className="text-5xl font-bold">Content Writing</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Create engaging and informative content with our content writing
              solutions. We help you develop high-quality content that drives
              traffic and conversions.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Write your content!
            </a>
          </div>

          <img
            src="/images/static/zIwAchjDirM-unsplash.jpg"
            alt="Content Writing"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-12 pb-20" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Content Writing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/FHnnjk1Yj7Y-unsplash.jpg"
                    alt="Blog Writing"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Blog Writing</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Create engaging blog posts that attract and inform your
                      audience.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/EKy2OTRPXdw-unsplash.jpg"
                    alt="Copywriting"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Copywriting</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Develop compelling copy that drives conversions and sales.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/XJXWbfSo2f0-unsplash.jpg"
                    alt="SEO Writing"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">SEO Writing</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Write SEO-friendly content that ranks well in search
                      engines.
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const BugFixing = () => {
  return (
    <>
      <div className="container mx-auto text-slate-800 dark:text-white">
        <section className="_hero-section min-h-[90vh] grid lg:grid-cols-2 gap-9 items-center py-12">
          <div>
            <h1 className="text-5xl font-bold">Bug Fixing</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mt-8 leading-8">
              Fix bugs and issues in your website or web application with our
              bug fixing solutions. We help you identify and resolve technical
              problems to ensure a smooth user experience.
            </p>
            <a
              href="#list"
              className="inline-block bg-orange-600 text-white px-6 py-3 mt-8 rounded-full"
            >
              Fix your bugs!
            </a>
          </div>

          <img
            src="/images/static/wvJuYrM5iuw-unsplash.jpg"
            alt="Bug Fixing"
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9" }}
          />
        </section>
        <section className="_list-section min-h-screen py-12 pb-20" id="list">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Bug Fixing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/5fNmWej4tAA-unsplash.jpg"
                    alt="Website Debugging"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Website Debugging
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Identify and fix technical issues in your website to
                      ensure optimal performance.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/XJXWbfSo2f0-unsplash.jpg"
                    alt="Code Refactoring"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">Code Refactoring</h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Improve the structure and readability of your code for
                      better performance.
                    </p>
                  </div>
                </div>
              </Animated>
              <Animated varient="fade-in">
                <div>
                  <img
                    src="/images/static/GNyjCePVRs8-unsplash.jpg"
                    alt="Database Optimization"
                    className="w-full object-cover rounded-t-md mx-auto bg-slate-300 bg-slate-500"
                    style={{ aspectRatio: "3/2" }}
                  />
                  <div className="bg-slate-300 dark:bg-slate-800 p-6 rounded-b-md">
                    <h3 className="text-2xl font-semibold">
                      Database Optimization
                    </h3>
                    <p className="mt-3 text-slate-500 dark:text-slate-400">
                      Optimize your database to improve data retrieval and
                      storage efficiency.
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Layout = ({ children }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);
  return children;
};

export default function ServicesView() {
  const service =
    useParams().service.charAt(0).toUpperCase() +
    useParams().service.slice(1).replace(/-/g, " ");

  const allowedPaths = [
    "branding",
    "development",
    "brand-advisory",
    "marketing",
    "content-writing",
    "bug-fixing",
  ];

  const componentsList = {
    branding: (
      <Layout>
        <Branding />
      </Layout>
    ),
    development: (
      <Layout>
        <Development />
      </Layout>
    ),
    "brand-advisory": (
      <Layout>
        <BrandAdvisory />
      </Layout>
    ),
    marketing: (
      <Layout>
        <Marketing />
      </Layout>
    ),
    "content-writing": (
      <Layout>
        <ContentWriting />
      </Layout>
    ),
    "bug-fixing": (
      <Layout>
        <BugFixing />
      </Layout>
    ),
  };

  if (allowedPaths.includes(useParams().service)) {
    return (
      <>
        <Helmet>
          <title>
            {service
              ? service + " | Videophics Services"
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
