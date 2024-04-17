import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Link } from "react-router-dom";

/* Components */
import Collapsible from "./components/Collapsible";
import Contact from "./components/Contact";
import Animated from "./components/Animated";
import Booking from "./components/Booking";

export default function Home() {
  const [isMuted, setMuted] = React.useState(true);

  const HGFRJh = () => (<div className="mt-3 flex gap-3 flex-col items-center sm:flex-row">
    <NavLink to="/about-us">
      <button
        className="px-7 text-md md:text-[16px] md:px-8 py-3 text-white rounded-full from-violet-400 to-violet-600 bg-gradient-to-l hover:from-violet-500 hover:to-violet-700 active:scale-95 flex gap-1 items-center justify-center w-fit min-w-[200px]"
        title="Click here to learn more"
      >
        See more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>

      </button>
    </NavLink>
    <button
      className="px-7 text-sm md:text-[16px] md:px-8 py-3 dark:text-white rounded-full bg-transparent border border-violet-500 active:scale-95 hover:bg-violet-500/20 hover:border-violet-100 w-fit"
      title="Click here to compare our plans"
    >
      Compare our plans &rarr;
    </button>
  </div>);

  return (
    <div id="homepage">
      <Helmet>
        <title>
          Videophics - Your Premier Branding Agency & Branding Experts
        </title>
        <meta
          name="description"
          content="Videophics is a leading branding agency dedicated to empowering your brand's growth and success. Through our expertise in emotion-driven storytelling and strategic branding, we create enduring experiences that resonate with your audience."
        />

        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <div className="hidden md:block absolute right-0 top-0 h-[400px] opacity-80 dark:opacity-1 w-[500px] bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-l-full z-5" />
      <div className="hidden md:block absolute right-0 top-[300px] h-[200px] w-[200px] bg-gradient-to-r from-purple-200 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-full z-5" />
      <section className="_hero-section relative py-10 lg:min-h-[calc(100vh-80px)] flex justify-center">

        <div className="_sketch h-[100px] w-[200px] dark:h-[200px] dark:w-[300px] absolute from-violet-700 dark:from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-20 dark:top-[-10px] left-0 dark:left-[-40px] dark:opacity-80" />
        <div className="_sketch h-[200px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter right-0 md:left-[40%] bottom-10 dark:hidden animate-[bounce_3s_infinite]" />
        <div className="_sketch h-[100px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 right-0 hidden md:block dark:bottom-20 dark:top-auto dark:opacity-50 animate-[bounce_3s_infinite]" />

        <div className="container mx-auto max-w-[1300px] flex flex-col sm:gap-10 lg:items-center">
          <Animated varient="fade-up" speed="fast">
            <div className="flex flex-col justify-center md:items-center md:text-center z-10 max-w-[620px] lg:max-w-[730px] mx-auto lg:mx-0 md:py-10">
              <h1
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-[600] mb-4 text-slate-700 dark:text-white sm:leading-10 xl:leading-13"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                <Animated varient="fade-left" className="inline">
                  Branding is all about
                </Animated>{" "}
                <Animated varient="fade-right" className="inline">
                  <span className="text-violet-500 dark:text-violet-400">
                    storytelling
                  </span>
                  . We{" "}
                  <Animated varient="fade-right" className="inline">
                    <span className="text-violet-500 dark:text-violet-400">
                      visualize
                    </span>
                  </Animated>{" "}
                  your touchy stories
                </Animated>
              </h1>
              <p className="text-[14px] md:text-[17px] mt-4 mb-7 text-slate-500 dark:text-slate-400 leading-6 md:leading-7 _heroPara">
                We bring brands and people closer. With a focus on
                emotion-driven connections, we craft experiences that resonate
                and endure.
              </p>
              <div className="hidden sm:block">
                <HGFRJh />
              </div>
            </div>
          </Animated>

          <div className="z-10 w-full">
            <div className="bg-violet-100 dark:bg-slate-700 rounded-lg relative md:max-w-[75%] mx-auto">
              <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                autoPlay
                muted={isMuted}
                controls={false}
                disablePictureInPicture
                alt="A visual representation of videophics"
                className="object-cover rounded-lg w-full"
                id="hero-video"
                style={{
                  aspectRatio: "16/9",
                }}
              />
              <button
                className="absolute top-[10px] right-[10px] bg-violet-700 text-white p-2 hover:scale-90 active:opacity-75 active:scale-95 rounded-full"
                onClick={() => {
                  document.getElementById("hero-video").muted = !isMuted;
                  setMuted(!isMuted);
                }}
              >
                {!isMuted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="block sm:hidden mt-8">
              <HGFRJh />
            </div>
          </div>
        </div>
      </section>
      <section className="_services-section bg-violet-50/50 mt-9 dark:mt-0 dark:bg-transparent py-[7rem] md:min-h-[calc(100vh-80px)]">
        <div className="container mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 md:leading-7 uppercase">
              Our Services
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-[600] mb-4 text-slate-700 dark:text-white leading-8 md:leading-10 mt-2">
              Growing Brands. Touching Souls.
            </h1>
          </div>
          <div className="_services-box mt-[4rem] grid md:grid-cols-2 gap-12">
            <div>
              <Animated varient="motion-left" speed="fast">
                <Animated varient="fade-in" speed="fast">
                  <Link to="/services/branding">
                    <div className="main bg-white dark:bg-slate-800 w-full h-full min-h-[300px] flex items-center rounded-lg">
                      <div className="p-6">
                        <img
                          src="/images/static/branding.png"
                          alt="Branding"
                          className="w-15 h-15 mb-5"
                        />
                        <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                          <span className="text-violet-700">1.</span> Branding
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We create brand identities, brand guidelines, and
                          more.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Animated>
              </Animated>
            </div>
            <div>
              <Animated varient="motion-left" speed="fast">
                <Animated varient="fade-in" speed="fast">
                  <Link to="/services/development">
                    <div className="main bg-white dark:bg-slate-800 w-full h-full min-h-[300px] flex items-center rounded-lg">
                      <div className="p-6">
                        <img
                          src="/images/static/development.png"
                          alt="Design"
                          className="w-15 h-15 mb-5"
                        />
                        <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                          <span className="text-violet-700">2.</span>{" "}
                          Development
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We develop websites, web applications, and more.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Animated>
              </Animated>
            </div>
            <div>
              <Animated varient="motion-right" speed="fast">
                <Animated varient="fade-in" speed="fast">
                  <Link to="/services/brand-advisory">
                    <div className="main bg-white dark:bg-slate-800 w-full h-full min-h-[300px] flex items-center rounded-lg">
                      <div className="p-6">
                        <img
                          src="/images/static/advisory.png"
                          alt="BNrand Advisory"
                          className="w-15 h-15 mb-5"
                        />
                        <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                          <span className="text-violet-700">3.</span> Brand
                          Advisory
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We provide brand advisory services to help you grow.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Animated>
              </Animated>
            </div>
            <div>
              <Animated varient="motion-right" speed="fast">
                <Animated varient="fade-in" speed="fast">
                  <Link to="/services/marketing">
                    <div className="main bg-white dark:bg-slate-800 w-full h-full min-h-[300px] flex items-center rounded-lg">
                      <div className="p-6">
                        <img
                          src="/images/static/marketing.png"
                          alt="Marketing"
                          className="w-15 h-15 mb-5"
                        />
                        <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                          <span className="text-violet-700">4.</span> Marketing
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We market your brand, products, and services.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Animated>
              </Animated>
            </div>
            <div>
              <Animated varient="motion-left" speed="fast">
                <Animated varient="fade-in" speed="fast">
                  <Link to="/services/content-writing">
                    <div className="main bg-white dark:bg-slate-800 w-full h-full min-h-[300px] flex items-center rounded-lg">
                      <div className="p-6">
                        <img
                          src="/images/static/content.png"
                          alt="Content Writing"
                          className="w-15 h-15 mb-5"
                        />
                        <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                          <span className="text-violet-700">5.</span> Content
                          Writing
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We write compelling content for your brand.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Animated>
              </Animated>
            </div>
            <div>
              <Animated varient="motion-left" speed="fast">
                <Animated varient="fade-in" speed="fast">
                  <Link to="/services/software-testing">
                    <div className="main bg-white dark:bg-slate-800 w-full h-full min-h-[300px] flex items-center rounded-lg">
                      <div className="p-6">
                        <img
                          src="/images/static/patch.png"
                          alt="Software Testing"
                          className="w-15 h-15 mb-5"
                        />
                        <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                          <span className="text-violet-700">6.</span> Software
                          Testing
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We test your software to ensure quality and
                          performance.
                        </p>
                      </div>
                    </div>
                  </Link>
                </Animated>
              </Animated>
            </div>
          </div>
          <div className="_unique-features pt-[10rem] flex flex-col gap-12">
            <div className="min-h-[40vh] flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-[600] text-slate-700 dark:text-white leading-10 text-center mb-2">
                Why Choose Us?
              </h3>
              <p className="text-[14px] md:text-[17px] text-slate-500 dark:text-slate-400 leading-6 md:leading-7 text-center mb-[4rem]">
                What makes us different from others in the industry.
              </p>
              <div className="grid md:grid-cols-3 gap-12">
                <Animated varient="fade-up">
                  <div className="flex flex-col bg-slate-200 dark:bg-slate-800 p-6 rounded-lg h-full">
                    <img
                      src="/images/static/organic.png"
                      alt="Quality"
                      className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-[600] mb-2 text-slate-700 dark:text-white leading-8">
                      Organic Reach
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                      We help you reach your audience organically without any
                      paid ads.
                    </p>
                  </div>
                </Animated>
                <Animated varient="fade-up">
                  <div className="flex flex-col bg-slate-200 dark:bg-slate-800 p-6 rounded-lg h-full">
                    <img
                      src="/images/static/emotion.png"
                      alt="Emotion"
                      className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-[600] mb-2 text-slate-700 dark:text-white leading-8">
                      Emotional Connection
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                      We help you building emotional connection between brand
                      and customer.
                    </p>
                  </div>
                </Animated>
                <Animated varient="fade-up">
                  <div className="flex flex-col bg-slate-200 dark:bg-slate-800 p-6 rounded-lg h-full">
                    <img
                      src="/images/static/story.png"
                      alt="Story"
                      className="w-16 h-16 mb-4"
                    />
                    <h4 className="text-xl font-[600] mb-2 text-slate-700 dark:text-white leading-8">
                      Story Telling
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                      We help you finding the real connecting story of your
                      brand.
                    </p>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="_team-section bg-violet-50/50 dark:bg-transparent py-[8rem] pt-[6rem] flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-[1300px]">
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 md:leading-7 mb-2 uppercase">
              Our Team
            </p>
            <h3 className="text-3xl lg:text-4xl font-[600] mb-4 text-slate-700 dark:text-white leading-10">
              Meet Our Team
            </h3>
          </div>
          <div className="_persons grid sm:grid-cols-2 md:grid-cols-3 gap-9 pt-[4rem]">
            <Animated varient="fade-in">
              <div className="flex flex-col items-center">
                <img
                  src="/images/static/persons/saadalamin.jpg"
                  className="w-full max-w-[300px] bg-violet-300 rounded-md object-cover"
                  style={{ aspectRatio: "3/3" }}
                />
                <h4 className="text-xl font-[600] mt-4 text-slate-700 dark:text-white leading-8">
                  Saad Al Amin
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  CEO & Founder
                </p>
              </div>
            </Animated>
            <Animated varient="fade-in">
              <div className="flex flex-col items-center">
                <img
                  src=""
                  className="w-full max-w-[300px] bg-violet-300 rounded-md object-cover"
                  style={{ aspectRatio: "3/3" }}
                />
                <h4 className="text-xl font-[600] mt-4 text-slate-700 dark:text-white leading-8">
                  Unknown
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  Unknown
                </p>
              </div>
            </Animated>
            <Animated varient="fade-in">
              <div className="flex flex-col items-center">
                <img
                  src="/images/static/persons/nishat.jpg"
                  className="w-full max-w-[300px] bg-violet-300 rounded-md object-cover"
                  style={{ aspectRatio: "3/3" }}
                />
                <h4 className="text-xl font-[600] mt-4 text-slate-700 dark:text-white leading-8">
                  Zadid Al Lisan
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  Board Member
                </p>
              </div>
            </Animated>
            <Animated varient="fade-in">
              <div className="flex flex-col items-center">
                <img
                  src=""
                  className="w-full max-w-[300px] bg-violet-300 rounded-md object-cover"
                  style={{ aspectRatio: "3/3" }}
                />
                <h4 className="text-xl font-[600] mt-4 text-slate-700 dark:text-white leading-8">
                  Unknown
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  Unknown
                </p>
              </div>
            </Animated>
            <Animated varient="fade-in">
              <div className="flex flex-col items-center">
                <img
                  src="/images/static/persons/mohammadsefatullah.jpg"
                  className="w-full max-w-[300px] bg-violet-300 rounded-md object-cover"
                  style={{ aspectRatio: "3/3" }}
                />
                <h4 className="text-xl font-[600] mt-4 text-slate-700 dark:text-white leading-8">
                  Mohammad Sefatullah
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  Web Developer
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>
      <div className="bg-violet-0 dark:bg-slate-800 py-[4rem]">
        <section className="_clients-section pb-[4rem] flex flex-col justify-center items-center pt-[4rem]">
          <div className="container mx-auto max-w-[1300px] flex flex-col lg:flex-row gap-4 justify-between">
            <div className="mb-8">
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-6 md:leading-7 uppercase mb-2">
                Our Clients
              </p>
              <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                We're trusted by our clients.
              </h3>
            </div>
            <div>
              <Animated varient="fade-left">
                <div className="_clients justify-center flex gap-4 lg:gap-6 mt-2 flex-wrap">
                  <div className="w-16 h-16">
                    <img
                      src="/images/static/qweekai.png"
                      alt="Client Logo"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <img
                      src="/images/static/dhanshalik.jpg"
                      alt="Client Logo"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <img
                      src="/images/static/specialstars.jpeg"
                      alt="Client Logo"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-16 h-16">
                    <img
                      src="/images/static/dropbox.png"
                      alt="Client Logo"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </section>
        <div className="container mx-auto max-w-[1300px]">
          <Animated varient="fade-left">
            <section
              id="booking"
              className="_booking-section py-12 md:py-[6.5rem] bg-violet-500 dark:bg-slate-900 flex flex-col justify-center items-center rounded-lg"
            >
              <Booking />
            </section>
          </Animated>
        </div>
        <section
          className="_faq-section py-[8rem] pb-[3rem] md:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center"
          id="faq"
        >
          <div className="container mx-auto max-w-[1300px]">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-[600] text-slate-700 dark:text-white leading-10">
                Frequently Asked Questions
              </h3>
              <p className="text-[14px] mt-4 md:text-[17px] text-slate-500 dark:text-slate-400 leading-6 md:leading-7 mb-8">
                Can't find what you're looking for? Reach out to our{" "}
                <a
                  className="text-violet-700 dark:text-violet-400"
                  href="/support"
                >
                  support team
                </a>
                .
              </p>
            </div>
            <Animated varient="fade-up" speed="fast">
              <div className="flex justify-center">
                <div className="max-w-[500px] md:max-w-[700px] pt-[3rem]">
                  <Collapsible title="What is your refund policy?">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Atque, veniam excepturi sequi eius libero dolorem impedit
                      dolores natus cum, a nostrum illum minima! Doloremque
                      architecto cum expedita dolorem porro culpa.
                    </p>
                  </Collapsible>
                  <Collapsible title="How do I cancel my subscription?">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aut, neque tenetur repellat obcaecati illum autem officiis
                      odit excepturi exercitationem repudiandae atque unde nemo,
                      corporis ratione saepe vitae, eveniet nesciunt beatae.
                    </p>
                  </Collapsible>
                  <Collapsible title="How do I cancel my subscription?">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Eum vitae neque quidem, in architecto a nam, atque
                      doloribus eos sequi molestias cumque quo dignissimos
                      culpa, omnis maiores repudiandae amet dolorum?
                    </p>
                  </Collapsible>
                  <Collapsible title="Can I upgrade my plan?">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Et libero cupiditate suscipit nisi ipsum quae distinctio
                      quos architecto cum placeat eum quia, reprehenderit alias
                      officia accusamus dolores recusandae dolore. Delectus.
                    </p>
                  </Collapsible>
                  <Collapsible title="Can I upgrade my plan?">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates qui fugit provident vitae unde obcaecati
                      blanditiis error quo in consequatur aperiam, quis
                      quibusdam ad quidem dolor explicabo dignissimos facilis
                      odio!
                    </p>
                  </Collapsible>
                </div>
              </div>
            </Animated>
          </div>
        </section>
      </div>
      <section
        className="_contact-section bg-violet-50/50 dark:bg-transparent py-[8rem] flex flex-col justify-center items-center"
        id="contact"
      >
        <div className="container mx-auto max-w-[1300px] grid md:grid-cols-2 gap-10">
          <Contact />
        </div>
      </section>
    </div>
  );
}
