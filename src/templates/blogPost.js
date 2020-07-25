import React from 'react'
import { graphql, Link } from 'gatsby'

const Template = ({data, pageContext}) => {
    //console.log(pageContext.next.frontmatter.path)
    const title = data.markdownRemark.frontmatter.title;
    const html = data.markdownRemark.html;
    const { next, prev } = pageContext;

    return (
        <div className='blog'>
            <h1 className="blog-title">{title}</h1>
            <div className='blog-post' dangerouslySetInnerHTML={{__html:html}}/> 
            {
                prev ?
                <Link to={prev.frontmatter.path}>prev</Link>
                : <span></span>

            }
            {
                next ?
                <Link to={next.frontmatter.path}>next</Link>
                :<span></span>
            }
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