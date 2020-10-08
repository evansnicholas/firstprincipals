import React, { useState } from "react";
import Site from "../components/Site";
import Image from "gatsby-image"
import { Link } from "gatsby";
import s from './tshirtProduct.module.scss';
import leftArrow from '../components/icons/left_arrow.svg';
import rightArrow from '../components/icons/right_arrow.svg'; 

function createProductDesc(desc) {
  return { __html: desc }
}

function setActive(updateActive, newActive) {
  const updated = newActive % 3;
  updateActive(updated);
}

export default ({ data }) => {

  const [activeImageIndex, updateActive] = useState(0);
  const activeImage = Math.abs(activeImageIndex);
  const product = data.productsJson

  const detailImages = product.detail.map((d,index) => {
    const image = d.image;
    let classes = `${s.slide}`
    const i = index + 1;
    if (i === activeImage) {
      classes = `${classes} ${s.active}`;
    }
    return (
      <Image
        key={index}
        fluid={image.childImageSharp.fluid}
        alt={product.title}
        className={classes}
        />
    )
  });

  return (
    <Site>
      <section className="mh3 mh0-l pb4">
        <div className="flex flex-wrap">
          <div className="w-100 w-50-l relative">
            <Image
              fluid={product.image.childImageSharp.fluid}
              alt={product.title}
              style={{}}
              className={`${s.slide} ${activeImage === 0 ? s.active : ""}`}
            />
            { detailImages }
            <button className={`${s.prev}`} onClick={() => setActive(updateActive, activeImageIndex - 1)}>
              <img src={leftArrow} />
            </button>
            <button className={`${s.next}`} onClick={() => setActive(updateActive, activeImageIndex + 1)}>
              <img src={rightArrow} />
            </button>
          </div>
          <div className="w-100 w-50-l pl3-l">
            <h1 className="fw1 mt0 pv2 pt0-l bb">{product.title}</h1>
            <p className="f6" dangerouslySetInnerHTML={createProductDesc(product.description)}></p>
            <div className="relative">
              <p className="b">EUR {product.price}</p>
              <button
                className={`snipcart-add-item tl f6 pa2 ba black bg-white b--black pointer`}
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={`https://www.fromfirstprincipals.com/store/${product.id}`}
                data-item-name="Rising Vine T-Shirt"
                data-item-image={product.image.childImageSharp.resize.src}
                data-item-custom1-name="Size"
                data-item-custom1-options="Man S|Man M|Man L|Lady S|Lady M|Lady L"
                >
                Add to cart
            </button>
            </div>
          </div>
        </div>
      </section>
    </Site>
  )
};

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      description
      price
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          resize(width: 400) {
            src
          }
        }
      }
      detail {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`