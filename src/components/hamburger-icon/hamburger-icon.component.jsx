import React from 'react'

import {HamburgerMenuContainer, HamburgerMenu} from './hamburger-icon.styles'

const HamburgerIcon = ({handleClick, ...rest}) => {
    return (
         <HamburgerMenuContainer onClick = {handleClick} {...rest}>
            <HamburgerMenu {...rest}/>
        </HamburgerMenuContainer>
    )
}

export default HamburgerIcon;