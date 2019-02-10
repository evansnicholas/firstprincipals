import React from "react";
import styles from "./FrontPage.modules.scss";
import lighthouse from "./images/lighthouse.jpg";
import firetower from "./images/firetower_clouds.jpg";

export default () => (
  <div className="mw7-ns center ph3-ns">
    <div className="fl h-100 w-100 w-50-ns">
      <img
        src={lighthouse}
        className="mw-100"
        alt="First Principals"
      />
    </div>
    <article className="fl avenir h-100 w-100 w-50-ns tc ph2">
      <h3 className="fw7 ttu">The Lighthouse</h3>
      <p className="">T-SHIT from Cottover, Fair Trade, GOTS certified Cotton.</p>
      <p className="">Printed at KAPITAAL, Utrecht.</p>
    </article>
  </div>
);
