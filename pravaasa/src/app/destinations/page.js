// pages/destinations.js
import Head from "next/head";
import Image from "next/image";

const topDestinations = [
  {
    name: "Goa",
    image: "/images/goa.jpg",
    description:
      "Enjoy the vibrant beaches, lively nightlife, and rich culture of Goa.",
  },
  {
    name: "Himachal Pradesh",
    image: "/images/himachal.jpg",
    description:
      "Explore the majestic mountains, serene valleys, and adventure activities in Himachal Pradesh.",
  },
  {
    name: "Rajasthan",
    image: "/images/rajasthan.jpg",
    description:
      "Experience the royal heritage, desert landscapes, and colorful festivals of Rajasthan.",
  },
  {
    name: "Kerala",
    image: "/images/kerala.jpg",
    description:
      "Relax in the backwaters, lush greenery, and tranquil beaches of Kerala.",
  },
  {
    name: "Uttarakhand",
    image: "/images/uttarakhand.jpg",
    description:
      "Discover the breathtaking landscapes, spiritual sites, and adventure activities in Uttarakhand.",
  },
  {
    name: "Delhi",
    image: "/images/delhi.jpg",
    description:
      "Explore the historical monuments, vibrant markets, and diverse cuisine of Delhi.",
  },
];

const allDestinations = [
  { name: "Andaman and Nicobar Islands", image: "/images/andaman.jpg" },
  { name: "Arunachal Pradesh", image: "/images/arunachal.jpg" },
  { name: "Assam", image: "/images/assam.jpg" },
  { name: "Bihar", image: "/images/bihar.jpg" },
  { name: "Chhattisgarh", image: "/images/chhattisgarh.jpg" },
  { name: "Goa", image: "/images/goa.jpg" },
  { name: "Gujarat", image: "/images/gujarat.jpg" },
  { name: "Haryana", image: "/images/haryana.jpg" },
  { name: "Himachal Pradesh", image: "/images/himachal.jpg" },
  { name: "Jharkhand", image: "/images/jharkhand.jpg" },
  { name: "Karnataka", image: "/images/karnataka.jpg" },
  { name: "Kerala", image: "/images/kerala.jpg" },
  { name: "Ladakh", image: "/images/ladakh.jpg" },
  { name: "Lakshadweep", image: "/images/lakshadweep.jpg" },
  { name: "Madhya Pradesh", image: "/images/madhya-pradesh.jpg" },
  { name: "Maharashtra", image: "/images/maharashtra.jpg" },
  { name: "Manipur", image: "/images/manipur.jpg" },
  { name: "Meghalaya", image: "/images/meghalaya.jpg" },
  { name: "Mizoram", image: "/images/mizoram.jpg" },
  { name: "Nagaland", image: "/images/nagaland.jpg" },
  { name: "Odisha", image: "/images/odisha.jpg" },
  { name: "Puducherry", image: "/images/puducherry.jpg" },
  { name: "Punjab", image: "/images/punjab.jpg" },
  { name: "Rajasthan", image: "/images/rajasthan.jpg" },
  { name: "Sikkim", image: "/images/sikkim.jpg" },
  { name: "Tamil Nadu", image: "/images/tamil-nadu.jpg" },
  { name: "Telangana", image: "/images/telangana.jpg" },
  { name: "Tripura", image: "/images/tripura.jpg" },
  { name: "Uttar Pradesh", image: "/images/uttar-pradesh.jpg" },
  { name: "Uttarakhand", image: "/images/uttarakhand.jpg" },
  { name: "West Bengal", image: "/images/west-bengal.jpg" },
];

const Destinations = () => {
  return (
    <>
      <Head>
        <title>Top Destinations in India - Pravaasa Bliss</title>
        <meta
          name="description"
          content="Explore the top travel destinations in India with Pravaasa Bliss. Discover Goa, Himachal Pradesh, Rajasthan, Kerala, Uttarakhand, and Delhi for unforgettable experiences."
        />
        <meta
          name="keywords"
          content="India travel destinations, Goa, Himachal Pradesh, Rajasthan, Kerala, Uttarakhand, Delhi, travel experiences"
        />
        <meta
          property="og:title"
          content="Top Destinations in India - Pravaasa Bliss"
        />
        <meta
          property="og:description"
          content="Explore the top travel destinations in India with Pravaasa Bliss. Discover Goa, Himachal Pradesh, Rajasthan, Kerala, Uttarakhand, and Delhi for unforgettable experiences."
        />
        <meta property="og:image" content="/images/destinations.jpg" />
        <meta
          property="og:url"
          content="https://www.pravaasabliss.com/destinations"
        />
      </Head>

      <main className="bg-gray-100">
        <header className="bg-blue-200 text-white text-center py-12">
          <h1 className="text-4xl font-bold">Top Destinations in India</h1>
          <p className="text-lg mt-2">
            Discover the most amazing travel destinations across India with
            Pravaasa Bliss.
          </p>
        </header>

        <section className="py-8 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topDestinations.map((destination) => (
              <div
                key={destination.name}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                  priority
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {destination.name}
                  </h2>
                  <p className="text-gray-700">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <main className="bg-white mb-20">
          <header className="bg-blue-200 text-white text-center py-12 my-20">
            <h2 className="text-3xl font-bold">All Destinations in India</h2>
            <p className="text-lg mt-2">
              Explore every travel destination in India with detailed insights and beautiful imagery.
            </p>
          </header>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allDestinations.map((destination) => (
              <div
                key={destination.name}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </main>
      </main>
    </>
  );
};

export default Destinations;
