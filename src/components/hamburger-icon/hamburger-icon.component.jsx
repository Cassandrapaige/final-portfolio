import React from 'react'

import {HamburgerMenuContainer, HamburgerMenu} from './hamburger-icon.styles'

const HamburgerIcon = ({isOpen, setIsOpen}) => {

    return (
         <HamburgerMenuContainer onClick = {() => setIsOpen(!isOpen)} isOpen = {isOpen}>
            <HamburgerMenu isOpen = {isOpen}/>
        </HamburgerMenuContainer>
    )
}

export default HamburgerIcon;