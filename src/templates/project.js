import React from "react"
import {graphql} from "gatsby"
import styled from "styled-components"
import colors from "../config/colors"
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLaptopCode, faCode } from "@fortawesome/free-solid-svg-icons"

import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout/layout.component"
import Title from "../components/title/title.component"
import ListContainer from "../components/list-container/list-container.component"
import Text from "../components/text/text.component"
import { CustomButton } from "../components/custom-button/custom-button.component"
import PrevNextCard from "../components/prev-next-card/prev-next-card.component"
import SocialLinks from "../components/social-links/social-links.component"

export default ({ data, pageContext }) => {
    const post = data.mdx;

    const ImageContainer = styled.div`
    margin: 20px 0;
    background: repeating-linear-gradient(-45deg, ${colors.secondary}, ${colors.secondary} 120px, ${colors.primary} 120px, ${colors.primary} 240px);

        img {
            -webkit-filter: drop-shadow(0px 12px 12px rgba(19, 19, 19, .3));
            filter: drop-shadow(0px 12px 12px rgba(19, 19, 19, .3));
        }
    `

    const ButtonWrapper = styled.div`
    display: flex;
    margin: 30px 0;
    `

    return (
        <Layout>
            <SEO title = {post.frontmatter.title} />
                <Title isLarge text = {post.frontmatter.title}/>
                <Text>  {post.frontmatter.overview} </Text>
                <ButtonWrapper>
                    <CustomButton 
                        iscta = "true" 
                        withmargin = "true" 
                        href = {post.frontmatter.website} 
                        target = "_blank">
                        <FontAwesomeIcon icon={faLaptopCode} width="0"/>
                        <span style= {{paddingLeft: `5px`}}>Live Site</span>
                    </CustomButton>

                    <CustomButton 
                        withmargin = "true" 
                        href = {post.frontmatter.github} 
                        target = "_blank">
                        <FontAwesomeIcon icon={faCode} width="0"/>
                        <span style= {{paddingLeft: `5px`}}>Github</span>
                    </CustomButton>
                </ButtonWrapper>
                <ImageContainer>
                    <Img 
                        fluid = {post.frontmatter.featuredImage.childImageSharp.fluid}
                        placeholderStyle={{ visibility: "hidden" }}
                    />
                </ImageContainer>

                <Title isPurple text = "Tech Stack"></Title>
                <ListContainer list = {post.frontmatter.stack} />

                <div className="bodytext">
                    <MDXRenderer>{post.body}</MDXRenderer>
                </div>
                <PrevNextCard 
                    prev = {pageContext.prev.id}
                    next = {pageContext.next.id} 
                />
            <SocialLinks />
        </Layout>
    )
}

export const query = graphql`
    query MDXBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                description
                overview
                website
                github
                stack
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
        }
    }
`