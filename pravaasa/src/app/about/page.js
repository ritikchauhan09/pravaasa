import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - Pravaasa Bliss</title>
        <meta
          name="description"
          content="Discover Pravaasa Bliss and our mission to transform ordinary travel experiences into extraordinary adventures. Learn about our vision and values."
        />
        <meta
          name="keywords"
          content="About Us, Pravaasa Bliss, Travel Experiences, Our Mission, Our Vision"
        />
        <meta property="og:title" content="About Us - Pravaasa Bliss" />
        <meta
          property="og:description"
          content="Discover Pravaasa Bliss and our mission to transform ordinary travel experiences into extraordinary adventures. Learn about our vision and values."
        />
        <meta property="og:image" content="/images/about-us.jpg" />
        <meta
          property="og:url"
          content="https://www.pravaasabliss.com/about-us"
        />
      </Head>

      <header
        className="relative w-full h-48 md:h-72 lg:h-80 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/aboutus.jpg')" }}
      >
        <h1 className="text-center mt-20 md:mt-28 text-white text-3xl md:text-6xl font-bold">
          About Us
        </h1>
      </header>

      <main className="p-4 md:p-8 lg:p-12 bg-white">
        {/* Welcome Company Intro */}
        <section className="mb-8 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome to Pravaasa Bliss
          </h2>
          <p className="text-lg text-gray-700">
            At Pravaasa Bliss, we are dedicated to transforming your travel
            dreams into unforgettable experiences. As a premier travel agency,
            our goal is to provide exceptional, personalized travel services
            that cater to your unique needs and preferences.
            <br />
            <br />
            Our mission is to offer high-quality travel experiences that exceed
            expectations, whether you’re seeking a relaxing retreat, an
            adventurous escapade, or a deep cultural immersion. With a team of
            experienced travel experts, we ensure that each journey is
            meticulously planned and executed to deliver both enjoyment and
            peace of mind.
            <br />
            <br />
            Discover the difference with Pravaasa Bliss, where every trip is
            designed to be a memorable adventure. Explore the world with
            confidence and excitement, knowing that our commitment to excellence
            and customer satisfaction is at the heart of everything we do.
            <br />
            <br />
          </p>
        </section>

        {/* Our Mission */}
        <section className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            {/* Image or Content for Our Mission */}
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to create unforgettable travel experiences by
              offering exceptional service and personalized attention. We strive
              to go beyond the ordinary, delivering journeys that exceed our
              clients' expectations and inspire a lifelong love of travel.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg text-gray-700">
              We envision a world where every travel experience is enriched with
              cultural insights, exceptional service, and personal touches. Our
              goal is to be the leading travel company known for its innovation,
              integrity, and commitment to making every journey unique.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* Image or Content for Our Vision */}
            <img
              src="/images/vision.jpg"
              alt="Our Vision"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Meet Out Team</h3>
          <p className="text-lg text-gray-700">
            Our dedicated team of travel experts is the heart of Pravaasa Bliss.
            Each member brings a wealth of knowledge, passion, and experience to
            ensure that your travel plans are executed flawlessly. Get to know
            the professionals who work tirelessly to craft your perfect
            adventure.
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
