import React from "react";
import logo from "./images/fp_wide_tall.png";
import navStyles from "./Navbar.modules.scss";

const style = {
  "background-image": `url(${logo})`,
  "background-size": "cover",
  "background-position": "center",
  "background-repeat": "no-repeat"
};

export default () => (
  <header className="bg-white tc avenir">
    <div style={style} className="h5-ns h4 w-100 mb3-ns mb2 dt">
      <p className="dtc v-btm tl pl2">
        <a className="black fw6 f5 f3-ns link" href="/">
          STORE
        </a>
      </p>
      <p className="dtc v-btm tl pl2">
        <a className="black fw6 f5 f3-ns link dib v-btm" href="/">
          ABOUT
        </a>
      </p>
      <p className="dtc v-btm tr pr2">
        <a className="black fw6 f5 f3-ns link dib v-btm" href="/">
          PHILOSOPHY
        </a>
      </p>
    </div>
  </header>
);
