import React from "react";
import logo from "./images/fp_800px.png";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import CookieConsent from './CookieConsent';
import Hamburger from './icons/Hamburger';
import Menu from './Menu';

export default () => (
  <header className="bg-white relative tc pv4 avenir">
    <Hamburger extraClasses="pl2 p0-ns" />
    <Link className="dib w5" to="/">
      <img src={logo} className="w-100" alt="" />
    </Link>
    <div className="bt b--black-10 mt4"></div>
    <Menu />
    {/* <nav className="tc center bt bb b--black-10 mt4">
      <OutboundLink
        className="gray fw5 f6 f5-ns ttu link bg-animate hover-black hover-bg-yellow dib pa3 ph4-l"
        href="https://store.fromfirstprincipals.com/"
      >
        Store
      </OutboundLink>
      <Link
        className="gray fw5 f6 f5-ns ttu link bg-animate hover-black hover-bg-yellow dib pa3 ph4-l"
        to="/about"
      >
        About
      </Link>
      <Link
        className="gray fw5 f6 f5-ns ttu link bg-animate hover-black hover-bg-yellow dib pa3 ph4-l"
        to="/philosophy"
      >
        Philosophy
      </Link>
    </nav> */}
    <CookieConsent />
  </header>
);
