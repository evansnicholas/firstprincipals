import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import styles from "./Site.modules.scss";

export default ({ children }) => (
  <div className="w-100 mw7 center avenir">
    <Navbar />
    {children}
    <Footer />
  </div>
);