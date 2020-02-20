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

  //amount of posts
  const posts = data.blogposts.edges
  //posts per page
  const postsPerPage = 5
  //how many pages
  const numPages = Math.ceil(posts.length/postsPerPage);
  
  Array.from({length:numPages}).forEach((_,i)=>{
    createPage({
      path: i===0 ? `/blogs`:`/blogs/${i+1}`,
      component: path.resolve('./src/templates/blog-list-template.js'),
      context: {
          limit:postsPerPage,
          skip:i*postsPerPage,
          numPages,
          currentPage: i+1,
      },
    })
  })
  



}
