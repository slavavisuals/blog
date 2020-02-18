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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {

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