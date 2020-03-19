import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const getImage = graphql`
query {
  images: allFile(filter:{relativeDirectory:{eq:"gallery"}}
  sort: {fields:name}) {
    edges {
      node {
        id
        thumb: childImageSharp {
          fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
        }
        full: childImageSharp {
          fluid(
            maxWidth: 1024
            quality: 85
            srcSetBreakpoints: [576, 768, 992, 1200]
          ){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

const ImageGallery = ({}) => {
const data = useStaticQuery(getImage);
  console.log(data);
  
  const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)

  console.log("fullsize: ", fullSize);
  console.log("thumbs: ", thumbs);
  return (
    <Layout>
      
      <h1>Gatsby image gallery demo</h1>
      <Gallery images={fullSize} thumbs={thumbs} />
    </Layout>
  )
}

export default ImageGallery

