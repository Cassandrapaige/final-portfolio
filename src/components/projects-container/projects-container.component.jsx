import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {ProjectSectionContainer} from './projects-container.styles'

import Title from '../title/title.component'
import Text from '../text/text.component'
import ProjectOverview from '../project-overview/project-overview.component'
import ListContainer from '../list-container/list-container.component'

const ProjectsContainer = ({data}) => {
    const STACK = useStaticQuery(graphql`
    query {
        allMdx{
          edges {
            node {
              frontmatter {
                stack
              }
            }
          }
        }
      } 
    `)

    const TECH = STACK.allMdx.edges.map(({node}) => node.frontmatter.stack);
    const ADDITIONAL_TECH = ["Gatsby", "GraphQl", "Git/Github", "Netlify", "Heroku"];
    const TECH_STACK = [...new Set([...TECH[0], ...TECH[1], ...TECH[2], ...TECH[3], ...TECH[4], ...ADDITIONAL_TECH])];  

    return (
      <ProjectSectionContainer>
          <Title isPurple>My Projects</Title>
          <Text>
            Below is a selection of some of my favourite projects — most of which have been re-built or re-factored multiple times as I continue to learn new skills; all of which have played an important role in my development journey. 
          </Text>
          <Text>
            These are some of the tools I've played with so far:
          </Text>
          <ListContainer list = {TECH_STACK} />
            {
                data.allMdx.edges.map(({node}, index) => (
                    <ProjectOverview node = {node} key = {index}/>
                ))
            }
        </ProjectSectionContainer>
    )
}


export default ProjectsContainer
