import React from "react";
import s from './Menu.module.scss';
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";

export default ({ isOpen }) => {
  const state = isOpen ? s.open : s.closed;

  return (
    <div className={`bg-black w-100 z-max absolute ${state} h-100`}>
      <nav className="tc center bt bb b--black-10 mt4 flex flex-column">
        <OutboundLink
          id={s.storeLink}
          className="gray fw5 f6 f5-ns ttu link bg-animate hover-black hover-bg-yellow dib pa3 ph4-l"
          href="https://store.fromfirstprincipals.com/"
          >
          Store
      </OutboundLink>
        <Link
          id={s.aboutLink}
          className="gray fw5 f6 f5-ns ttu link bg-animate hover-black hover-bg-yellow dib pa3 ph4-l"
          to="/about"
          >
          About
      </Link>
        <Link
          id={s.philosphyLink}
          className="gray fw5 f6 f5-ns ttu link bg-animate hover-black hover-bg-yellow dib pa3 ph4-l"
          to="/philosophy"
          >
          Philosophy
      </Link>
      </nav>
    </div>
  );
}