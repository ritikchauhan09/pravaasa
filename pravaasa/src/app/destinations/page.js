// pages/destinations.js
import Head from 'next/head';

const destinations = [
  {
    name: 'Goa',
    image: '/images/goa.jpg',
    description: 'Enjoy the vibrant beaches, lively nightlife, and rich culture of Goa.',
  },
  {
    name: 'Himachal Pradesh',
    image: '/images/himachal.jpg',
    description: 'Explore the majestic mountains, serene valleys, and adventure activities in Himachal Pradesh.',
  },
  {
    name: 'Rajasthan',
    image: '/images/rajasthan.jpg',
    description: 'Experience the royal heritage, desert landscapes, and colorful festivals of Rajasthan.',
  },
];

const Destinations = () => {
  return (
    <>
      <Head>
        <title>Top Destinations in India - Pravaasa Bliss</title>
        <meta name="description" content="Explore the top travel destinations in India with Pravaasa Bliss. Discover Goa, Himachal Pradesh, and Rajasthan for unforgettable experiences." />
        <meta name="keywords" content="India travel destinations, Goa, Himachal Pradesh, Rajasthan, travel experiences" />
        <meta property="og:title" content="Top Destinations in India - Pravaasa Bliss" />
        <meta property="og:description" content="Explore the top travel destinations in India with Pravaasa Bliss. Discover Goa, Himachal Pradesh, and Rajasthan for unforgettable experiences." />
        <meta property="og:image" content="/images/destinations.jpg" />
        <meta property="og:url" content="https://www.pravaasabliss.com/destinations" />
      </Head>

      <main className=" bg-gray-100">
        <header className="bg-blue-600 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Top Destinations in India</h1>
          <p className="text-lg mt-2">Discover the most amazing travel destinations across India with Pravaasa Bliss.</p>
        </header>

        <section className="py-8 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.name} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{destination.name}</h2>
                  <p className="text-gray-700">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Destinations;
