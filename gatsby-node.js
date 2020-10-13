exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            id
          }
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              id
            }
          }
        }
      }
    }
`)

  const productTemplate = require.resolve("./src/templates/tshirtProduct.js");
  results.data.allProductsJson.edges.forEach(edge => {
      const product = edge.node
      createPage({
          path: `/store/${product.id}/`,
          component: productTemplate,
          context: product
      })
  });

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running gatsby-node GraphQL query.`)
    return
  }

  const blogPostTemplate = require.resolve("./src/templates/blog.js");
  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.id}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      }
    })
  })
}