import React from "react";
import rethinkingtshirts from "./images/rethinking-tshirts-closer.jpeg";
import Footer from "./Footer";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const mainImageStyle = {
  backgroundImage: `url(${rethinkingtshirts})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%"
};

const mainTextStyle = {
};

export default () => (
  <div className="mw7 center avenir">
    <article className="db ph3 ph2-l mb4 br2-ns no-underline bg-white black">
      <div style={mainImageStyle} className="w-100">
        <p style={mainTextStyle} className="f-headline-ns f2 yellow b pl1 mt0 pb0-ns pb2">
          Rethinking <br/> t-shirts <br/> from <br/> first principals
        </p>
      </div>
    </article>
  </div>
);
