/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Michael's blog`,
    description: `My awesome blog`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`pages`,
        path:`${__dirname}/src/pages`,
      },
    },
  ],
}
