import React from "react"
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'
import Title from '../components/Title'



    const Blog = (props) => {
      const {currentPage,numPages} = props.pageContext
      
      const isFirst = currentPage === 1;
      const isLast = currentPage === numPages

      const prevPage = currentPage - 1 === 1 ? `/blogs/`:`/blogs/${currentPage - 1}`
      const nextPage = `/blogs/${currentPage+1}`
      const {data} = props
      return (
        <Layout>
          <section className={styles.blog}>
            <Title title="latest" subtitle="posts" />
            <div className={styles.center}>
              {data.posts.edges.map(({node})=>{
              return <BlogCard key={node} blog={node}/>
              })}
            </div>
            <section className={styles.links}>
              {!isFirst && (
              <Anilink fade to={prevPage} className={styles.link}>
                Prev
              </Anilink>
              )}
              
              {Array.from({length:numPages},(_,i)=>{
                return <Anilink
                key={i}
                fade
                to={`/blogs/${i === 0 ? "":i+1}`}
                className={i+1===currentPage?`${styles.link} ${styles.active}`:`${styles.link}`}
                >
                  {i+1}
                </Anilink>
              })}
              {
                !isLast && <Anilink fade to={nextPage}
                className={styles.link}>
                Next
              </Anilink>
              }
              
            </section>
          </section>
      </Layout>
      )
    }

    export const query = graphql`
    query getPosts($skip:Int!,$limit:Int!){
      posts:allContentfulBlogpost(
        skip:$skip,
        limit:$limit,
        sort:{fields:published,order:DESC}
        ){
        edges{
          node{
            slug
            title
            id:contentful_id
            published(formatString: "MMMM Do, YYYY"),
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

    export default Blog