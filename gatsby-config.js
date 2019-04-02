module.exports = {
  siteMetadata: {
    title: `Inmobiliaria Fuenzalida`,
    description: `Espacios de vida para los que buscan más - Inmobiliaria Fuenzalida`,
    author: `Pablo Pizarro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Inmobiliaria Fuenzalida`,
        short_name: `Fuenzalida`,
        start_url: `/`,
        background_color: `#D8D9DD`,
        theme_color: `#470A68`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RootQueryWP",
        url: "https://lychee-crisp-57351.herokuapp.com/graphql",
        fieldName: "ifapi",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
