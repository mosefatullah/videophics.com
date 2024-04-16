function Footer() {
  return (
    <footer className="_footer bg-gray-700 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto mt-6 mb-10 max-w-[1300px] gap-12 flex flex-col md:flex-row md:justify-between">
        <div className="md:max-w-[350px] lg:max-w-[450px]">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" className="w-[50px] rounded-lg" />
            <h1 className="font-[500] text-xl">Videophics</h1>
          </div>
          <p className="text-sm leading-6 mt-4 dark:text-gray-300">
            Videophics is a graphic design agency dedicated to empowering
            brands, businesses, and individuals through impactful visual
            storytelling. We craft compelling designs for a wide range of
            clients, including companies, organizations, publications, and
            personal promotions.
          </p>
          <button className="text-slate-800 dark:text-white bg-white dark:bg-violet-700 dark:bg-violet-700 dark:text-white rounded-full px-6 py-3 mt-6 text-sm flex gap-2">
            Company Deck
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 flex-row sm:justify-between">
          <div>
            <h3 className="text-md uppercase">Quick Links</h3>
            <div className="text-white dark:text-gray-300 flex flex-col gap-2 mt-5 text-[15px]">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/services" className="hover:underline">
                Services
              </a>
              <a href="/about-us" className="hover:underline">
                About
              </a>
              <a href="/contact-us" className="hover:underline">
                Contact
              </a>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-md uppercase">Services</h3>
            <div className="text-white dark:text-gray-300 flex flex-col gap-2 mt-5 text-[15px]">
              <a href="/services/branding" className="hover:underline">
                Branding
              </a>
              <a href="/services/development" className="hover:underline">
                Development
              </a>
              <a href="/services/brand-advisory" className="hover:underline">
                Brand Advisory
              </a>
              <a href="/services/marketing" className="hover:underline">
                Marketing
              </a>
              <a href="/services/content-writing" className="hover:underline">
                Content Writing
              </a>
              <a href="/services/software-testing" className="hover:underline">
                Software Testing
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-md uppercase">Legal</h3>
            <div className="text-white dark:text-gray-300 flex flex-col gap-2 mt-5 text-[15px]">
              <a href="/legal/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/legal/cookies-policy" className="hover:underline">
                Cookies Policy
              </a>
              <a href="/legal/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="min-w-[10px]"></div>
      </div>
      <div className="container mx-auto max-w-[1300px] gap-4 flex flex-col items-center sm:flex-row sm:justify-between border-t border-[rgba(255,255,255,0.1)] dark:border-gray-700 pt-6">
        <p className="text-md dark:text-slate-400">
          © 2024 Videophics, All Rights Reserved.
        </p>
        <div className="flex space-x-5">
          <a
            href="https://www.facebook.com/videophics/"
            className="text-gray-300 hover:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 512 512"
            >
              <path
                d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/videophics24/"
            className="text-gray-300 hover:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 512 512"
            >
              <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/videophics/"
            className="text-gray-300 hover:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 512 512"
            >
              <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
              <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
