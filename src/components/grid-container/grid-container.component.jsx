import React from 'react'

import {Grid} from './grid-container.styles'

const GridContainer = ({children}) => {
    return (
        <Grid>
            {children}
        </Grid>
    )
}

export default GridContainer;