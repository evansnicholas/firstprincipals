import React from "react";
import Image from "gatsby-image"

export default ({ product }) => {
    return (
        <div className="ph3">
            <h2>{product.title}</h2>
            <Image
              fluid={product.image.childImageSharp.fluid}
              alt={product.title}
              style={{}}
            />
        </div>
    );
}