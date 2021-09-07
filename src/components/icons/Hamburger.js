import React from "react";
import * as styles from "./Hamburger.module.scss";

export default ({ isOpen, toggleMenu, extraClasses }) => {
  const activeClass = isOpen ? styles.isActive : "not-active";

  return (
      <button
        className={`${styles.hamburger} ${styles.hamburgerSpring} ${activeClass} ${extraClasses}`}
        type="button"
        onClick={() => toggleMenu(!isOpen)}
      >
        <span className={`${styles.hamburgerBox}`}>
          <span className={`${styles.hamburgerInner}`}></span>
        </span>
      </button>
  );
};
