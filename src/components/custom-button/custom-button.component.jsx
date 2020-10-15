import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import {Button, Arrow} from './custom-button.styles'

export const CustomButton = ({id, href, children, ...rest}) => (
    <Button id = {id} to = {href} {...rest}>
        {children}
    </Button>
)

export const ButtonWithArrow = ({href, text, ...rest}) => (
    <CustomButton href = {href} {...rest}> 
            {text}
        <Arrow className = "arrow">
            <FontAwesomeIcon icon={faArrowRight} width="0"/>
        </Arrow>
    </CustomButton>
)

