import React from 'react';
import Site from '../components/Site';
import ProductTeaser from '../components/ProductTeaser';

import { graphql } from 'gatsby'

export default ({ data }) => {
  const products = data.allProductsJson.edges.map((e) => {
    const product = e.node
    return (
      <div className="w-50 w-33-l pb4">
        <ProductTeaser key={product.id}  product={product} />
      </div>

    )
  });

  return( 
    <Site>
      <div className="flex">
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
`