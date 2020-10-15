import React from 'react'

import {TitleContainer} from './title.styles'

const Title = ({text, ...props}) => {
    return (
        <TitleContainer {...props}>
            {text}
         </TitleContainer>
    )
}

export default Title;
