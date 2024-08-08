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

        {/* <hr className="w-11/12 mx-auto border-gray-400 mt-24" /> */}
        {/* Our Mission */}
        <div className="mb-4 mt-24">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-lg text-gray-700">
            At Pravaasa Bliss, our mission is to redefine travel by delivering
            exceptional and personalized experiences that cater to the diverse
            needs of our clients. We are committed to transforming ordinary
            trips into extraordinary journeys through a blend of meticulous
            planning and outstanding service.
          </p>
        </div>

        <section className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            {/* Image or Content for Our Mission */}
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 text-lg text-gray-700">
            
              <span className="font-bold text-3xl">Why Choose Us?</span>
              <ul className="mt-4">
                <li className="mb-2">
                  <span className="font-bold">
                    Customized Travel Solutions:
                  </span>{" "}
                  We understand that every traveler is unique. Our mission is to
                  create bespoke travel itineraries that align perfectly with
                  your preferences, whether you seek relaxation, adventure, or
                  cultural enrichment.
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    Unparalleled Service Quality:
                  </span>{" "}
                  We strive for excellence in every aspect of our service. From
                  the moment you reach out to us until the end of your journey,
                  our team of dedicated travel professionals is here to ensure a
                  seamless and enjoyable experience.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Passionate Expertise:</span> Our
                  team comprises experienced travel experts who are passionate
                  about exploring the world. We leverage our extensive knowledge
                  and connections to provide you with unique destinations,
                  exclusive offers, and insider tips that enhance your travel
                  experience.
                </li>
                <li className="mb-2">
                  <span className="font-bold">
                    Sustainable Travel Practices:
                  </span>{" "}
                  We are committed to promoting sustainable travel. Our mission
                  includes supporting eco-friendly destinations and practices
                  that minimize our environmental footprint while maximizing the
                  positive impact on local communities.
                </li>
              </ul>
              At Pravaasa Bliss, we are driven by a passion for travel and a
              commitment to providing our clients with unforgettable experiences
              that inspire and delight. Join us in creating memories that last a
              lifetime, and let us turn your travel dreams into reality.
          
          </div>
        </section>

        <hr className="w-11/12 mx-auto border-gray-400 my-24" />

        {/* Our Vision */}
        <section className=" items-center mb-8">
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg text-gray-700">
              At Pravaasa Bliss, our vision is to set the standard for
              exceptional travel experiences by combining innovation,
              authenticity, and unmatched service. We aspire to be the leading
              name in the travel industry, renowned for our dedication to
              crafting journeys that are as unique as each traveler.
            </p>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0 text-lg text-gray-700">
             
                <span className="font-bold text-3xl">
                  Key Aspects of Our Vision:
                </span>
                <ul className="mt-4">
                  <li className="mb-2">
                    <span className="font-bold">
                      Innovative Travel Solutions:
                    </span>{" "}
                    We aim to continually innovate and adapt to the evolving
                    needs of travelers. By embracing the latest technologies and
                    trends, we offer cutting-edge travel solutions that enhance
                    convenience and enrich your journey.
                  </li>
                  <li className="mb-2">
                    <span className="font-bold">Authentic Experiences:</span>{" "}
                    Our vision includes providing authentic and immersive travel
                    experiences that connect you with local cultures and
                    traditions. We believe in delivering genuine interactions
                    and unique insights that go beyond the typical tourist
                    experience.
                  </li>
                  <li className="mb-2">
                    <span className="font-bold">Exceptional Service:</span> We
                    are committed to delivering exceptional service at every
                    touchpoint. From personalized itineraries to attentive
                    support, our goal is to exceed expectations and ensure every
                    aspect of your travel is seamless and enjoyable.
                  </li>
                  <li className="mb-2">
                    <span className="font-bold">
                      Global Reach with Local Expertise:
                    </span>{" "}
                    Combining our global network with local expertise, we offer
                    unparalleled access to exclusive destinations and
                    experiences. Our knowledgeable team works tirelessly to
                    provide you with insider tips and bespoke recommendations
                    that elevate your travel experience.
                  </li>
                </ul>
                At Pravaasa Bliss, we envision a world where every journey is
                memorable, enriching, and perfectly tailored to your desires.
                Join us in exploring new horizons and creating lasting memories
                with travel experiences that reflect our commitment to
                excellence.
            
            </div>
            <div className="w-full md:w-1/2">
              {/* Image or Content for Our Vision */}
              <img
                src="/images/vision.jpg"
                alt="Our Vision"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <hr className="w-11/12 mx-auto border-gray-400 my-24" />

        {/* meet our team */}
        <section>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
            Meet Out Team
          </h3>
          <hr className="mx-auto border-gray-400 w-44" />
          <p className="text-lg text-gray-700 mt-8 text-center">
            Our dedicated team of travel experts is the heart of Pravaasa Bliss.
            Each member brings a wealth of knowledge, passion, and experience to
            ensure that your travel plans are executed flawlessly. Get to know
            the professionals who work tirelessly to craft your perfect
            adventure.
          </p>

          <div className="flex flex-wrap justify-center gap-8 p-6 mt-8">
  {/* <!-- Team Member 1 --> */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
    <div className="flex justify-center p-4">
      <img src="/images/team-member-1.jpg" alt="Team Member 1" className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"/>
    </div>
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">John Doe</h2>
      <p className="text-gray-600">Lead Travel Consultant with 10 years of experience in crafting unforgettable travel experiences. Passionate about cultural immersion and personalized service.</p>
    </div>
  </div>

  {/* <!-- Team Member 2 --> */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
    <div className="flex justify-center p-4">
      <img src="/images/team-member-2.jpg" alt="Team Member 2" className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"/>
    </div>
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">Jane Smith</h2>
      <p className="text-gray-600">Senior Travel Planner specializing in adventure and luxury travel. Dedicated to creating bespoke itineraries that exceed client expectations.</p>
    </div>
  </div>

  {/* <!-- Team Member 3 --> */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
    <div className="flex justify-center p-4">
      <img src="/images/team-member-3.jpg" alt="Team Member 3" className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"/>
    </div>
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-2">Michael Brown</h2>
      <p className="text-gray-600">Travel Specialist with a focus on cultural and educational travel. Committed to delivering enriching travel experiences and exceptional customer service.</p>
    </div>
  </div>
</div>

        </section>


        {/* slideshow for review system */}
        



      </main>
    </>
  );
};

export default AboutUs;
