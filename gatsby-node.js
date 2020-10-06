exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `)

  results.data.allProductsJson.edges.forEach(edge => {
      const product = edge.node
      createPage({
          path: `/store/${product.id}/`,
          component: require.resolve("./src/templates/product.js"),
          context: product
      })
  });
}