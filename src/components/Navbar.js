import React from "react";
import logo from "./images/fp_800px.png";
import { Link } from "gatsby";
import navStyles from "./Navbar.modules.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default () => (
  <header className="bg-white tc pv4 avenir">
    <Link className="dib w5" to="/">
      <img src={logo} class="w-100" alt="First Principals" />
    </Link>
    <nav class="tc center bt bb b--black-10 mt4">
      <OutboundLink
        className="gray fw5 f6 f5-ns ttu link bg-animate hover-moon-gray hover-bg-dark-blue dib pa3 ph4-l"
        href="https://firstprincipals.bigcartel.com"
      >
        Store
      </OutboundLink>
      <Link
        className="gray fw5 f6 f5-ns ttu link bg-animate hover-moon-gray hover-bg-dark-blue dib pa3 ph4-l"
        to="/about"
      >
        About
      </Link>
      <Link
        className="gray fw5 f6 f5-ns ttu link bg-animate hover-moon-gray hover-bg-dark-blue dib pa3 ph4-l"
        to="/philosophy"
      >
        Philosophy
      </Link>
    </nav>
  </header>
);

//black fw6 f5 f3-ns ttu link dib pa3 ph4-l
