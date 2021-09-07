import React from "react";
import * as s from './Content.module.scss';

export default ({ faded, children }) => {
   const fadedClass = faded ? s.faded : "";

    return (
      <div className={`${fadedClass}`}>
        {children}
      </div>
    );
}