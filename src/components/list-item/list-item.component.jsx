import React from 'react'

import {Item} from './list-item.styles'

const ListItem = ({item, ...rest}) => {
    return (
        <Item {...rest}>{item}</Item>
    )
}

export default ListItem