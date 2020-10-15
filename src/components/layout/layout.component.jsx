import React, {useEffect, useState, useRef} from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header.component"
import Footer from "../footer/footer.component"

// Components for MDXProvider (Universal components)
import Title from "../title/title.component"
import ListContainer from "../list-container/list-container.component"

import {Container} from './layout.styles'

import "../layout.css"

const Layout = ({ children, ...rest }) => {

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const [scrollY, setScrollY] = useState(0);
  const prevScroll = usePrevious(scrollY);
  const [isSticky, setIsSticky] = useState(true);

  const getScrollPosition = () => {
    if(typeof window !== undefined) {
      setScrollY(window.pageYOffset);
    };
    if(scrollY < prevScroll || scrollY < 200) {
      return setIsSticky(true)
    };
    return setIsSticky(false);
  }

  useEffect(() => {
      window.addEventListener('scroll', getScrollPosition);
      return () => window.removeEventListener('scroll', getScrollPosition);
  }, [scrollY])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const shortcodes = {
    Title,
    ListContainer
  }
  
  return (
    <MDXProvider components = {shortcodes}>
      <Header sticky = {isSticky} {...rest}/>
        <Container>
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
