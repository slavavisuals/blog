const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      blogposts: allContentfulBlogpost{
        edges{
          node{
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.blogposts.edges.forEach(({ node })=>{
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blogpost-template.js"),
      context:{
        slug:node.slug,
      }
    })
  })
}
