import React from "react";
import * as s from './Menu.module.scss';
import { Link } from "gatsby";

const Menu = ({ isOpen }) => {
  const state = isOpen ? s.open : s.closed;

  return (
    <div className={`bg-black w-100 z-max absolute ${state}`}>
      <nav className="bt bb b--black-10 flex flex-column">
        <Link
          id={s.storeLink}
          className="white fw1 f1-ns f2 ttu tl link bg-animate hover-yellow pa3 bb"
          to="/store"
          >
          Store
        </Link>
        <Link
          id={s.ourstoryLink}
          className="white fw1 f1-ns f2 ttu tl link bg-animate hover-yellow pa3 bb"
          to="/ourstory"
          >
          Our Story
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
};

export default Menu;