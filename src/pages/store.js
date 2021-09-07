import React from 'react';
import Site from '../components/Site';
import ProductTeaser from '../components/ProductTeaser';

import { graphql } from 'gatsby'

export default ({ data }) => {
  let products = data.allProductsJson.edges
  .filter((e) => e.node.hide !== true)
  .map((e) => {
    const product = e.node
    return (
      <div className="w-50 w-33-l pb4">
        <ProductTeaser key={product.id}  product={product} />
      </div>
    )
  });

  if (products.length === 0) {
    products = <p className="ph2 ph0-l">We are working on our first collection. If you would like to receive updates, please sign up to our newsletter, or follow us on the socials. </p>;
  }

  return( 
    <Site>
      <div className="flex pv4">
        { products }
      </div>
    </Site>
)};

export const storeQuery = graphql`
  {
    allProductsJson {
      edges {
        node {
          title
          id
          hide
          images {
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
    }
  }
`