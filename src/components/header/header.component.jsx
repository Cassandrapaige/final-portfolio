import React, {useState} from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import {HeaderContainer, Navbar, Logo, NavItem, Arrow} from './header.styles';

import {CustomButton} from '../custom-button/custom-button.component'
import DropdownMenu from "../dropdown-menu/dropdown-menu.component";
import HamburgerIcon from '../hamburger-icon/hamburger-icon.component'
import MobileNav from "../mobile-nav/mobile-nav.component";

const Header = ({isActive, ...rest}) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <HeaderContainer {...rest}>
      <Navbar>
        <Logo to = '/'>
          <h2>Cassie Rossall <span>Front End Web Developer</span></h2>
        </Logo>
        <div style = {{display: `flex`, alignItems: `center`}}>
          <DropdownMenu 
            data = {data} 
            label = "Projects" 
          />
          <CustomButton id = "ctaBtn" iscta = "true" href = "/contact">
            Get in Touch
            <Arrow className = {`${isActive && 'cta'}`}>
              <FontAwesomeIcon icon = {faPaperPlane} width="0"/>
            </Arrow>
          </CustomButton>
          <HamburgerIcon setIsOpen = {setIsOpen} isOpen = {isOpen}/>
        </div>
      </Navbar>
        {
          isOpen && <MobileNav />
        }
    </HeaderContainer>
  )
}

export default Header
