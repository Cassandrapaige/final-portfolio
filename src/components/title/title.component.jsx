import React from 'react'

import {TitleContainer} from './title.styles'

const Title = ({children, ...props}) => {
    return (
        <TitleContainer {...props}>
            {children}
         </TitleContainer>
    )
}

export default Title;
