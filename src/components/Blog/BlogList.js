<<<<<<< HEAD
import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import {useStaticQuery,graphql} from 'gatsby'
import styles from '../../css/blog.module.css'

const getBlogPosts = graphql`
query{
    blogposts: allContentfulBlogpost(sort:{fields:published, order:DESC}){
      edges{
        node{
          published(formatString:"MMMM Do, YYYY ")
          title
          slug
          image{
            fluid{
=======
import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulBlogpost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          id: contentful_id
          image {
            fluid {
>>>>>>> f1272d2d0a85a29b5a71b90c478e065637296369
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
<<<<<<< HEAD
    const {blogposts} = useStaticQuery(getBlogPosts)
console.log(blogposts);
    return (
        <section className={styles.blog}>
            <Title title="our" subtitle="blogs"/>
            <div className={styles.center}>
            {blogposts.edges.map(({node})=>{
                   return <BlogCard key={node.id} blog={node} />
                })}
            </div>
        </section>
    )
}

export default BlogList
=======
  const { posts } = useStaticQuery(getPosts)
  console.log(posts)

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
>>>>>>> f1272d2d0a85a29b5a71b90c478e065637296369
