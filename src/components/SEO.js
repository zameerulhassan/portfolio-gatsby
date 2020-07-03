import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
//if graphql query is being imported into a component, then remove export key word before const query.
const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const{site}=useStaticQuery(query);
  const{siteDesc,siteTitle,siteURL,image,tiwtterusername}=site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter card. it will be send if shared on twitter. */}
      {/* <meta name="twitter:card" content="summary_image_large" />
      <meta name="twitter:creator" content={tiwtterusername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`}/> */}
    </Helmet>
  )
}

export default SEO
