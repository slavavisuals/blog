import React from "react"
<<<<<<< HEAD
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BlogCard = ({blog}) => {
    const {slug, title, image, published} = blog
    return (
    <article className={styles.blog}>
       <div className={styles.imgContainer}>
           <Image fluid={image.fluid} className={styles.img} 
           alt="single post" />
           <AniLink fade className={styles.link} to={`/blog/${slug}`}
           >
               read more
           </AniLink>
        <h6 className={styles.date}>{published}</h6>
       </div>
       <div className={styles.footer}>
           <h4>{title}</h4>
       </div>
    </article>)
}

export default BlogCard
=======
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
>>>>>>> f1272d2d0a85a29b5a71b90c478e065637296369
