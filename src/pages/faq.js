import React from 'react';
import Site from '../components/Site';
import { LinkClasses } from '../constants';

export default () => (
  <Site>
      <article className="ph3 ph0-l pv3">
        <h1>F.A.Q.</h1>
        
        <h2>How do I know First Principals is trustworthy?</h2>
        <p>First Principals is a company registered in the Netherlands (our KVK number is: 75181231).
          This means we are traceable and can be held accountable for the products we sell. Transparency is
          one of our core principles, and we will gladly answer any questions you have about our products.
          You can also leave us a review on <a className={LinkClasses} href="https://uk.trustpilot.com/review/fromfirstprincipals.com">Trust Pilot</a>.
        </p>

        <h2>Is your webshop secure?</h2>
        <p>Our webshop is powered by Big Cartel, a well respected provider of e-commerce solutions. Payments
          are handled by Stripe, a major player in online payment processing. By relying on their services
          we ensure that your payments are handled as securely as possible.
        </p>

        <h2>Can I exchange/return my order?</h2>
        <p>We strive to provide garments of the highest possible quality. In spite of this, if you believe the
          quality of the garment you have received is not acceptable you may return your
          order within 14 days. In this case we will either send you a new product or offer you a refund.
          However, before returning your order we ask you to get in touch with us and explain why you are
          dissatisfied. In this way we can judge whether or not we are able to exchange or refund your order.
          If you do return your order we will only offer an exchange or refund if the garment is still in its
          original condition. This means it must not show signs of wear and must still have the hang label attached.
          If the returned garment does not fulfil these conditions we will not exchange or refund the order.
        </p>

        <h2>How quickly will I receive my order?</h2>
        <p>We will do our best to ship your order as quickly as possible (within 5 working days of you placing
          your order). We ship using PostNL (the Dutch postal service) and therefore are reliant on their
          speed of delivery.
        </p>


      </article>
  </Site>
);