import React from "react";

const Newsletter = () => (
  <section aria-label="Newsletter Subscription" className="bg-black-900">
    <div className="container mx-auto px-4">
      <h2 className="text-lg font-bold text-center text-white mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-center text-white mb-8 text-sm">
        Stay updated with the latest travel news and exclusive offers from
        Pravaasa Bliss.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-2 rounded-md border border-gray-300 w-full md:w-4/5 lg:w-3/5"
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 text-gray-100 py-2 px-2 rounded-md hover:bg-gray-100 hover:text-yellow-600 transition duration-300 w-full md:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;
