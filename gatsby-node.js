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
<<<<<<< HEAD
      blogposts: allContentfulBlogpost{
        edges{
          node{
=======
      posts: allContentfulPost {
        edges {
          node {
>>>>>>> f1272d2d0a85a29b5a71b90c478e065637296369
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
<<<<<<< HEAD
  data.blogposts.edges.forEach(({ node })=>{
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blogpost-template.js"),
      context:{
        slug:node.slug,
      }
=======
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
>>>>>>> f1272d2d0a85a29b5a71b90c478e065637296369
    })
  })
}
