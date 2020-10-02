import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import Libs from "./Libs";
import Content from "./Content";
import './Site.scss';

export default ({ children }) => {
  const [contentFaded, fadeContent] = useState(false);

  return (
    <div>
      <SEO />
      <Libs />
      <div className="w-100 mw7 center avenir">
        <Navbar fadeContent={fadeContent} />
        <Content faded={contentFaded}>{children}</Content>
        <Footer />
      </div>
    </div>
  );
};
