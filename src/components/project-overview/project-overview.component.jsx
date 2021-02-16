import React from "react"
import Img from "gatsby-image"

import { ButtonWithArrow } from "../custom-button/custom-button.component"
import Text from "../text/text.component"

import {
  ProjectContainer,
  ProjectOverviewContainer,
  ImageContainer,
  BlogTitle,
} from "./project-overview.styles"

const ProjectOverview = ({ node, ...rest }) => {
  return (
    <ProjectContainer key={node.id} {...rest}>
      <ImageContainer>
        <Img
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          placeholderStyle={{ visibility: "hidden" }}
        />
      </ImageContainer>
      <ProjectOverviewContainer>
        <BlogTitle>{node.frontmatter.title}</BlogTitle>
        <Text>{node.frontmatter.description}</Text>
        <ButtonWithArrow
          color="#fff"
          to={node.fields.slug}
          text="View Project"
        />
      </ProjectOverviewContainer>
    </ProjectContainer>
  )
}

export default ProjectOverview
