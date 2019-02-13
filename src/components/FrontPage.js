import React from "react";
import styles from "./FrontPage.modules.scss";
import lighthouse from "./images/lighthouse.jpg";
import firetower from "./images/firetower_clouds.jpg";

export default () => (
  <div className="mw7 center ph3-ns avenir">
    <article className="b--black-10">
      <a className="db pv4 ph3 ph0-l no-underline black" href="#0">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={lighthouse} className="db" alt="Photo of a lighthouse printed on a t-shirt." />
          </div>
          <div className="w-100 w-60-ns pl3-ns tc">
            <h1 className="f2 f1-ns fw1 mt0 lh-title ttu">The Lighthouse</h1>
            <p className="f3 f5-l fw1 lh-copy">
              T-SHIRT from Cottover, Fair Trade, GOTS certified Cotton.
          </p>
            <p className="f6 fw1 lh-copy mv0">Printed at KAPITAAL, Utrecht.</p>
          </div>
        </div>
      </a>
    </article>
  </div>
);
