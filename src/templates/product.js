import React from "react";
import Site from "../components/Site";
import Image from "gatsby-image"
import { Link } from "gatsby";

function createProductDesc(desc) {
  return { __html: desc }
}

export default ({ data }) => {

  const product = data.productsJson

  return (
    <Site>
      <section className="ph3 ph0-l pb4">
        <h1 className="fw1 mt0 pb2 bb">{product.title}</h1>
        <div className="flex flex-wrap">
          <div className="w-100 w-50-l pr3-l">
            <Image
              fluid={product.image.childImageSharp.fluid}
              alt={product.title}
              style={{}}
              className=""
            />
          </div>
          <div className="w-100 w-50-l">
            <p>$19.99</p>
            <p className="f6" dangerouslySetInnerHTML={createProductDesc(product.description)}></p>
            <button
              className="snipcart-add-item f6 br2 pa2 bn white bg-black b pointer"
              data-item-id={product.id}
              data-item-price="19.99"
              data-item-url={`https://www.fromfirstprincipals.com/store/${product.id}`}
              data-item-name="Rising Vine T-Shirt"
              >
              Add to cart
            </button>
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
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`