import React from "react";
import Image from "gatsby-image"
import s from "./ProductTeaser.module.scss";
import { Link } from "gatsby";

export default ({ product }) => {
    return (
        <div className={`mh3 ml0-l ${s.productBox} relative`}>
          <Link className="link black no-underline dim black-50" to={product.id}>
            <div className={`f6 fw5 ttu bb pb1 mb2 relative`}>
              <span class={s.title}>{product.title}</span>
            </div>
            <Image
              fluid={product.images[0].image.childImageSharp.fluid}
              alt={product.title}
              style={{}}
              className=""
            />
          </Link>
        </div>
    );
}