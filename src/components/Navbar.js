import React, { useState } from "react";
import logo from "./images/fp_800px.png";
import { Link } from "gatsby";
import CookieConsent from './CookieConsent';
import Hamburger from './icons/Hamburger';
import Menu from './Menu';
import { Helmet } from "react-helmet";
import s from './Navbar.module.scss';

export default () => {
  const [isOpen, openMenu] = useState(false);
  const bodyClass = isOpen ? s.noScroll : "";
  const height = isOpen ? s.fullHeight : "";
  const lineColour = isOpen ? "b--white" : "b--black-10";

  return (
    <div className={`${height}`} >
      <header className="bg-white relative tc pv4 avenir h-100">
        <Helmet bodyAttributes={{ class: bodyClass }} />
        <Hamburger isOpen={isOpen} toggleMenu={openMenu} extraClasses="pl2 pl0-l" />
        <Link className="dib w5" to="/">
          <img src={logo} className="w-100" alt="" />
        </Link>
        <div className={`bt ${lineColour} mt4`}></div>
        <Menu isOpen={isOpen} />
        <CookieConsent />
      </header>
    </div>
  )
};
