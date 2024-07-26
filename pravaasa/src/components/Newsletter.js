import React from 'react';

const Newsletter = () => (
  <section aria-label="Newsletter Subscription">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center text-white mb-4">Subscribe to our Newsletter</h2>
      <p className="text-center text-white mb-8">
        Stay updated with the latest travel news and exclusive offers from Pravaasa Bliss.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4">
      <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md border border-gray-300 w-full md:flex-grow-0 md:w-4/5"
          required
        />
         <button
          type="submit"
          className="bg-yellow-500 text-gray-100 py-2 px-4 rounded-md hover:bg-gray-100 hover:text-yellow-600 transition duration-300 w-full md:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;
