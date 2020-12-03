import styled, {css} from 'styled-components'
import {animated} from 'react-spring'
import colors from '../../config/colors'

export const MobileNavigationMenu = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
min-height: 100vh;
width: 100vw;
-webkit-transform: translateX(-100%);
-ms-transform: translateX(-100%);
transform: translateX(-100%);
background: ${colors.light};
overflow: scroll;
padding: 130px 50px 50px 50px;
transition: all .2s ease;
z-index: 30;

a {
    font-size: 19px;
}

${({onscreen})=> onscreen && css`
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
`}

@media(max-width: 500px) {
    padding: 110px 20px 20px 20px;
}
`

export const ListContainer = styled.ul`
list-style-type: none;

${({withmargin}) => withmargin && css`
    padding-left: 50px;
`}
`

export const LinkContainer = styled(animated.div)`
margin: 10px 0;
`