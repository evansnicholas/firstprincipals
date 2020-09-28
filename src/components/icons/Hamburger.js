import React, { useState } from "react";
import styles from "./Hamburger.module.scss";
import { CSSTransition } from "react-transition-group";

export default ({ extraClasses }) => {
  const [active, setActive] = useState(false);

  return (
    <CSSTransition
      in={active}
      timeout={500}
      classNames={{
          enterDone: `${styles.isActive}`
      }}
    >
      <button
        className={`${styles.hamburger} ${styles.hamburgerSpring} absolute left-0 ${extraClasses}`}
        type="button"
        onClick={() => setActive(!active)}
      >
        <span className={`${styles.hamburgerBox}`}>
          <span className={`${styles.hamburgerInner}`}></span>
        </span>
      </button>
    </CSSTransition>
  );
};
