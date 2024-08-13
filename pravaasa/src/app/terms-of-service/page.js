// pages/terms.js

import Head from 'next/head';

export default function Terms() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions for [Your Travel Website Name]" />
      </Head>
      <header className='bg-blue-200 text-white text-center py-24' style={{backgroundImage:'url("/images/term-service.jpg")'}}>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Terms and Conditions</h1>
      </header>
      <main className='bg-gray-100 min-h-screen py-8 px-4 md:px-8 '>
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to [Your Travel Website Name] (“we,” “our,” “us”). By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Website</h2>
          <ul className="list-disc list-inside">
            <li><strong>Eligibility:</strong> You must be at least 18 years old to use our website. By using our site, you represent and warrant that you meet this requirement.</li>
            <li><strong>Account Responsibility:</strong> If you create an account, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
            <li><strong>Prohibited Activities:</strong> You agree not to use the site for any unlawful purposes or to engage in any activity that disrupts or interferes with the operation of the website.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Travel Services</h2>
          <ul className="list-disc list-inside">
            <li><strong>Booking:</strong> All travel bookings are subject to availability and confirmation. We act as an intermediary between you and the service providers.</li>
            <li><strong>Pricing:</strong> Prices are subject to change without notice. Final pricing will be confirmed at the time of booking.</li>
            <li><strong>Cancellations and Refunds:</strong> Cancellation policies vary by provider. Please review the specific terms associated with your booking.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Content</h2>
          <ul className="list-disc list-inside">
            <li><strong>Intellectual Property:</strong> All content on our website, including text, images, and logos, is owned by or licensed to us and may not be used without our permission.</li>
            <li><strong>Accuracy:</strong> We strive to ensure the accuracy of the information on our site but make no guarantees. We are not responsible for any errors or omissions.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <ul className="list-disc list-inside">
            <li><strong>No Warranty:</strong> Our website and services are provided “as is” without any warranties of any kind. We disclaim all warranties, express or implied.</li>
            <li><strong>Liability:</strong> We are not liable for any indirect, incidental, or consequential damages arising from your use of our website or services.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
          <p>
            <strong>Data Collection:</strong> We collect personal information in accordance with our Privacy Policy. By using our website, you consent to our data practices.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p>
            <strong>Changes to Terms:</strong> We reserve the right to modify these Terms and Conditions at any time. Changes will be effective when posted on our website.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p>
            <strong>Jurisdiction:</strong> These Terms and Conditions are governed by the laws of [Your Country/State]. Any disputes will be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].
          </p>
        </section>
        </div>
      </main>
    </div>
  );
}
