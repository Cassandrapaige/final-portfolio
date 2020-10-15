import {graphql, Link, useStaticQuery} from "gatsby"
import React from 'react'
import ListItem from '../list-item/list-item.component'

import {DropdownContainer, DropdownList} from './dropdown-menu.styles'

const DropdownMenu = ({data, label}) => {

    return (
        <DropdownContainer>
            <a href="javascript:void(0)" className="dropbtn">{label}</a>
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
}

export default DropdownMenu;