import React from 'react'

import {ProjectSectionContainer} from './projects-container.styles'

import Title from '../title/title.component'
import Text from '../text/text.component'
import ProjectOverview from '../project-overview/project-overview.component'
import ListContainer from '../list-container/list-container.component'

const TECH_STACK = [
    'ReactJs',
    'Javascript/ES6',
    'Gatsby',
    'GraphQl',
    'NodeJs',
    'SCSS',
    'Styled Components',
    'Redux',
    'Firebase',
    'API'
]

const ProjectsContainer = ({data}) => {
    return (
      <ProjectSectionContainer>
          <Title isPurple text = "My Projects"/>
          <Text>
            I’m a naturally curious person. I experimented with a variety of different courses at George Brown College 
            before learning how to code — acting, cooking, baking, photography, wine.. you name it, I probably took a course in it.
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
