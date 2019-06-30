import React from "react";
import rethinkingtshirts from "./images/rethinking-tshirts-closer.jpg";
import Footer from "./Footer";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default () => (
  <div className="mw7 center avenir">
    <article className="db ph3 ph2-l mb4 br2-ns no-underline bg-white black">
      <div className="w-100">
        <img src={rethinkingtshirts} class="w-100" alt="rethinking t-shirts" />
      </div>
    </article>
  </div>
);
