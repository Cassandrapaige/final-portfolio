import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
import colors from '../../config/colors'

export const Button = styled(Link)`
border: none;
outline: none;
padding: 12px 20px;
border: 1px solid ${colors.dark};
color: ${colors.dark};
text-decoration: none;
text-align: center;
transition: all .2s linear;
box-shadow: ${({iscta}) => iscta ? `3px 3px ${colors.dark}` : `3px 3px ${colors.dark}`};
background: ${({color}) => color};
margin: ${({withmargin}) => withmargin && `0 10px 10px 0`};
cursor: pointer;
display: -webkit-box; 
display: -ms-flexbox;
display: -webkit-flex;
display: flex;  
justify-content: center;
align-items: center;
overflow: hidden;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
touch-action: manipulation;
font-weight: 500;

  ${({iscta}) => iscta && css`
    background: ${colors.secondary};  

    &:hover {
      background: ${colors.primary};
    }
  `}

    &:hover {
        box-shadow: 2px 2px ${colors.dark};
        background: ${({color}) => color === "#fff" ? colors.secondary : colors.light};
    }


  &:hover .arrow {
    opacity: 1;
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
`

export const Arrow = styled.span`
opacity: 0;
transition: all .5s ease;
-webkit-transform: translateX(0px);
-ms-transform: translateX(0px);
transform: translateX(0px);
`