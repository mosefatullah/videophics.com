export default function Contact() {
  return (
    <>
      <div>
        <h3 className="text-3xl lg:text-4xl font-[600] mb-4 text-slate-500 dark:text-white leading-10">
          Let's talk about your project.
        </h3>
        <p className="text-md text-slate-500 dark:text-slate-300 pt-6">
          <p className="leading-6">
            <span className="text-violet-700 dark:text-violet-400">
              Office Hours:
            </span>{" "}
            9:00 AM - 5:00 PM (GMT+6)
          </p>
          <p className="leading-6">
            <span className="text-violet-700 dark:text-violet-400">
              Address:
            </span>{" "}
            Dhaka, Bangladesh
          </p>
          <p className="leading-6">
            <span className="text-violet-700 dark:text-violet-400">Email:</span>{" "}
            contact@videophics.com
          </p>
        </p>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Dhaka, Bangladesh"
          width="600"
          height="278"
          frameborder="0"
          style={{ width: "100%", marginTop: "2rem" }}
          allowFullScreen=""
        ></iframe>
      </div>
      <div>
        <form
          className="flex flex-col gap-4 rounded-md py-8 lg:p-8 md:py-10"
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
            <label
              htmlFor="name"
              className="text-sm text-slate-500 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500 dark:bg-slate-800 dark:text-white dark:border-slate-500"
              placeholder="Abdullah"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="company"
                className="text-sm text-slate-500 dark:text-white"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500 dark:bg-slate-800 dark:text-white dark:border-slate-500"
                placeholder="Example Inc."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-slate-500 dark:text-white"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500 dark:bg-slate-800 dark:text-white dark:border-slate-500"
                placeholder="contact@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="text-sm text-slate-500 dark:text-white"
              >
                Select Service *
              </label>
              <select
                className="p-3 rounded-md border-2 bg-white border-slate-200 focus:outline-none focus:border-violet-500 dark:bg-slate-800 dark:text-white dark:border-slate-500"
                id="service"
                required
              >
                <option value="Branding">Branding</option>
                <option value="Development">Development</option>
                <option value="Brand Advisory">Brand Advisory</option>
                <option value="Marketing">Marketing</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Bug Fixes">Bug Fixes</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="range"
                className="text-sm text-slate-500 dark:text-white"
              >
                Budget Range *
              </label>
              <select
                className="p-3 rounded-md border-2 bg-white border-slate-200 focus:outline-none focus:border-violet-500 dark:bg-slate-800 dark:text-white dark:border-slate-500"
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
            <label
              htmlFor="message"
              className="text-sm text-slate-500 dark:text-white"
            >
              Details *
            </label>
            <textarea
              id="message"
              className="p-3 rounded-md border-2 border-slate-200 focus:outline-none focus:border-violet-500 dark:bg-slate-800 dark:text-white dark:border-slate-500"
              placeholder="Your project details"
              required
            />
          </div>
          <button
            className="bg-violet-700 text-white text-sm md:text-[16px] px-8 py-3 rounded-md from-violet-500 to-violet-700 bg-gradient-to-l hover:from-violet-600 hover:to-violet-800 active:scale-95"
            type="submit"
            title="Click here to submit your message"
          >
            Submit inquiry
          </button>
        </form>
      </div>
    </>
  );
}
