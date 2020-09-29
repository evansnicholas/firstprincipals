import React from "react";
import styles from "./Hamburger.module.scss";

export default ({ isOpen, toggleMenu, extraClasses }) => {
  const activeClass = isOpen ? styles.isActive : "not-active";

  return (
      <button
        className={`${styles.hamburger} ${styles.hamburgerSpring} absolute left-0 ${activeClass} ${extraClasses}`}
        type="button"
        onClick={() => toggleMenu(!isOpen)}
      >
        <span className={`${styles.hamburgerBox}`}>
          <span className={`${styles.hamburgerInner}`}></span>
        </span>
      </button>
  );
};
