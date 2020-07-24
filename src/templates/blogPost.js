import React from 'react'
import { graphql } from 'gatsby'

const Template = (props) => {
    console.log(props)
    const title = props.data.markdownRemark.frontmatter.title;
    const html = props.data.markdownRemark.html;

    return (
        <div>
            <h1 className="blog-title">{title}</h1>
            <div className='blog-post' dangerouslySetInnerHTML={{__html:html}}/>
        </div>
    )
}

export const query = graphql`

query ($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
        html
        frontmatter {
            title
            path
            date
            excerpt
        }
    }
}
`

export default Template;