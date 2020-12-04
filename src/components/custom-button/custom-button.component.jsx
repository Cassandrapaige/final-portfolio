import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import {Button, Arrow} from './custom-button.styles'

export const CustomButton = ({id, color = "fff", children, ...rest}) => (
    <Button id = {id} color = {color} {...rest}>
        {children}
    </Button>
)

export const ButtonWithArrow = ({text, bg, ...rest}) => (
    <CustomButton {...rest}> 
            {text}
        <Arrow className = "arrow">
            <FontAwesomeIcon icon={faArrowRight} width="0"/>
        </Arrow>
    </CustomButton>
)

