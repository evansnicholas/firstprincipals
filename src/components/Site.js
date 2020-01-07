import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Site.modules.scss";
import SEO from "./SEO";

export default ({ children }) => (
  <>
    <SEO />
    <div className="w-100 mw7 center avenir">
      <Navbar />
      {children}
      <Footer />
    </div>
  </>
);
