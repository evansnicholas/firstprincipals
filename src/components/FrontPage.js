import React from "react";
import styles from "./FrontPage.modules.scss";
import lighthouse from "./images/lighthouse.png";
import firetower from "./images/firetower_clouds.jpg";

export default () => (
  <div className="mw7 center avenir mt3">
    <article className="bg-near-white db pt4 pb2 ph3 ph2-l no-underline black">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={lighthouse} className="db" alt="Photo of a lighthouse printed on a t-shirt." />
          </div>
          <div className="w-100 w-60-ns pl3-ns tc">
            <h1 className="f2 fw5 f1-ns mt0 lh-title ttu">The Lighthouse</h1>
            <p className="f3 f5-l lh-copy">
              T-SHIRT made by Cottover. Fair Trade, GOTS certified Cotton.
            </p>
            <p className="f6 fw1 lh-copy mv0">Printed at KAPITAAL, Utrecht.</p>
            <p><a class="f6 link dim br-pill ba ph3 pv2 mb2 dib black" href="#0">View in store</a></p>
          </div>
        </div>
    </article>
  </div>
);
