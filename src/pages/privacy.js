import React from "react";
import Site from "../components/Site";

export default () => (
  <Site>
    <article className="cf ph3 ph0-l pv2">
      <h1 className="pb2">Privacy Policy</h1>
      <p className="f5 lh-copy">
        Transparency is one of our core principles and we feel it is crucial to be totally clear
        about how we handle your data. Our business is making and selling clothing, not data. This
        means that we collect only the data we need to help us connect with our customers. We do not
        share this data with third parties and will not (ab)use it to spam you with excessive
        amounts of advertising. We will only communicate with you when we think we have something
        worth sharing.
      </p>
      <p className="f5 lh-copy">For those who are interested here are some technical details about how we gather and use our
        customer's data. Our website contains a Google Analytics script that gathers data about the usage
        of our site. We use this data only to better understand how people are using our site. When you
        sign up for our newsletter your email address is saved in Mailchimp. We will occasionally use this
        to send you updates about our products. Our store is built using Big Cartel. If you purchase something
        and fill in your home address we will use this only to ship the product to you.
      </p>
    </article>
  </Site>
);