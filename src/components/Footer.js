import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 text-white">
      <div className=" max-w-full container mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start ml-5">
            <Image
              src="/images/pravaasa.png"
              alt="company logo"
              height={100}
              width={100}
            />
            <h2 className="text-xl font-bold mb-2" itemProp="name">
              Tour & Travel
            </h2>
            <p itemProp="description" className="text-sm text-justify">
              Explore the world with us. We offer the <br/> best travel packages and
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left ml-7">
            <h2 className="font-bold mb-4 text-lg">Quick Links</h2>
            <ul>
              <li>
                <Link href="/" className="hover:underline text-sm" title="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline text-sm"
                  title="About Us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:underline text-sm"
                  title="Destinations"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline text-sm"
                  title="Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left mr-10">
            <h2 className="font-bold mb-4 text-lg">Contact Info</h2>
            <address className="not-italic">
              <div className="flex items-center mb-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mr-2"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 3.63 5 9 7 11 2-2 7-7.37 7-11 0-3.87-3.13-7-7-7zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
                <p>Vill Dhangwi, PO. Kotkhai, Shimla - 171202</p>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12" y2="18"></line>
                  <line x1="9" y1="2" x2="15" y2="2"></line>
                </svg>

                <p>
                  <Link href="tel:+918988336969" className="hover:underline">
                    +91 8988336969
                  </Link>
                </p>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 5v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  <path d="M22 7l-10 7L2 7"></path>
                </svg>

                <p>
                  <Link
                    href="mailto:Chauhanmukil@gmail.com"
                    className="hover:underline"
                  >
                    Chauhanmukil@gmail.com
                  </Link>
                </p>
              </div>
            </address>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <Newsletter />
          </div>
        </div>

        {/* hr to break */}
        <hr className="w-11/12 mx-auto border-gray-400" />

        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="mb-4 md:mb-0 text-center md:text-left text-sm">
            {/* Copyright */}
            <p>
              &copy; 2024 Pravaasa Bliss. All rights reserved. |{" "}
              <Link
                href="https://www.pravaasabliss.com"
                className="hover:underline"
                title="Pravaasa Bliss - Discover Unforgettable Travel Experiences"
              >
                www.pravaasabliss.com
              </Link>{" "}
              |{" "}
              <Link
                href="/privacy-policy"
                className="hover:underline"
                title="Pravaasa Bliss Privacy Policy"
              >
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link
                href="/terms-of-service"
                className="hover:underline"
                title="Pravaasa Bliss Terms of Service"
              >
                Terms of Service
              </Link>
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto p-3">
            {/* Social Media Icons */}
            <Link href="/" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  fill="#FFFFFF"
                  d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.093 4.388 23.1 10.125 24v-8.437H7.078v-3.49h3.047V9.35c0-3.017 1.791-4.687 4.533-4.687 1.313 0 2.686.235 2.686.235v2.951h-1.512c-1.49 0-1.95.925-1.95 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.1 24 18.093 24 12.073z"
                />
              </svg>
            </Link>
            <Link href="/" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2c-2.47 0-4.48 2-4.48 4.5v.9A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link href="/" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <circle cx="12" cy="12" r="3.5"></circle>
                <line x1="18" y1="6" x2="18.01" y2="6"></line>
              </svg>
            </Link>
            <Link href="/" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="white"
              >
                <path d="M43.6 14.4c-.5-1.8-2-3.3-3.8-3.8C36.8 10 24 10 24 10s-12.8 0-15.8.6c-1.8.5-3.3 2-3.8 3.8C4 17.4 4 24 4 24s0 6.6.4 9.6c.5 1.8 2 3.3 3.8 3.8 3 .6 15.8.6 15.8.6s12.8 0 15.8-.6c1.8-.5 3.3-2 3.8-3.8.4-3 .4-9.6.4-9.6s0-6.6-.4-9.6z" />
                <polygon fill="black" points="20,31 32,24 20,17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

