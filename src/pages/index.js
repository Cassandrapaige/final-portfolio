import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"

import Title from "../components/title/title.component"
import SocialLinks from "../components/social-links/social-links.component"
import AboutSection from "../components/about-section/about-section.component"
import ProjectsContainer from "../components/projects-container/projects-container.component"
import Text from "../components/text/text.component"
import Animated from "../components/animated-container/animated-container.component"
import PhotoGallery from "../components/photo-gallery/photo-gallery.component"

export default ({ data }) => {
  return (
    <Layout>
    <SEO title="Home"/>
        <div style= {{margin: `0 0 30px 0`}}>
            <Animated mass = "6">
              <Title isLarge>
                Hi<span>!</span> I'm Cassie<span>.</span>
              </Title>
            </Animated>
            <Animated delay = "100">
              <Text>
                I'm a passionate self-taught Web Developer currently looking for life-changing opportunities in Canada or abroad. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sunt laudantium explicabo similique pariatur voluptates.
              </Text>
            </Animated>
            <Animated delay = "200">
              <SocialLinks/>
            </Animated>
        </div>
        <Animated delay = "300">
          <PhotoGallery />
        </Animated>
        <AboutSection/>

        <ProjectsContainer data = {data}/>
        <SocialLinks/>
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