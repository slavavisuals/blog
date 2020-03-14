import React from "react"

import Layout from "../components/layout"
import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        //console.log(node.data.uri)
        if (node.data.uri.indexOf('youtube.com') !== -1){
            return (
                <iframe width="560" height="315" src={node.data.uri} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }
      },
    },
  };

const test = ({ data }) => (
<Layout>
    <h2>Markdown embed </h2>
    <h2> Rich text </h2>
    <div>
    {documentToReactComponents(
        //console.log(data),
        data.allContentfulBlogpost.nodes[0].childContentfulBlogpostTextRichTextNode.json,
        options
    )}
    </div>
</Layout>
)

export default test
export const query = graphql`
{
    allContentfulBlogpost{
            nodes{
            childContentfulBlogpostTextRichTextNode{
                json
            }
        }
    }
}
`