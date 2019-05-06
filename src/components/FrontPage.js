import React from "react";
import lighthouse from "./images/lighthouse.jpg";
import Footer from "./Footer";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default () => (
  <div className="mw7 center avenir">
    <article className="db pt4 pb2 ph3 ph2-l mb4 br2-ns no-underline bg-white black">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img
            src={lighthouse}
            className="db"
            alt="Photo of a lighthouse printed on a t-shirt."
          />
        </div>
        <div className="w-100 w-60-ns pl3-ns tc">
          <h1 className="f4 f3-ns fw5 mt0 lh-title tracked ttu">
            The Lighthouse
          </h1>
          <p className="f5 lh-copy">
            T-SHIRT made by Cottover. Fair Trade, GOTS certified cotton.
          </p>
          <p className="f6 fw3 lh-copy mv0">
            Printed by First Principals at KAPITAAL, Utrecht.
          </p>
          <p>
            <OutboundLink
              className="f6 link bg-animate hover-moon-gray hover-bg-dark-blue br-pill ba ph3 pv2 mb2 dib black"
              href="https://firstprincipals.bigcartel.com/product/lighthouse-t-shirt"
            >
              View in store
            </OutboundLink>
          </p>
        </div>
      </div>
    </article>
  </div>
);
