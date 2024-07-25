"use client"
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
      home
      </>
    );
}