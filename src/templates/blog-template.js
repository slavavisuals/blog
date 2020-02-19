import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  console.log(title);

  return <div>sdfsdf sdfdsf sdfsdf</div>

}



export const query = graphql`
  query getPost234($slug: String!) {
    post: contentfulBlogpost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`
export default Blog
