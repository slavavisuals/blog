import React from "react"
import { StaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)

        return (
          <div>
            <h1> title : {data.site.siteMetadata.title}</h1>
            <h4> title : {data.site.siteMetadata.author}</h4>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
