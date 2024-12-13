// pages/terms.js
import Link from "next/link";
import Head from "next/head";

export default function Terms() {
  return (
    <div className="mx-auto text-justify">
      <Head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Terms and Conditions for [Your Travel Website Name]"
        />
      </Head>
      <header
        className="bg-blue-200 text-white text-center py-16 md:py-24"
        style={{
          backgroundImage: 'url("/images/term-service.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Terms and Conditions
        </h1>
      </header>
      <main className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl lg:max-w-6xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <section className="mb-6">
            <p>
              Welcome to Pravaasa Bliss (“we,” “our,” “us”). By accessing and
              using our website, you agree to comply with and be bound by the
              following Terms and Conditions. Please read them carefully.
            </p>
          </section>
          <hr className="my-5" />
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              1. Use of Website
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Eligibility:</strong> You must be at least 18 years old
                to use our website. By using our site, you represent and warrant
                that you meet this requirement.
              </li>
              <li>
                <strong>Account Responsibility:</strong> If you create an
                account, you are responsible for maintaining the confidentiality
                of your account information and for all activities that occur
                under your account.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> You agree not to use the
                site for any unlawful purposes or to engage in any activity that
                disrupts or interferes with the operation of the website.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              2. Travel Services
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Booking:</strong> All travel bookings are subject to
                availability and confirmation. We act as an intermediary between
                you and the service providers.
              </li>
              <li>
                <strong>Pricing:</strong> Prices are subject to change without
                notice. Final pricing will be confirmed at the time of booking.
              </li>
              <li>
                <strong>Cancellations and Refunds:</strong> Cancellation
                policies vary by provider. Please review the specific terms
                associated with your booking.
                <div className="ml-4 sm:ml-5">
                  <h3 className="font-bold">1. Cancellation Policy:</h3>
                  <ul className="list-disc list-inside ml-3 space-y-2">
                    <li>
                      <strong>Standard Cancellation:</strong> If you need to
                      cancel your booking, please do so at least 7 days before
                      your scheduled departure date to avoid cancellation fees.
                    </li>
                    <li>
                      <strong>Cancellation Fees:</strong>
                      <ul className="ml-5 space-y-2">
                        <li>
                          Cancellations made less than 7 days before departure
                          will incur a 50% cancellation fee.
                        </li>
                        <li>
                          No refunds will be provided for cancellations made on
                          the day of departure or for no-shows.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h3 className="font-bold">2. Refund Policy:</h3>
                  <ul className="list-disc list-inside ml-3 space-y-2">
                    <li>
                      <strong>Eligibility for Refunds:</strong> Refund requests
                      will only be considered if the cancellation is made within
                      the specified time frames.
                    </li>
                    <li>
                      <strong>Processing Time:</strong> Refunds will be
                      processed within 5 business days after the cancellation
                      request is received and approved.
                    </li>
                    <li>
                      <strong>Refund Method:</strong> Refunds will be issued to
                      the original payment method used during the booking.
                    </li>
                  </ul>
                  <h3 className="font-bold">3. Exceptional Circumstances:</h3>
                  <ul className="list-disc list-inside ml-3 space-y-2">
                    <li>
                      In the event of unforeseen circumstances (e.g., natural
                      disasters, government restrictions), we may offer a full
                      or partial refund or the option to reschedule your
                      booking.
                    </li>
                    <li>
                      If a trip is canceled by us due to circumstances beyond
                      our control, customers will be notified as soon as
                      possible and offered the choice of a full refund or
                      alternative arrangements.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">3. Content</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Intellectual Property:</strong> All content on our
                website, including text, images, and logos, is owned by or
                licensed to us and may not be used without our permission.
              </li>
              <li>
                <strong>Accuracy:</strong> We strive to ensure the accuracy of
                the information on our site but make no guarantees. We are not
                responsible for any errors or omissions.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              4. Limitation of Liability
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>No Warranty:</strong> Our website and services are
                provided “as is” without any warranties of any kind. We disclaim
                all warranties, express or implied.
              </li>
              <li>
                <strong>Liability:</strong> We are not liable for any indirect,
                incidental, or consequential damages arising from your use of
                our website or services.
              </li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">5. Privacy</h2>
            <p>
              <strong>Data Collection:</strong> We collect personal information
              in accordance with our Privacy Policy. By using our website, you
              consent to our data practices.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">6. Modifications</h2>
            <p>
              <strong>Changes to Terms:</strong> We reserve the right to modify
              these Terms and Conditions at any time. Changes will be effective
              when posted on our website.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              <strong>Jurisdiction:</strong> These Terms and Conditions are
              governed by the laws of India. Any disputes will be resolved in
              the courts of Shimla, Himachal Pradesh.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <Link
                href="/contact"
                className="hover:underline text-sm text-blue-500 font-bold"
                title="Contact"
              >
                Contact
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
