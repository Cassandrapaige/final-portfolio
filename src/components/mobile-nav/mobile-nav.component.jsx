import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import {MobileNavigationMenu, LinkItem} from './mobile-nav.styles'

const MobileNav = ({...rest}) => {
    const data = useStaticQuery(graphql`
    query {
        allMdx{
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      } 
    `)
    return (
        <MobileNavigationMenu {...rest}>
            <LinkItem interval = '0' {...rest}>
                <h4>Get in touch!
                    <span style= {{fontSize: `.9em`, fontWeight: `500`, display: `block`, paddingTop: `5px`}}> 
                        Contact
                    </span>
                </h4>
            </LinkItem>
            {
                data.allMdx.edges.map(({node}, index) => (
                    <LinkItem interval = {index + 1} {...rest}>
                        <h4>{node.frontmatter.title}
                            <span style= {{fontSize: `.9em`, fontWeight: `500`, display: `block`, paddingTop: `5px`}}> 
                                Project
                            </span>
                        </h4>
                    </LinkItem>
                ))
            }
        </MobileNavigationMenu>
    )
}

export default MobileNav;
