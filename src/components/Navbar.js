import React from "react";
import logo from "./images/firstprincipals_logo.png";
import navStyles from "./Navbar.modules.scss";

export default () => (
  <header className="bg-white tc">
    <img
      src={logo}
      className="mw5 mw-100 db center"
      alt="First Principals"
    />
    <nav class="mw7 tc center bg-black mt2 mb4-ns mb3">
    <a class="avenir light-silver fw9 f6 f5-l link dib pa3 ph4-l" href="/">STORE</a>
    <a class="avenir light-silver fw9 f6 f5-l link dib pa3 ph4-l" href="/">ABOUT</a>
    <a class="avenir light-silver fw9 f6 f5-l link dib pa3 ph4-l" href="/">PHILOSOPHY</a>
    </nav>
  </header>
);



