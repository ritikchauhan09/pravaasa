// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl md:text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700">
        Page Not Found. The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
}
