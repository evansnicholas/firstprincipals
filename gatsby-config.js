module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `First Principals`,
        short_name: `FPS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/components/images/compact_logo.png`
      },
    },
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
            publicApiKey: 'NDY1ZTRkNjUtNjIzMi00YzNlLTkwYmEtYWM1YjA2YTRjMDc5NjM3MzcyNTA1NjMxMTcwODc3',
            defaultLang: 'en',
            currency: 'eur'
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog-posts/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle: 'margin-bottom: 35px; margin-top: 35px;'
            }
          }
        ]
      }
    }
  ],
  siteMetadata: {
    title: "First Principals",
    titleTemplate: "First Principals",
    description:
      "First Principals produces sustainable and ethical clothing in London.",
    url: "https://www.fromfirstprincipals.com", // No trailing slash allowed!
    image: "/logo/fp_800px.png" // Path to your image you placed in the 'static' folder
  }
}