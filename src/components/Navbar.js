import React from "react";
import logo from "./images/fp_wide_tall.png";
import { Link } from "gatsby";
import navStyles from "./Navbar.modules.scss";

const style = {
  backgroundImage: `url(${logo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

export default () => (
  <header className="bg-white tc avenir">
    <div style={style} className="h5-ns h4 w-100 mb3-ns mb2-ns mb1">
      <table className="h-100 w-100">
        <tr className="">
          <td className="v-btm tl">
            <a
              className="black fw6 f5 f3-ns ttu link pt5"
              href="https://firstprincipals.bigcartel.com"
            >
              Store
            </a>
          </td>
          <td className="v-btm tl">
            <Link
              className="black fw6 f5 f3-ns ttu link pl2-ns"
              to="/about"
            >
              About
            </Link>
          </td>
          <td className="v-btm tr">
            <Link
              className="black fw6 f5 f3-ns ttu link"
              to="/philosophy"
            >
              Philosophy
            </Link>
          </td>
        </tr>
      </table>
    </div>
  </header>
);
