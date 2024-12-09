import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-black pt-10 pb-6 text-white">
      <div className="max-w-full container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start ml-0 md:ml-5">
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
              Explore the world with us. We offer the <br /> best travel
              packages and experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left ml-0 md:ml-7">
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
          <div className="text-center md:text-left">
            <h2 className="font-bold mb-4 text-lg">Contact Info</h2>
            <address className="not-italic">
              <div className="flex flex-col md:flex-row items-center mb-2 text-sm justify-center md:justify-start">
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
              <div className="flex flex-col md:flex-row items-center mb-2 text-sm justify-center md:justify-start">
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
              <div className="flex flex-col md:flex-row items-center mb-2 text-sm justify-center md:justify-start">
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
        <hr className="w-11/12 mx-auto border-gray-400 mt-8" />

        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-center md:text-left">
          <div className="mb-4 md:mb-0 text-sm">
            <p>
              &copy; 2024 Pravaasa Bliss. All rights reserved. |{" "}
              <Link
                href="https://www.pravaasabliss.com"
                className="hover:underline"
              >
                www.pravaasabliss.com
              </Link>{" "}
              |{" "}
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto space-x-4">
            {/* Social Media Icons */}
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                fill="white"
                className="hover:fill-blue-600"
              >
                <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.03 5.66 21 10.36 21v-6.11H8.07v-2.82h2.29V9.36c0-2.26 1.32-3.5 3.35-3.5.98 0 2 .18 2 .18v2.2h-1.12c-1.1 0-1.45.69-1.45 1.4v1.67h2.61l-.42 2.82h-2.19V21c4.7 0 8.36-3.97 8.36-8.93z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <svg
                width="24"
                height="24"
                fill="white"
                className="hover:fill-blue-400"
              >
                <path d="M22.46 6c-.77.35-1.6.6-2.46.71.88-.52 1.55-1.35 1.87-2.34-.82.48-1.73.83-2.7 1.02A4.18 4.18 0 0 0 16.43 4c-2.3 0-4.18 1.86-4.18 4.15 0 .32.04.63.1.92A11.84 11.84 0 0 1 3.24 5.14a4.15 4.15 0 0 0-.56 2.09c0 1.44.74 2.7 1.87 3.45a4.13 4.13 0 0 1-1.89-.52v.05c0 2.01 1.44 3.68 3.36 4.07-.35.1-.72.15-1.1.15-.27 0-.53-.02-.79-.07.54 1.66 2.08 2.87 3.91 2.9a8.37 8.37 0 0 1-5.17 1.77c-.34 0-.67-.02-1-.06A11.8 11.8 0 0 0 10 21c7.72 0 11.95-6.32 11.95-11.82 0-.18-.01-.35-.02-.53A8.53 8.53 0 0 0 22.46 6z" />
              </svg>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <svg
                width="24"
                height="24"
                fill="white"
                className="hover:fill-red-600"
              >
                <path d="M22.54 6.42c-.25-.97-.98-1.74-1.92-2.01C18.6 4 12 4 12 4s-6.6 0-8.62.4C2.44 4.67 1.71 5.45 1.46 6.42 1.09 8.2 1 10 1 12s.09 3.8.46 5.58c.25.97.98 1.74 1.92 2.01 2.02.4 8.62.4 8.62.4s6.6 0 8.62-.4c.94-.27 1.67-1.04 1.92-2.01.37-1.78.46-3.58.46-5.58s-.09-3.8-.46-5.58zM9.75 15.02v-6.03L15.5 12l-5.75 3.02z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                fill="white"
                className="hover:fill-pink-500"
              >
                <path d="M16.98 3H7.02C5.35 3 4 4.35 4 6.02v9.96C4 17.65 5.35 19 7.02 19h9.96C18.65 19 20 17.65 20 15.98V6.02C20 4.35 18.65 3 16.98 3zM12 16.34a4.34 4.34 0 1 1 0-8.68 4.34 4.34 0 0 1 0 8.68zm5.66-8.7a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04z" />
                <circle cx="12" cy="12" r="2.9" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
