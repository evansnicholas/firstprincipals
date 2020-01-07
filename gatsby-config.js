module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135137586-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    }
  ],
  siteMetadata: {
    title: "First Principals",
    titleTemplate: "First Principals",
    description:
      "First Principals produces sustainable and ethical clothing - screen-printed t-shirts and limited edition made-to-measure streetwear.",
    url: "https://www.fromfirstprincipals.com", // No trailing slash allowed!
    image: "/logo/fp_800px.png" // Path to your image you placed in the 'static' folder
  }
}