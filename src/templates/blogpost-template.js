import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO'
import StyledHero from "../components/StyledHero"

const Blog = ({ data }) => {
    const {
      title,
      published,
      text: { json },
      image,
      
    } = data.post
    
    const imgUrl = data.post.image;
    const options = {
      
        renderNode: {
          [INLINES.HYPERLINK]: node => {
            //console.log(node.data.uri);
          if(node.data.uri.indexOf('youtube.com') !== -1) {
            return (
              <iframe width="560" height="315" src={node.data.uri} frameborder="0" rel="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
          }
          },
            "embedded-asset-block": node => {
                return (
                <div className="rich">
                    <h3>this is an image</h3>
                    <img width="400" src={node.data.target.fields.file["en-US"].url} />
                    <p>images provided by svisuals</p>
                </div>
                )
            },
            "embedded-entry-block": node => {
                const {title,image,text} = node.data.target.fields
                //console.log(text);
                return (
                  <div>
                      <br />
                      <br />
                      <br />
                      <br />
                  <h1>this is other post: {title["en-US"]}</h1>
                  <img
                          width="400"
                          src={image["en-US"].fields.file["en-US"].url}
                          alt=""
                      />
                      {documentToReactComponents(text["en-US"])}
                      <br />
                      <br />
                      <br />
                      <br />
                  </div>
                )
            },
        }
    };

    return <Layout>
            <SEO title={title} />
            <StyledHero img={imgUrl.fluid} />
            <section className={styles.blog}>
              <div className={styles.center}>
                <h1>{title}</h1>
                <h4>published at : {published}</h4>
                <article className={styles.post}>
                  {documentToReactComponents(json, options)}
                </article>
                <AniLink fade to="/blogs" className="btn-primary">all posts</AniLink>
              </div>
            </section>
          </Layout>
}

  export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlogpost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      image {
        fluid(quality: 70, maxWidth: 1920) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Blog


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/_H_0wBUC8F8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}