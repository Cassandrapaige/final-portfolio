import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const MobileNavigationMenu = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
height: 0px;
width: 0px;
background: ${colors.light};
z-index: 10;
opacity: 0;
overflow: scroll;
padding: 100px 50px;

${({onscreen})=> onscreen && css`
opacity: 1;
min-height: 100vh;
height: 100%;
width: 100vw;
`}

@media(max-width: 500px) {
    padding: 100px 20px;
}
`

export const LinkContainer = styled.div`
margin: 10px 0;
transition: all .5s ease;
transform: translateY(60px);
opacity: 0;

    ${({onscreen}) => onscreen && css`
        transform: translateY(0px);
        opacity: 1;
        transition-delay: ${({interval}) => `${interval / 5}s`};
    `}
`