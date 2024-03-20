function Footer() {
  return (
    <footer className="bg-violet-700 dark:bg-gray-800 text-white py-8">
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
        <div className="grid grid-cols-2 gap-20 flex-row sm:justify-between">
          <div>
            <h3 className="text-md uppercase">Quick Links</h3>
            <div className="text-white dark:text-gray-300 flex flex-col gap-2 mt-5 text-[15px]">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
              <a href="#" className="hover:underline">
                About
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-md uppercase">Services</h3>
            <div className="text-white dark:text-gray-300 flex flex-col gap-2 mt-5 text-[15px]">
              <a href="#" className="hover:underline">
                Branding
              </a>
              <a href="#" className="hover:underline">
                Design
              </a>
              <a href="#" className="hover:underline">
                Development
              </a>
              <a href="#" className="hover:underline">
                Marketing
              </a>
              <a href="#" className="hover:underline">
                Content Writing
              </a>
              <a href="#" className="hover:underline">
                Bug Fixing
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
            <ion-icon
              name="logo-facebook"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            <ion-icon
              name="logo-twitter"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            <ion-icon
              name="logo-instagram"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
