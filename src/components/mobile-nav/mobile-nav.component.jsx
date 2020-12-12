import React from 'react'
import {config, useSpring} from 'react-spring';
import {Link ,useStaticQuery, graphql} from 'gatsby'

import {MobileNavigationMenu, LinkContainer, ListContainer} from './mobile-nav.styles'
import SocialLinks from '../social-links/social-links.component'
import Title from '../title/title.component'
import ListItem from '../list-item/list-item.component'

const AnimatedContainer = ({delay, onscreen, children, ...rest}) => {
    const props = useSpring({
        to: {
            opacity: onscreen ? 1 : 0,
            transform: onscreen ? 'translateX(0px)' : 'translateX(-150px)',
        },
        config: {
            mass: 1,
            tension: 150,
            friction: 15
          },
        delay: onscreen ? `${delay}` : 0
    });

    return (
        <LinkContainer style = {props}>
            {children}
        </LinkContainer>
    )
}

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
            <AnimatedContainer {...rest}>
                <ListContainer>
                    <Link to = "/contact">
                        <ListItem isLink item = "Contact" />
                    </Link>
                </ListContainer>
            </AnimatedContainer>
            <AnimatedContainer delay = "300" {...rest}>
                <Title isPurple style= {{margin: `30px 0`}}>Projects</Title>
            </AnimatedContainer>
            {
                data.allMdx.edges.map(({node}, index) => (
                    <AnimatedContainer delay = "600" key = {index} {...rest}>
                        <ListContainer withmargin>
                            <Link to = {node.fields.slug}>
                                <ListItem isLink item = {node.frontmatter.title} />
                            </Link>
                        </ListContainer>
                    </AnimatedContainer>
                ))
            }
            <AnimatedContainer delay = "900" {...rest}>
                <SocialLinks />
            </AnimatedContainer>
        </MobileNavigationMenu>
    )
}

export default MobileNav;
