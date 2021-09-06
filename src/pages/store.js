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
    products = <p>Collection in the works ...</p>;
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