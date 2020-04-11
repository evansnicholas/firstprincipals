import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import Libs from "./Libs";
import './Site.scss';

export default ({ children }) => (
  <>
    <SEO />
    <Libs />
    <div className="w-100 mw7 center avenir">
      <Navbar />
      {children}
      <Footer />
    </div>
  </>
);
