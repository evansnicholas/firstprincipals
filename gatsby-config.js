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
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
        options: {
            version: '3.0.22',
            publicApiKey: 'ZDRkZTc1OGYtYmI1ZS00OWQxLWI4YWMtNjUyODE4N2QyOWUwNjM3MzcyNTA1NjMxMTcwODc3',
            defaultLang: 'en'
        }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    `gatsby-transformer-sharp`
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