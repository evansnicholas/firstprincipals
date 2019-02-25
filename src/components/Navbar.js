import React from "react";
import logo from "./images/fp_wide_tall.png";
import { Link } from "gatsby";
import navStyles from "./Navbar.modules.scss";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const style = {
  backgroundImage: `url(${logo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

export default () => (
  <header className="bg-white tc avenir">
    <div style={style} className="h5-ns h4 w-100 mb3-ns mb2-ns mb1">
      <div className="h-75 dt dt--fixed">
        <Link className="dtc h-100 w-100"to="/"></Link>
      </div>
      <div className="h-25 dt dt--fixed">
          <div className="dtc v-btm tl pl2 pl0-ns">
            <OutboundLink
              className="black fw6 f5 f3-ns ttu link pt5"
              href="https://firstprincipals.bigcartel.com"
            >
              Store
            </OutboundLink>
          </div>
          <div className="dtc v-btm tl">
            <Link
              className="black fw6 f5 f3-ns ttu link pl2-ns"
              to="/about"
            >
              About
            </Link>
          </div>
          <div className="dtc v-btm tr pr2 pr0-ns">
            <Link
              className="black fw6 f5 f3-ns ttu link"
              to="/philosophy"
            >
              Philosophy
            </Link>
          </div>
      </div>
    </div>
  </header>
);
