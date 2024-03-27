import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Link } from "react-router-dom";

/* Components */
import Collapsible from "./components/Collapsible";
import Contact from "./components/Contact";
import Animated from "./components/Animated";
import Booking from "./components/Booking";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Videophics - Your Premier Branding Agency & Branding Experts</title>
        <meta name="description" content="Videophics is a leading branding agency dedicated to empowering your brand's growth and success. Through our expertise in emotion-driven storytelling and strategic branding, we create enduring experiences that resonate with your audience." />

        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <section className="_hero-section relative py-10 lg:min-h-[calc(100vh-80px)] flex justify-center dark:bg-slate-900">
        <div className="_sketch h-[200px] w-[100px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 left-0 dark:opacity-50" />
        <div className="_sketch h-[200px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter right-0 md:left-[40%] bottom-10 dark:hidden" />
        <div className="_sketch h-[100px] w-[300px] absolute from-violet-300 to-violet-100 bg-gradient-to-r blur-3xl filter top-0 right-0 hidden md:block dark:bottom-20 dark:top-auto dark:opacity-50" />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-14 max-w-[1300px]">
          <div className="flex flex-col justify-center md:pt-10 lg:pt-0 md:items-center lg:items-start z-10 max-w-[700px] lg:max-w-auto mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-4xl lg:text-5xl  font-[600] mb-4 text-slate-700 dark:text-white leading-10 xl:leading-12">
              <Animated varient="fade-left" className="inline">
                Innovative minds are
              </Animated>{" "}
              <Animated varient="fade-right" className="inline">
                <span className="text-violet-500 dark:text-violet-400">
                  shaping
                </span>{" "}
                a brighter tomorrow
              </Animated>
            </h1>
            <p className="text-[14px] md:text-[17px] mt-4 mb-7 text-slate-500 dark:text-slate-400 leading-6 md:leading-7 _heroPara">
              At Videophics, we bring brands and people closer. With a focus on
              emotion-driven connections, we craft experiences that resonate and
              endure. Let us help you tell your brand's story in a way that fosters genuine connections and drives meaningful engagement.
            </p>
            <NavLink to="/about-us">
              <button
                className="px-7 text-sm md:text-[16px] md:px-8 py-3 text-white rounded-md from-violet-400 to-violet-600 bg-gradient-to-l hover:from-violet-500 hover:to-violet-700 active:scale-95"
                title="Clixk here to learn more"
              >
                Learn More &rarr;
              </button>
            </NavLink>
          </div>
          <div className="flex justify-center items-center md:justify-end z-10 md:order-1">
            <Animated varient="fade-in" speed="fast">
              <div className="bg-violet-100 dark:bg-slate-700 rounded-lg">
                <video
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  autoPlay
                  muted
                  controls={false}
                  alt="A visual representation of videophics"
                  className="object-cover rounded-lg max-h-[500px] w-full md:max-w-[700px] md:hidden lg:block"
                  style={{
                    aspectRatio: "16/9",
                  }}
                /></div>
            </Animated>
          </div>
        </div>
      </section>
      <section className="_services-section dark:bg-slate-900 py-[7rem] md:min-h-[calc(100vh-80px)]">
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
                          We create brand identities, brand guidelines, and more.
                        </p>
                      </div>
                    </div></Link>
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
                          <span className="text-violet-700">2.</span> Development
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
                          <span className="text-violet-700">6.</span> Software Testing
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300 leading-6">
                          We test your software to ensure quality and performance.
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
                  <div className="flex flex-col bg-slate-300 dark:bg-slate-800 p-6 rounded-lg h-full">
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
                  <div className="flex flex-col bg-slate-300 dark:bg-slate-800 p-6 rounded-lg h-full">
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
                  <div className="flex flex-col bg-slate-300 dark:bg-slate-800 p-6 rounded-lg h-full">
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
      <section className="_team-section py-[8rem] pt-[6rem] bg-white dark:bg-slate-900 flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-[1300px]">
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 md:leading-7 mb-2 uppercase">
              Our Team
            </p>
            <h3 className="text-3xl lg:text-4xl font-[600] mb-4 text-slate-700 dark:text-white leading-10">
              Meet Our Team
            </h3>
          </div>
          <div className="_persons grid md:grid-cols-3 gap-9 pt-[4rem]">
            <Animated varient="fade-in">
              <div className="flex flex-col items-center">
                <img
                  src=""
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
                  src=""
                  className="w-full max-w-[300px] bg-violet-300 rounded-md object-cover"
                  style={{ aspectRatio: "3/3" }}
                />
                <h4 className="text-xl font-[600] mt-4 text-slate-700 dark:text-white leading-8">
                  Zadid Al Lisan
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  CTO
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
                  Tahmidur Rahman
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-6">
                  Unknown
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
      <div className="bg-slate-100 dark:bg-slate-800 py-[4rem]">
        <section className="_clients-section py-[7rem] flex flex-col justify-center items-center pt-[3rem]">
          <div className="container mx-auto max-w-[1300px]">
            <div className="text-center mb-8">
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-6 md:leading-7 uppercase mb-2">
                Our Clients
              </p>
              <h3 className="text-3xl lg:text-3xl md:text-4xl font-[600] mb-2 text-slate-700 dark:text-white leading-10">
                We're trusted by our clients.
              </h3>
            </div>
            <Animated varient="fade-up">
              <div className="_clients flex justify-center items-center gap-8 mt-10 flex-wrap">
                <div className="w-16 h-16">
                  <img
                    src="/images/static/qweekai.png"
                    alt="Client Logo"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-16 h-16">
                  <img
                    src="/images/static/dhanshalik.jpg"
                    alt="Client Logo"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-16 h-16">
                  <img
                    src="/images/static/specialstars.jpeg"
                    alt="Client Logo"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="w-16 h-16 rounded-md">
                  <img
                    src="/images/static/dropbox.png"
                    alt="Client Logo"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Animated>
          </div>
        </section>
        <Animated varient="fade-up" speed="fast">
          <div className="container mx-auto max-w-[1300px]">
            <section
              id="booking"
              className="_booking-section py-12 md:py-[6.5rem] bg-violet-500 dark:bg-slate-950 flex flex-col justify-center items-center rounded-lg"
            >
              <Booking />
            </section>
          </div>
        </Animated>
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
        className="_contact-section py-[8rem] bg-white dark:bg-slate-900 flex flex-col justify-center items-center"
        id="contact"
      >
        <div className="container mx-auto max-w-[1300px] grid md:grid-cols-2 gap-10">
          <Contact />
        </div>
      </section>
    </>
  );
}
