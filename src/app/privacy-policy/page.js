// pages/privacy-policy.js
import Head from "next/head";
const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Pravaasa Bliss</title>
        <meta
          name="description"
          content="Privacy Policy for Pravaasa Bliss, detailing how we collect, use, and protect your information. Learn about your rights and how we ensure data security."
        />
        <meta
          name="keywords"
          content="Privacy Policy, data protection, Pravaasa Bliss"
        />
        <meta property="og:title" content="Privacy Policy - Pravaasa Bliss" />
        <meta
          property="og:description"
          content="Learn about how Pravaasa Bliss handles your personal information, including collection, use, and security measures."
        />
        <meta property="og:image" content="/images/privacy-policy.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/privacy-policy"
        />
      </Head>
      <header
        className="relative w-full h-48 md:h-64 lg:h-72 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/policy.jpg")' }}
      >
        <div className="flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold">
            Privacy Policy
          </h1>
        </div>
      </header>

      {/* main */}
      <main className="bg-gray-100 min-h-screen py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
          <p className="text-base mb-6">
            Welcome to Pravaasa Bliss. We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your
            information when you visit our website [www.yourwebsite.com]
            . Please read this policy carefully.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            1. Information We Collect
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            1.1 Personal Information
          </h3>
          <div className="text-base mb-4">
            When you use our Site, we may collect personal information that you
            voluntarily provide, including:
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>
                <strong>Contact Information:</strong> Your name, email address,
                phone number, and mailing address.
              </li>
              <li>
                <strong>Booking Information:</strong> Details about your travel
                plans, preferences, and payment information.
              </li>
              <li>
                <strong>Account Information:</strong> If you create an account,
                we may collect your username and password.
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            1.2 Non-Personal Information
          </h3>
          <div className="text-base mb-4">
            We may also collect non-personal information, such as:
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                Site, including your IP address, browser type, operating system,
                and referring URLs.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your experience and
                gather data about how our Site is used.
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <div className="text-base mb-4">
            We use the information we collect for the following purposes:
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>
                <strong>To Provide and Manage Services:</strong> Process
                bookings, respond to inquiries, and improve our Site.
              </li>
              <li>
                <strong>To Personalize Your Experience:</strong> Customize
                content and offers based on your preferences.
              </li>
              <li>
                <strong>To Communicate with You:</strong> Send newsletters,
                updates, and promotional materials (you can opt-out at any
                time).
              </li>
              <li>
                <strong>For Analytics and Research:</strong> Analyze usage
                patterns to enhance our Site’s functionality and user
                experience.
              </li>
              <li>
                <strong>For Security:</strong> Detect and prevent fraudulent
                activities and ensure the security of our Site.
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            3. How We Share Your Information
          </h2>
          <div className="text-base mb-4">
            We may share your information in the following circumstances:
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>
                <strong>With Service Providers:</strong> We may share
                information with third-party service providers who assist us in
                operating our Site, processing payments, and delivering
                services.
              </li>
              <li>
                <strong>For Legal Compliance:</strong> We may disclose
                information if required to do so by law, or to comply with legal
                processes, or to protect the rights, property, or safety of us
                or others.
              </li>
              <li>
                <strong>In Business Transfers:</strong> In the event of a
                merger, acquisition, or sale of assets, your information may be
                transferred as part of the transaction.
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            4. Security
          </h2>
          <p className="text-base mb-4">
            We implement reasonable technical and organizational measures to
            protect your personal information. However, no method of
            transmission over the Internet or electronic storage is completely
            secure. While we strive to protect your information, we cannot
            guarantee its absolute security.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            5. Your Rights
          </h2>
          <div className="text-base mb-4">
            You have the following rights regarding your personal information:
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>
                <strong>Access and Correction:</strong> You can request access
                to and correction of your personal information.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may unsubscribe from marketing
                communications at any time by following the instructions in the
                emails.
              </li>
              <li>
                <strong>Deletion:</strong> You may request the deletion of your
                personal information, subject to legal and contractual
                limitations.
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="text-base mb-4">
            We use cookies and similar technologies to enhance your experience
            and collect data about your usage of our Site. You can manage your
            cookie preferences through your browser settings. Note that
            disabling cookies may impact the functionality of certain features
            on our Site.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-base mb-4">
            Our Site may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these
            third-party sites. We encourage you to review the privacy policies
            of any third-party sites you visit.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            8. Children’s Privacy
          </h2>
          <p className="text-base mb-4">
            Our Site is not intended for use by children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have collected such information, we
            will take steps to delete it.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-base mb-4">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date. Your continued
            use of our Site after any changes constitutes your acceptance of the
            revised policy.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
            10. Contact Us
          </h2>
          <p className="text-base mb-4">
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at:
          </p>
          <p className="text-base mb-4">
            <strong>Pravaasa Bliss</strong>
            <br />
            Email: chauhanmukil@gmail.com
            <br />
            Phone: +91 8988336969
            <br />
            Address: Vill. Dhangvi Post Office. Kokunala, Dhangwi Kalan (145),
            Shimla, Himachal Pradesh, 171202
          </p>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
