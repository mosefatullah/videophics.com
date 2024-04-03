import React from "react";

export default function Cookie() {
  return (
    <>
      <div className="container mx-auto max-w-[1300px] py-20">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
          Cookies Policy
        </h1>
        <div className="mt-10 text-slate-800 dark:text-white">
          <ul className="list-decimal">
            <li className="text-2xl font-bold ml-7 mb-7 mt-12">
              What is a cookie?
            </li>
            <p>
              Cookies are small data files that many Internet sites
              automatically download to the hard drive of a user's computer,
              phone or tablet (hereinafter "Computer"). They are mainly used to
              help websites recognize a user who has visited the Website before,
              for example to simplify login for registered users. They may store
              information about website settings, accounts and passwords. Most
              Web browsers automatically accept cookies. A cookie cannot launch
              programs or spread viruses.
            </p>
            <br />
            <p>
              The website of Videophics (hereinafter "Website") uses cookies and
              similar technologies to distinguish your user preferences from
              other visitors to the Website in order to offer you a better
              service when you return to the Website. They also allow us to
              optimize the Website. Any Personal Data we collect through the use
              of cookies will be treated confidentially.
            </p>
            <br />
            <p>
              On the other hand, cookies and similar technologies do not allow
              us to systematically collect personal data that can identify the
              users of the Website. cookies help us improve the functionalities
              of the Website, better serve the interests of our users and
              measure the effectiveness of the content of the Website.
            </p>
            <li className="text-2xl font-bold ml-7 mb-7 mt-12">Permission</li>
            <p>
              Generally if you use the Website, you agree to the use of cookies.
              If you do not want cookies to be stored on your computer, you can
              disable the use of cookies in your browser settings.
            </p>
            <li className="text-2xl font-bold ml-7 mb-7 mt-12">
              What information do we collect?
            </li>
            <p>We collect the following information:</p>
            <ul className="list-disc ml-7">
              <li>Dark/Light Theme</li>
              <li>Language Preference</li>
              <li>Contact Information</li>
            </ul>
            <li className="text-2xl font-bold ml-7 mb-7 mt-12">
              Privacy of Children's Information
            </li>
            <p>
              We do not knowingly collect any personal information from children
              under the age of 13. If you are under the age of 13, please do not
              submit any personal information through our Website or Service. We
              encourage parents and legal guardians to monitor their children's
              Internet usage and to help enforce this Policy by instructing
              their children never to provide personal information through our
              Website or Service without their permission. If you have reason to
              believe that a child under the age of 13 has provided personal
              information to us through our Website or Service, please contact
              us.
            </p>
          </ul>
        </div>
      </div>
    </>
  );
}
