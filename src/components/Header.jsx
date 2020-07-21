import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndDesc = ({data}) => {
    const title = data.site.siteMetadata.title;
    const desc = data.site.siteMetadata.description;
  
    return(
      <div className='body'>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    )
  }
  
  const Header = () => {
    return (
      <StaticQuery query={graphql`
        query MyQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
    
      `} 
      render = {data => <TitleAndDesc data={data} />}
      />
    )
  }
  
  export default Header;