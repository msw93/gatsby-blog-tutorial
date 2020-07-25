import React from 'react'
import { graphql } from 'gatsby'

const Template = ({data, pageContext}) => {
    console.log(pageContext)
    const title = data.markdownRemark.frontmatter.title;
    const html = data.markdownRemark.html;

    //const prev = props.pathContext.prev.frontmatter.path === null ? '#' : props.pathContext.prev.frontmatter.path;

    // if (props.pathContext.prev.frontmatter.path){
    //     const prev = props.pathContext.prev.frontmatter.path
    // }
    // else{
    //     const prev = '#'
    // }

    return (
        <div>
            <h1 className="blog-title">{title}</h1>
            <div className='blog-post' dangerouslySetInnerHTML={{__html:html}}/>
            <div>
                <a href={``}>prev</a><a href={``}>next</a>
            </div>
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