// app/error.js
'use client';  // Ensure this is a client component

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);  // Log the error to the console
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl md:text-6xl font-bold text-red-500">500</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700">
        Internal Server Error. Something went wrong on our end.
      </p>
      <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
        onClick={() => reset()} // This will try to re-render the page
      >
        Try Again
      </button>
      <Link href="/" className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">
        Go Back Home
      </Link>
    </div>
  );
}