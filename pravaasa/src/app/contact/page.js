// Contact.js
import Image from "next/image";
import DigitalCard from "@/components/Digitalcard";
const Contact = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <header
        className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden bg-cover bg-center bg-no-repeat mb-20"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 mt-12">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            <span className="text-6xl">Contact</span>
            <br />
            <span className="text-yellow-500">Pravaasa Bliss</span> for
            Unforgettable Travel Experiences
          </h1>
          <p className="text-white text-base md:text-lg">
            "Your next adventure starts here. Get in touch with us today!"
          </p>
        </div>
      </header>

      <section className="absolute top-0 w-full pt-80 px-4 flex flex-col items-center justify-center gap-12 z-20">
        <div className="container mx-auto flex flex-wrap justify-around gap-8 px-4">
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
              <h3 className="text-lg font-bold mb-4 text-center">
                Talk to Sales
              </h3>
              <p className="text-gray-700 text-center">
                Interested in our travel solutions? Call our sales team now to
                explore how our services can elevate your travel experiences.
              </p>
              <p className="text-lg font-semibold mt-4 text-center">
                <a
                  href="tel:+918988336969"
                  className="text-blue-600 hover:underline"
                >
                  +91 8988336969 
                </a>
              </p>
              {/* <p className="text-lg font-semibold mt-4 text-center">
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </p> */}
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
              <h3 className="text-lg font-bold mb-4 text-center">
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

      {/* this is the main content */}
      <main className="py-8 px-4 mt-80">
        <div className="container mx-auto mt-20 text-center">
          <h2 className="text-2xl font-bold mb-12">Connect with Us</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Map Section */}
            <div className="w-full lg:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center">
  Find Us On the Map
  <Image src="/images/search.gif" height={30} width={30} alt="search on map" className="ml-2 bg-red-100"/>
</h3>
              {/* Embed or include a map component here */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3415.9089104054488!2d77.51539532568582!3d31.112263674403476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVill.%20Dhangvi%20Post%20Office.%20Kokunala%2C%20Dhangwi%20Kalan%20(145)%2C%20Shimla%2C%20Himachal%20Pradesh%2C%20171202!5e0!3m2!1sen!2sin!4v1727000013055!5m2!1sen!2sin" width={600} height={450} style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              
            </div>

            {/* Contact Information */}
            <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-md" style={{backgroundImage:'url("/images/contactinfo.jpg")', backgroundSize:"100% 100%", height:"40vh"}}>
              <h3 className="text-4xl text-white font-bold mb-4 mt-36">Contact Information</h3>
              <address className="text-gray-700 mt-40 font-bold bg-grey-100">
                <p className="mb-2">
                  Address:
                  Vill. Dhangvi Post Office.<br/> Kokunala, Dhangwi Kalan (145), <br/> Shimla, Himachal Pradesh, 171202
                </p>
                <p className="mb-2">
                  Phone:{" "}
                  <a
                    href="tel:+918988336969"
                    className="text-blue-600 hover:underline"
                  >
                    +91 8988336969
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:Chauhanmukil@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    Chauhanmukil@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Digital Card Section */}
          <div className="mt-24 text-center">
            <h3 className="text-xl font-bold mb-4">Explore Our Digital Card</h3>
            <div>
              <DigitalCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
