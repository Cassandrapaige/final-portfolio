import React, { Fragment } from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import ProjectOverview from '../project-overview/project-overview.component';
import Title from '../title/title.component'

const PostById = ({node, id}) => (
    node.id === id &&
        <ProjectOverview node = {node} />
)

const PrevNextCard = ({prev, next, ...rest}) => {

const data = useStaticQuery(graphql`
    query {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}){
            edges {
            node {
                frontmatter {
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
                id
                    fields {
                        slug
                    }
                }
            }
        }
    } 
`)
    return (
        <div style = {{margin: `50px 0`}}>
            <Title isLarge text = "Other Projects"/>
            <div style= {{margin: `20px 0`}}>
                {
                    data.allMdx.edges.map(({node}, index) => (
                        <Fragment key = {index}>
                            <PostById node = {node} id = {prev} />
                            <PostById node = {node} id = {next} />
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default PrevNextCard;