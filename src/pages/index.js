import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"

import Title from "../components/title/title.component"
import SocialLinks from "../components/social-links/social-links.component"
import AboutSection from "../components/about-section/about-section.component"
import ProjectsContainer from "../components/projects-container/projects-container.component"
import Text from "../components/text/text.component"

export default ({ data, location }) => {
  return (
    <Layout>
    <SEO title="Home" />
      <Title isLarge isPurple text = "<CassieRossall>"/>
          <Text>
            Hey! I'm a self-taught Web Developer currently looking for life changing opportunities in Canada or abroad. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias distinctio perspiciatis repudiandae omnis molestiae explicabo voluptas deleniti ullam fugit odio.
          </Text>
        <SocialLinks />
        <AboutSection />
        <ProjectsContainer data = {data}/>
        <SocialLinks/>
      <Title isLarge isPurple text = "</CassieRossall>"/>
  </Layout>
)}

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}){
      edges {
        node {
          frontmatter {
            date
            description
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  } 
`