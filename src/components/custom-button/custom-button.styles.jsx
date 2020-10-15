import styled from 'styled-components'
import {Link} from 'gatsby'
import colors from '../../config/colors'

export const Button = styled(Link)`
border: none;
outline: none;
padding: 12px;
border: 1px solid ${colors.dark};
color: ${colors.dark};
text-decoration: none;
text-align: center;
transition: all .2s linear;
box-shadow: ${({iscta}) => iscta ? `3px 3px ${colors.dark}` : `3px 3px ${colors.dark}`};
background: ${({iscta}) => iscta ? colors.secondary : colors.light};
margin: ${({withmargin}) => withmargin && `0 10px 10px 0`};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
touch-action: manipulation;

    &:hover {
        box-shadow: 2px 2px ${colors.dark};
        background: ${({iscta}) => iscta ? colors.primary : colors.secondary};
    }


  &:hover .arrow {
    opacity: 1;
    transform: translateX(10px);
  }
`

export const Arrow = styled.span`
opacity: 0;
transition: all .5s ease;
transform: translateX(0px);
`