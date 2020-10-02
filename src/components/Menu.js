import React from "react";
import s from './Menu.module.scss';
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";

export default ({ isOpen }) => {
  const state = isOpen ? s.open : s.closed;

  return (
    <div className={`bg-black w-100 z-max absolute ${state}`}>
      <nav className="bt bb b--black-10 flex flex-column">
        <OutboundLink
          id={s.storeLink}
          className="white fw1 f1-ns f2 ttu tl link bg-animate hover-yellow pa3 bb"
          href="https://store.fromfirstprincipals.com/"
          >
          Store
      </OutboundLink>
        <Link
          id={s.aboutLink}
          className="white fw1 f1-ns f2 ttu tl link bg-animate hover-yellow pa3 bb"
          to="/about"
          >
          About
      </Link>
        <Link
          id={s.philosphyLink}
          className="white fw1 f1-ns f2 ttu tl link bg-animate hover-yellow pa3 bb"
          to="/philosophy"
          >
          Philosophy
      </Link>
      <Link
          id={s.blogLink}
          className="white fw1 f1-ns f2 ttu tl link bg-animate hover-yellow pa3"
          to="/blog"
          >
          Blog
      </Link>
      </nav>
    </div>
  );
}