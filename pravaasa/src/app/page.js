"use client";
import Head from "next/head";
import Image from "next/image";
import "../app/globals.css";
import { useState, useEffect } from "react";
import SplashScreen from "../components/splashScreen";
import Modal from "@/components/Modal";
// import RootLayout from './layout';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splashScreenStatus = sessionStorage.getItem("splashScreenStatus");
    if (splashScreenStatus === "shown") {
      // Splash screen has been shown already in this session
      setIsLoading(false);
    } else {
      // Show splash screen and set a flag in session storage
      const timer = setTimeout(() => {
        sessionStorage.setItem("splashScreenStatus", "shown");
        setIsLoading(false);
      }, 3000); // Display the splash screen for 3 seconds

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Head>
        <title>Home - Pravaasa Bliss</title>
        <meta
          name="description"
          content="Welcome to Pravaasa Bliss, your gateway to unforgettable travel experiences. Discover our services and start your journey today."
        />
        <meta
          name="keywords"
          content="Travel, Pravaasa Bliss, Travel Services, Adventure, Vacation"
        />
        <meta property="og:title" content="Home - Pravaasa Bliss" />
        <meta
          property="og:description"
          content="Welcome to Pravaasa Bliss, your gateway to unforgettable travel experiences. Discover our services and start your journey today."
        />
        <meta property="og:image" content="/images/home-hero.jpg" />
        <meta property="og:url" content="https://www.pravaasabliss.com" />
      </Head>

<Modal/>
      {/* header */}
      <header
        className="relative w-full h-[73vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to <span className="text-yellow-500">Pravaasa Bliss</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Your gateway to unforgettable travel experiences. Discover the
              world with us!
            </p>
            <a
              href="/about"
              className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-gray-100 hover:text-yellow-500 hover:border-2 hover:border-yellow-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* main content */}
      <main className="container mx-auto px-4 py-8">
        {/* top destinations */}
<section className="bg-emerald-900 text-white text-center py-12 rounded-lg">
  <h1 className="text-4xl font-bold">Top Destinations in India</h1>
  <p className="text-lg mt-2">
    Discover the most amazing travel destinations across India with Pravaasa Bliss.
  </p>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    <div className="bg-white text-black p-4 rounded-lg shadow-lg overflow-hidden">
      <img src="/images/jaipur.jpg" alt="Jaipur" className="w-full h-48 object-cover rounded-md"/>
      <h2 className="text-2xl font-semibold mt-4">Jaipur</h2>
      <p className="mt-2">Explore the vibrant culture and historic palaces of the Pink City.</p>
    </div>
    <div className="bg-white text-black p-4 rounded-lg shadow-lg overflow-hidden">
      <img src="/images/goa.jpg" alt="Goa" className="w-full h-48 object-cover rounded-md"/>
      <h2 className="text-2xl font-semibold mt-4">Goa</h2>
      <p className="mt-2">Relax on beautiful beaches and experience lively nightlife.</p>
    </div>
    <div className="bg-white text-black p-4 rounded-lg shadow-lg overflow-hidden">
      <img src="/images/kerala.jpg" alt="Kerala" className="w-full h-48 object-cover rounded-md"/>
      <h2 className="text-2xl font-semibold mt-4">Kerala</h2>
      <p className="mt-2">Discover the serene backwaters and lush greenery.</p>
    </div>
    <div className="bg-white text-black p-4 rounded-lg shadow-lg overflow-hidden">
      <img src="/images/uttar-pradesh.jpg" alt="Agra" className="w-full h-48 object-cover rounded-md"/>
      <h2 className="text-2xl font-semibold mt-4">Agra</h2>
      <p className="mt-2">Visit the iconic Taj Mahal and explore historical monuments.</p>
    </div>
    <div className="bg-white text-black p-4 rounded-lg shadow-lg overflow-hidden">
      <img src="/images/udaipur.jpg" alt="Udaipur" className="w-full h-48 object-cover rounded-md"/>
      <h2 className="text-2xl font-semibold mt-4">Udaipur</h2>
      <p className="mt-2">Enjoy the picturesque lakes and royal palaces.</p>
    </div>
    <div className="bg-white text-black p-4 rounded-lg shadow-lg overflow-hidden">
      <img src="/images/himachal.jpg" alt="Shimla" className="w-full h-48 object-cover rounded-md"/>
      <h2 className="text-2xl font-semibold mt-4">Shimla</h2>
      <p className="mt-2">Experience the charming hill station and stunning views.</p>
    </div>
  </div>
</section>

        {/* why chose us section */}
        <section className="mt-12">
        <section className="text-center mb-12 mt-10">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700">
            At Pravaasa Bliss, we offer customized travel solutions to make your
            journeys unforgettable. Our dedicated team ensures exceptional
            service and unique experiences tailored just for you.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
              <Image
                src="/images/hot-air-balloon.gif"
                alt="Adventure"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adventure Tours</h3>
            <p className="text-gray-600">
              Explore breathtaking landscapes and experience thrilling
              adventures with our expertly crafted tours.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-green-500 rounded-full mb-4 flex items-center justify-center">
              <Image
                src="/images/clipboard.gif"
                alt="Relaxation"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Relaxation Packages</h3>
            <p className="text-gray-600">
              Indulge in our luxury relaxation packages designed to rejuvenate
              and refresh you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-red-500 rounded-full mb-4 flex items-center justify-center">
              <Image
                src="/images/namaste.gif"
                alt="Culture"
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultural Experiences</h3>
            <p className="text-gray-600">
              Immerse yourself in rich cultural experiences with our curated
              cultural tours and activities.
            </p>
          </div>
        </section>
        </section>
        {/* some servies section  */}
        <section className="container mx-auto px-4 py-8 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/service1.jpg"
                alt="Customized Itineraries"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Customized Itineraries
                </h3>
                <p className="text-gray-700 mb-4">
                  Tailored travel plans to match your unique preferences and
                  interests. Enjoy a personalized experience that suits your
                  style.
                </p>
                <a
                  href="/services/customized-itineraries"
                  className="text-blue-600 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/service2.jpg"
                alt="24/7 Travel Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  24/7 Travel Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Receive round-the-clock assistance throughout your journey.
                  We're here to ensure your travel experience is smooth and
                  stress-free.
                </p>
                <a
                  href="/services/travel-support"
                  className="text-blue-600 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/service3.jpg"
                alt="Exclusive Travel Packages"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Exclusive Travel Packages
                </h3>
                <p className="text-gray-700 mb-4">
                  Access curated travel packages that offer unique experiences
                  and exclusive benefits. Discover the best deals and
                  destinations.
                </p>
                <a
                  href="/services/travel-packages"
                  className="text-blue-600 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* get started with us */}
        <section className="text-center mb-12 mt-8 rounded-lg shadow-md p-10">
          <h2 className="text-3xl font-semibold mb-4">Get Started with Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ready to start your adventure?{" "}
            <a href="/contact" className="text-yellow-500 hover:underline">
              Contact us
            </a>{" "}
            today to plan your next unforgettable journey!
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:text-yellow-500 hover:bg-gray-100 border-2 border-yellow-500"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}
