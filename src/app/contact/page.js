// Contact.js
import Image from "next/image";
import DigitalCard from "@/components/Digitalcard";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Section */}
      <header
        className="relative w-full h-48 sm:h-64 md:h-72 lg:h-96 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center text-center px-2 sm:px-8 mt-4 sm:mt-20">
          <h1 className="text-white text-xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-4xl sm:text-6xl">Contact</span>
            <span className="text-yellow-500">Pravaasa Bliss</span> for
            Unforgettable Travel Experiences
          </h1>
          <p className="text-white sm:text-lg">
            &quot;Your next adventure starts here. Get in touch with us today!&quot;
          </p>
        </div>
      </header>

      {/* Cards Section */}
      <section className="relative w-full  px-6 py-16 flex flex-col items-center justify-center gap-12 z-20">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
          {/* Card 1 */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center pt-6">
              <Image
                src="/images/telephone.png"
                alt="call icon"
                width={80}
                height={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Talk to Sales</h3>
              <p className="text-gray-700 text-center">
                Interested in our travel solutions? Call our sales team now to
                explore how our services can elevate your travel experiences.
              </p>
              <p className="text-lg font-semibold mt-14 text-center">
                <a
                  href="tel:+918988336969"
                  className="text-blue-600 hover:underline"
                >
                  +91 8988336969
                </a>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-center pt-6">
              <Image
                src="/images/live-chat.png"
                alt="customer support icon"
                width={80}
                height={80}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                Contact Customer Support
              </h3>
              <p className="text-gray-700 text-center">
                Facing issues with our travel services? Our customer support
                team is ready to assist you. Contact us today for prompt and
                professional help.
              </p>
              <section className="text-center mt-6">
                <a
                  href="/support"
                  className="inline-block bg-yellow-500 text-white text-sm font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600"
                >
                  Contact Support
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4">
        <div className="container mx-auto text-center bg-yellow-500 py-8 px-4 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">Connect with Us</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Map Section */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Find Us On the Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3415.9089104054488!2d77.51539532568582!3d31.112263674403476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVill.%20Dhangvi%20Post%20Office.%20Kokunala%2C%20Dhangwi%20Kalan%20(145)%2C%20Shimla%2C%20Himachal%20Pradesh%2C%20171202!5e0!3m2!1sen!2sin!4v1727000013055!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div
              className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center text-center p-8"
              style={{
                backgroundImage: 'url("/images/contactinfo.jpg")',
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-3xl sm:text-4xl text-white font-bold mb-4">
                Contact Information
              </h3>
              <address className="text-white">
                <p className="mb-2">
                  Address: Vill. Dhangvi Post Office.<br /> Kokunala, Dhangwi
                  Kalan (145), <br /> Shimla, Himachal Pradesh, 171202
                </p>
                <p className="mb-2">
                  Phone: {" "}
                  <a
                    href="tel:+918988336969"
                    className="text-blue-300 hover:underline"
                  >
                    +91 8988336969
                  </a>
                </p>
                <p>
                  Email: {" "}
                  <a
                    href="mailto:Chauhanmukil@gmail.com"
                    className="text-blue-300 hover:underline"
                  >
                    pravaasabliss@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          
        </div>
        {/* Digital Card Section */}
        <div className="mt-24">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
              Explore Our Digital Card
            </h3>
            <div>
              <DigitalCard />
            </div>
          </div>
      </main>
    </div>
  );
};

export default Contact;
