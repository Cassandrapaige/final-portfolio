import React from 'react'

import {TextContainer} from './text.styles'

const Text = ({children, ...rest}) => {
    return (
        <TextContainer {...rest}>
            {children}
        </TextContainer>
    )
}

export default Text;