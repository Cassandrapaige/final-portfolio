import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import Header from "../header/header.component"
import Footer from "../footer/footer.component"

import Title from "../title/title.component"
import ListContainer from "../list-container/list-container.component"
import ListItem from "../list-item/list-item.component"
import GridContainer from "../grid-container/grid-container.component"

import {Container} from './layout.styles'

import "../layout.css"

import usePrevious from '../../hooks/usePrevious';
import useWidth from '../../hooks/useWidth';
import useScrollPosition from '../../hooks/useScrollPosition';

const Layout = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const width = useWidth();
  const prevScroll = usePrevious(scrollY);
  const [isSticky, setIsSticky] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  /* --------------------------------------------------------

  --Components for MDXProvider -- 

  --------------------------------------------------------*/

  const shortcodes = {
    Title,
    ListContainer,
    ListItem,
    GridContainer
  }

  /* --------------------------------------------------------

  --STICKY HEADER-- 
  Make header visible IF user is scrolling upwards, or scroll position is less than 200px
    
  --------------------------------------------------------*/

  const setStickyNav = () => {
      if(scrollY < prevScroll || scrollY < 200) {
        return setIsSticky(true);
      } else {
        return setIsSticky(false);
      }
  };

  useEffect(() => {
    setIsScrolling(true);
    if(isScrolling) {
      window.addEventListener('scroll', setStickyNav);
    }
    return () => {
      setIsScrolling(false);
      window.removeEventListener('scroll', setStickyNav);
    }
}, [scrollY, isScrolling]);

  /* --------------------------------------------------------

  Close navigation menu if it's open when user makes screen larger that 680px.  
    
  --------------------------------------------------------*/

  useEffect(() => {
    if(isOpen && width > 960) setIsOpen(false);
  }, [width, isOpen]);
  
  return (
    <MDXProvider components = {shortcodes}>
      <Header sticky = {isSticky} isOpen = {isOpen} handleClick = {handleClick} {...rest}/>
        <Container isOpen = {isOpen}>
            {children}
        </Container>
      <Footer />
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
