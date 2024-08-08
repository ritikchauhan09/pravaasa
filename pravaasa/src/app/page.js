"use client"
import Head from 'next/head';
import Image from 'next/image';
import '../app/globals.css'
import { useState, useEffect } from 'react';
import SplashScreen from '../components/splashScreen';
// import RootLayout from './layout';
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const splashScreenStatus = sessionStorage.getItem('splashScreenStatus');  
      if (splashScreenStatus === 'shown') {
        // Splash screen has been shown already in this session
        setIsLoading(false);
    } else {
        // Show splash screen and set a flag in session storage
        const timer = setTimeout(() => {
            sessionStorage.setItem('splashScreenStatus', 'shown');
            setIsLoading(false);
        }, 3000); // Display the splash screen for 3 seconds

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
      }
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return(
      <>
      <Head>
        <title>Home - Pravaasa Bliss</title>
        <meta name="description" content="Welcome to Pravaasa Bliss, your gateway to unforgettable travel experiences. Discover our services and start your journey today." />
        <meta name="keywords" content="Travel, Pravaasa Bliss, Travel Services, Adventure, Vacation" />
        <meta property="og:title" content="Home - Pravaasa Bliss" />
        <meta property="og:description" content="Welcome to Pravaasa Bliss, your gateway to unforgettable travel experiences. Discover our services and start your journey today." />
        <meta property="og:image" content="/images/home-hero.jpg" />
        <meta property="og:url" content="https://www.pravaasabliss.com" />
      </Head>

      <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home-hero.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className='text-yellow-500'>Pravaasa Bliss</span></h1>
            <p className="text-lg md:text-2xl mb-8">Your gateway to unforgettable travel experiences. Discover the world with us!</p>
            <a href="/about" className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-gray-100 hover:text-yellow-500 hover:border-2 hover:border-yellow-500">Learn More</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700">
            At Pravaasa Bliss, we offer customized travel solutions to make your journeys unforgettable. Our dedicated team ensures exceptional service and unique experiences tailored just for you.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
              <Image src="/images/hot-air-balloon.gif" alt="Adventure" width={60} height={60} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adventure Tours</h3>
            <p className="text-gray-600">Explore breathtaking landscapes and experience thrilling adventures with our expertly crafted tours.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-green-500 rounded-full mb-4 flex items-center justify-center">
              <Image src="/images/clipboard.gif" alt="Relaxation" width={60} height={60} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Relaxation Packages</h3>
            <p className="text-gray-600">Indulge in our luxury relaxation packages designed to rejuvenate and refresh you.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="w-16 h-16 bg-red-500 rounded-full mb-4 flex items-center justify-center">
              <Image src="/images/namaste.gif" alt="Culture" width={60} height={60} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultural Experiences</h3>
            <p className="text-gray-600">Immerse yourself in rich cultural experiences with our curated cultural tours and activities.</p>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Get Started with Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ready to start your adventure? <a href="/contact" className="text-yellow-500 hover:underline">Contact us</a> today to plan your next unforgettable journey!
          </p>
          <a href="/contact" className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:text-yellow-500 hover:bg-gray-100 border-2 border-yellow-500">Get in Touch</a>
        </section>
      </main>

      
    </>
  );
};