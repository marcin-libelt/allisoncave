const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `fonts`,
            path: `${__dirname}/src/fonts`,
        },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
        resolve: "gatsby-source-strapi",
        options: {
            apiURL: process.env.API_URL || "http://localhost:1337",
            contentTypes: ["article", "category", "writer"],
            singleTypes: [`contact`, `homepage`, `global`, `about`, `service`],
            queryLimit: 1000,
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

