import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import {MobileNavigationMenu, LinkContainer} from './mobile-nav.styles'

import {CustomButton, ButtonWithArrow} from '../custom-button/custom-button.component'
import SocialLinks from '../social-links/social-links.component'

const MobileNav = ({...rest}) => {
    const data = useStaticQuery(graphql`
    query {
        allMdx{
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                  slug
              }
            }
          }
        }
      } 
    `)
    return (
        <MobileNavigationMenu {...rest}>
            <LinkContainer interval = "0" {...rest}>
                <CustomButton iscta = "true" href = "/contact">Contact</CustomButton>
            </LinkContainer>
            {
                data.allMdx.edges.map(({node}, index) => (
                    <LinkContainer interval = {index + 1} {...rest}>
                        <CustomButton href = {node.fields.slug}>
                            {node.frontmatter.title} | Project
                        </CustomButton>
                    </LinkContainer>
                ))
            }
            <LinkContainer interval = "7" {...rest}>
                <SocialLinks />
            </LinkContainer>
        </MobileNavigationMenu>
    )
}

export default MobileNav;
