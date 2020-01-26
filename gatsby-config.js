/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: "Explore awesome blog posts",
    author: "@slavavisuals",
    data: {
      name: "john",
      age: 24,
    },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
