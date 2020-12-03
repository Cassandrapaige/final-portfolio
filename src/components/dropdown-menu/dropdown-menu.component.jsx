import {Link} from "gatsby"
import React from 'react'
import ListItem from '../list-item/list-item.component'

import {DropdownContainer, DropdownList} from './dropdown-menu.styles'

const DropdownMenu = ({data, label}) => (
    <DropdownContainer>
        <span>{label}</span>
        <DropdownList>
        {
            data.allMdx.edges.map(({node}, index) => (
                <Link to = {node.fields.slug} key = {index}>
                    <ListItem isLink item = {node.frontmatter.title} />
                </Link>
            ))
        }
        </DropdownList>
    </DropdownContainer>
)

export default DropdownMenu;