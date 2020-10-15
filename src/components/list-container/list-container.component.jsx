import React from 'react'

import {List} from './list-container.styles'

import ListItem from '../list-item/list-item.component'

const ListContainer = ({list}) => {
    return (
        <List>
            {
                list.map((item, index) => ( 
                    <ListItem item = {item} key = {index}/>
                ))
            }
        </List>
    )
}

export default ListContainer