import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import {Button, Arrow} from './custom-button.styles'

export const CustomButton = ({id, children, ...rest}) => (
    <Button id = {id} {...rest}>
        {children}
    </Button>
)

export const ButtonWithArrow = ({text, ...rest}) => (
    <CustomButton {...rest}> 
            {text}
        <Arrow className = "arrow">
            <FontAwesomeIcon icon={faArrowRight} width="0"/>
        </Arrow>
    </CustomButton>
)

