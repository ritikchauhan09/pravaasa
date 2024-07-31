import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* SEO meta tags */}
      <head>
        <title>About Us - Pravaasa Bliss</title>
        <meta name="description" content="Learn more about Pravaasa Bliss, a company dedicated to providing unforgettable travel experiences. Discover our mission, vision, and team." />
        <meta name="keywords" content="About Us, Pravaasa Bliss, Travel Experiences, Our Team, Travel Company" />
        <meta property="og:title" content="About Us - Pravaasa Bliss" />
        <meta property="og:description" content="Learn more about Pravaasa Bliss, a company dedicated to providing unforgettable travel experiences. Discover our mission, vision, and team." />
        <meta property="og:image" content="/images/about-us.jpg" />
        <meta property="og:url" content="https://www.pravaasabliss.com/about-us" />
      </head>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">Discover who we are and what drives us to create unforgettable travel experiences.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Company Mission */}
        <div className="flex flex-col items-center text-center">
          <img src="/images/mission.jpg" alt="Our Mission" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
          <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-600">At Pravaasa Bliss, our mission is to transform ordinary travel experiences into extraordinary adventures. We strive to deliver personalized, high-quality travel services that exceed our clients' expectations.</p>
        </div>

        {/* Our Team */}
        <div className="flex flex-col items-center text-center">
          <img src="/images/team.jpg" alt="Our Team" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
          <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-600">Our dedicated team of travel experts works tirelessly to ensure every journey is unforgettable. Get to know the passionate professionals who make Pravaasa Bliss a leader in the travel industry.</p>
        </div>
      </section>

      {/* Company Values */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-lg text-gray-700">Integrity, Excellence, and Innovation are at the core of everything we do. We are committed to providing exceptional service, fostering genuine connections, and continuously improving our offerings.</p>
      </section>

      {/* Contact Information */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700">Have questions or want to learn more about our services? Feel free to <a href="/contact" className="text-blue-600 hover:underline">contact us</a> today!</p>
      </section>
    </div>
  );
};

export default AboutUs;
