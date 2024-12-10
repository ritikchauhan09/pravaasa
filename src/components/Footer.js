import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 text-white">
      <div className="max-w-full container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/pravaasa.png"
              alt="company logo"
              height={100}
              width={100}
            />
            <h2 className="text-xl font-bold mb-2" itemProp="name">
              Tour & Travel
            </h2>
            <p itemProp="description" className="text-sm">
              Explore the world with us. We offer the <br /> best travel
              packages and experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold mb-4 text-xl">Quick Links</h2>
            <ul className="space-y-2">
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
          <div>
            <h2 className="font-bold mb-4 text-xl">Contact Info</h2>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start">
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
              <div className="flex items-center justify-center md:justify-start">
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
              <div className="flex items-center justify-center md:justify-start">
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
          <div>
            <Newsletter />
          </div>
        </div>

        <hr className="w-11/12 mx-auto border-gray-400" />

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between py-4">
          <div className="mb-4 md:mb-0 text-center text-sm">
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
          <div className="flex justify-center md:justify-end space-x-2">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com"
                title="YouTube"
                target="_blank"
              >
                {/* YouTube Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#FFFFFF"
                    d="M23.498 6.186c-.29-1.092-1.146-1.949-2.238-2.239C19.444 3.5 12 3.5 12 3.5s-7.444 0-9.26.447C1.648 4.236.792 5.093.502 6.186.063 8.037 0 10 0 12s.063 3.963.502 5.814c.29 1.092 1.146 1.949 2.238 2.239 1.816.447 9.26.447 9.26.447s7.444 0 9.26-.447c1.092-.29 1.949-1.146 2.238-2.239.44-1.851.502-3.814.502-5.814s-.062-3.963-.502-5.814zM9.75 15.568v-7.136L15.75 12l-6 3.568z"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
              >
                {/* Facebook Icon */}
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
              <Link
                href="https://www.instagram.com"
                title="Instagram"
                target="_blank"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#FFFFFF"
                    d="M7.75 0h8.5A7.75 7.75 0 0 1 24 7.75v8.5A7.75 7.75 0 0 1 16.25 24h-8.5A7.75 7.75 0 0 1 0 16.25v-8.5A7.75 7.75 0 0 1 7.75 0zm0 2C4.15 2 2 4.15 2 7.75v8.5C2 19.85 4.15 22 7.75 22h8.5c3.6 0 5.75-2.15 5.75-5.75v-8.5C22 4.15 19.85 2 16.25 2h-8.5zM12 5.75A6.25 6.25 0 1 1 5.75 12 6.258 6.258 0 0 1 12 5.75zm0 2A4.25 4.25 0 1 0 16.25 12 4.258 4.258 0 0 0 12 7.75zm7.69-4.75a1.19 1.19 0 1 1-1.19 1.19A1.189 1.189 0 0 1 19.69 3z"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.twitter.com"
                title="Twitter"
                target="_blank"
              >
                {/* Twitter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#FFFFFF"
                    d="M24 4.557a9.91 9.91 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.725 9.865 9.865 0 0 1-3.127 1.194 4.916 4.916 0 0 0-8.373 4.482A13.939 13.939 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.563 4.903 4.903 0 0 1-2.224-.615v.061a4.916 4.916 0 0 0 3.946 4.818 4.996 4.996 0 0 1-1.29.172 4.901 4.901 0 0 1-.922-.088 4.916 4.916 0 0 0 4.6 3.42A9.867 9.867 0 0 1 1.169 20.2a9.9 9.9 0 0 1-1.17-.068 13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.01-7.505 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z"
                  />
                </svg>
              </Link>
            </div>

            {/* Other icons can be added similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
}
