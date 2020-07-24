import React from "react"
import Header from '../components/Header'
import '../styles/global.scss'
import { graphql, Link } from "gatsby"

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  
  return( 
    <div>
      <Header />
      <div className="blog-list">
        {edges.map( (edge,index) => {
            const { frontmatter } = edge.node;
            console.log(frontmatter.path)
            return(
              <div style={{marginBottom: '1rem'}}key={index}>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </div>
            )
          } 
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query Homepagequery {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout;