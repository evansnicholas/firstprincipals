import React, { useState } from "react";
import logo from "./images/fp_800px.png";
import { Link } from "gatsby";
import CookieConsent from './CookieConsent';
import Hamburger from './icons/Hamburger';
import Menu from './Menu';
import { Helmet } from "react-helmet";
import s from './Navbar.module.scss';
import CartIcon from './icons/CartIcon';

export default ({ fadeContent }) => {
  const [isOpen, openMenu] = useState(false);
  const bodyClass = isOpen ? s.noScroll : "";
  const lineColour = isOpen ? "b--white" : "b--black-10";
  
  fadeContent(isOpen);

  return (
    <div>
      <header className="bg-white relative tc pv4 avenir h-100">
        <Helmet bodyAttributes={{ class: bodyClass }} />
        <div className="absolute left-0">
          <Hamburger isOpen={isOpen} toggleMenu={openMenu} extraClasses="pl2 pl0-l pr1" />
          <button className={`snipcart-checkout ${s.cart}`}>
            <CartIcon/>
          </button>
        </div>
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
