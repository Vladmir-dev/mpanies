import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TermsConditions = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use of the Website</h2>
            <p>
              To register as a user, you must provide a unique username and
              password and certain information to info@mpanies.com. Use your
              unique username and password to access the Website for purchasing
              Goods.
            </p>
            <p>
              You agree that your username and password shall:
              <ul className="list-disc pl-8">
                <li>Be used for personal use only. </li>
                <li>Not be disclosed to any third party.</li>
              </ul>
            </p>
            <p>
              For security purposes, you agree to enter the correct username and
              password when ordering Goods, failing which you will be denied
              access.
            </p>
            <p>
              You agree that, once the correct username and password are
              entered, irrespective of whether the use is unauthorized or
              fraudulent, you will be liable for payment of such order, unless
              canceled by you. You agree to notify Mpanies immediately upon
              becoming aware of or suspecting any unauthorized access and take
              steps to mitigate any resultant loss or harm.
            </p>
            <p>
              By using the Website, you warrant that you are 15 years of age or
              older and of full legal capacity. If under or not legally
              permitted to enter a binding agreement, you may use the Website
              only with parental or legal guardian involvement.
            </p>
            <p>
              You agree not to use any device, software, or instrument to
              interfere with the proper working of the Website. You may not use
              any robot, spider, other automatic device, or manual process to
              monitor, copy, distribute, or modify the Website without prior
              written consent.
            </p>
            <p>
              You may not use the Website to distribute defamatory, offensive,
              hate speech, or otherwise unlawful material. You may not display,
              publish, copy, print, post, or use the Website and/or information
              contained without the express prior written consent of an
              authorized Mpanies representative.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Payments</h2>
            <p>
              We are committed to providing secure online payment facilities.
              All transactions are encrypted using appropriate technology.
              Payment can be made for Goods via:
            </p>
            <ul className="list-disc pl-8">
              <li>
                Credit card: where payment is made by credit card, additional
                information may be required to authorize and/or verify payment.
              </li>
              <li>
                Mobile Money: where payment is made via Telephone, User Mobile
                Money Account to Mpanies’ which could directly to Mpanies’
                mobile money or bank, thus Using appropriate technologies,
                additional information may be required to authorize and/or
                verify payment.
              </li>
              <li>
                Direct bank deposit or electronic funds transfer: payment must
                be made within 2 days of placing your order.
              </li>
            </ul>
            <p>
              See our FAQ for more details on payment options and assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Delivery</h2>
            <p>
              Mpanies offers delivery via courier. See our FAQ for delivery and
              shipping terms. Some items may carry additional delivery fees,
              included in the cost upon checkout.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Delivery</h2>
            <p>
              We aim to deliver the Goods as soon as possible but no later than
              5 days from receipt of payment, depending on the orders and
              availability of the product, any extenuation of days shall be
              communicated to a buyer in time. For some orders may be delivered
              in minutes or hours of order from receipt of payments. You will be
              notified if we are unable to deliver within this period. You may
              then elect to cancel your order within 7 days of receiving such
              notification.
            </p>
            <p>
              Upon cancellation of the ordered product, our clients’ money is
              expected to be refunded within 3-5 working days.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Mistakes</h2>
            <p>
              We will make reasonable efforts to accurately reflect the
              description, availability, purchase price, and delivery charges of
              Goods on the Website. We shall not be liable for any loss or
              expense relating to a transaction based on any error, except to
              refund you for any amount already paid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rules</h2>
            <ul className="list-disc pl-8">
              <li>You must be a valid Mpanies holder.</li>
              <li>You may sign up only one email address for yourself.</li>
              <li>
                You may not sign up on behalf of friends or use friends’ email
                addresses.
              </li>
              <li>You may not use someone else’s account to purchase Goods.</li>
              <li>
                By providing us with friends’ contact information, you warrant
                that you are authorized to share that information.
              </li>
            </ul>
            <p>
              Any abuse of the system may result in suspension or termination of
              your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ownership and Copyright</h2>
            <p>
              The Website Content is protected by law, including copyright and
              trademark law. It is the property of Mpanies, its advertisers,
              sponsors, or licensed to Mpanies.
            </p>
            <p>
              You will not acquire any right, title, or interest in or to the
              Website or the Website Content. Any use, distribution, or
              reproduction of the Website Content is prohibited unless expressly
              authorized in terms of these Terms and Conditions or provided for
              in law. For permissions for commercial use, email
              info@mpanies.com.
            </p>
            <p>
              Where Website Content is licensed or belongs to a third party,
              your rights of use will be subject to any terms and conditions
              imposed by that licensor or third party.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
