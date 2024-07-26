import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/pravaasa.png" alt="company logo" height={100} width={100} />
            <h2 className="text-xl font-bold mb-2" itemProp="name">
              Tour & Travel
            </h2>
            <p itemProp="description">
              Explore the world with us. We offer the best travel packages and experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h2 className="font-bold mb-2 text-lg">Quick Links</h2>
            <ul>
              <li>
                <Link href="/" className="hover:underline" title="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline" title="About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:underline" title="Destinations">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline" title="Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            {/* Contact info */}
            <h2 className="font-bold mb-2">Contact Info</h2>
            <address className="not-italic">
              <div className="flex items-center mb-2">
                <Image src="/images/location.png" alt="address logo" width={20} height={20} className="mr-2"/>
                <p>123 Travel Lane, Wanderlust City, XY 12345</p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/images/call.png" alt="phone logo" width={20} height={20} className="mr-2"/>
                <p>
                  <Link href="tel:+1234567890" className="hover:underline">
                    +1 (234) 567-890
                  </Link>
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Image src="/images/communication.png" alt="email logo" width={20} height={20} className="mr-2"/>
                <p>
                  <Link href="mailto:info@pravaasabliss.com" className="hover:underline">
                    info@pravaasabliss.com
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
        <hr className="w-11/12 mx-auto border-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
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
              <Link href="/privacy-policy" className="hover:underline" title="Pravaasa Bliss Privacy Policy">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-of-service" className="hover:underline" title="Pravaasa Bliss Terms of Service">
                Terms of Service
              </Link>
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto p-3">
            {/* Social Media Icons */}
            <Link href="/" className="mx-2">
              <Image
                src="/images/facebook.png"
                alt="Facebook icon"
                height={30}
                width={30}
              />
            </Link>
            <Link href="/" className="mx-2">
              <Image
                src="/images/twitter.png"
                alt="Twitter icon"
                height={30}
                width={30}
              />
            </Link>
            <Link href="/" className="mx-2">
              <Image
                src="/images/instagram.png"
                alt="Instagram icon"
                height={30}
                width={30}
              />
            </Link>
            <Link href="/" className="mx-2">
              <Image
                src="/images/play.png"
                alt="YouTube icon"
                height={30}
                width={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
