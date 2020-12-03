import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import {HeaderContainer, Navbar, Logo, Arrow} from './header.styles';

import {CustomButton} from '../custom-button/custom-button.component'
import DropdownMenu from "../dropdown-menu/dropdown-menu.component";
import HamburgerIcon from '../hamburger-icon/hamburger-icon.component'
import MobileNav from "../mobile-nav/mobile-nav.component";

const Header = ({isOpen, setIsOpen, isActive, ...rest}) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}){
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

  return( 
    <>
    <HeaderContainer isOpen = {isOpen} {...rest}>
      <Navbar>
        <Logo to = '/' isOpen = {isOpen} >
          <h2>Cassie Rossall <span>Front End Web Developer</span></h2>
        </Logo>
        <div style = {{display: `flex`, alignItems: `center`}}>
          <DropdownMenu 
            data = {data} 
            label = "Projects" 
          />
          <CustomButton id = "ctaBtn" iscta = "true" to = "/contact">
            Get in Touch
            <Arrow className = {`${isActive && 'cta'}`}>
              <FontAwesomeIcon icon = {faPaperPlane} width="0"/>
            </Arrow>
          </CustomButton>
          <HamburgerIcon isOpen = {isOpen} {...rest}/>
        </div>
      </Navbar>
    </HeaderContainer>
    <MobileNav onscreen = {isOpen}/>
  </>
  )
}

export default Header
