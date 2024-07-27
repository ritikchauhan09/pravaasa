// Contact.js
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <header className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden bg-cover bg-center bg-no-repeat mb-20" style={{ backgroundImage: "url('/images/contact.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 mt-12">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            <span className="text-6xl">Contact</span><br />
            <span className="text-yellow-500">Pravaasa Bliss</span> for Unforgettable Travel Experiences
          </h1>
          <p className="text-white text-base md:text-lg">"Your next adventure starts here. Get in touch with us today!"</p>
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
              <h3 className="text-lg font-bold mb-4 text-center">Talk to Sales</h3>
              <p className="text-gray-700 text-center">Interested in our travel solutions? Call our sales team now to explore how our services can elevate your travel experiences.</p>
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
              <h3 className="text-lg font-bold mb-4 text-center">Contact Customer Support</h3>
              <p className="text-gray-700 text-center">Facing issues with our travel services? Our customer support team is ready to assist you. Contact us today for prompt and professional help.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
