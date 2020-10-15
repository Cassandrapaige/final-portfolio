import React from 'react'

import {TextContainer} from './text.styles'

const Text = ({children}) => {
    return (
        <TextContainer>
            {children}
        </TextContainer>
    )
}

export default Text;