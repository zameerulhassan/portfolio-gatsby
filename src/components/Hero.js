import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
//src placeholder will be replaced with above
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  //const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  //console.log(data)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="undeline"></div>
            <h1>I'm Zamir</h1>
            <h3>FullStack Web Developer</h3>
            <ul>
            <li><strong>MERNSTACK</strong><i> (MongoDb, Express, React, Node.)</i></li>
            <li><strong>JAMSTACK</strong> <i> (SSG, Headless-CMS's, NoSQL, Rest/GraphQL.)</i></li>
            <li><strong>LAMPSTACK </strong><i> (Linux, Apache, MariaDb, PHP)</i> </li>
            <li>JavaScript, C#, C++, Java</li>
            <li>HTML/CSS/SASS/Bootstrap</li>
            <li>Git, VS Code, </li>
            </ul>
            <Link to="/contact" className="btn">Contact Me</Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
