import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import {FooterContainer} from './footer.styles'

const Footer = () => {
    return (
        <FooterContainer>
            <h4>&copy; 2020. Made with 
            <span style= {{fontWeight: 900, padding: `0 5px`}}>love</span>
            and frustration by Cassie Rossall.  
            <FontAwesomeIcon 
                icon={faHeart} 
                width = "0"
                style= {{marginLeft: `5px`}}/>
            </h4>
        </FooterContainer>
    )
}

export default Footer;
