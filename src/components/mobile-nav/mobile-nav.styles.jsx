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
padding-top: 85px;
opacity: 0;
overflow: scroll;

${({onscreen})=> onscreen && css`
opacity: 1;
min-height: 100vh;
height: 100%;
width: 100vw;
`}
`

export const LinkItem = styled.div`
background: ${colors.primary};
border: 1px solid ${colors.dark};
box-shadow: 2px 2px ${colors.dark};
margin: 20px;
display: flex;
flex-direction: column;
padding: 12px;
transition: all .5s ease-in-out;
transform: translateX(250px);
opacity: 0;

${({onscreen}) => onscreen && css`
    transition-delay: ${({interval}) => `${interval / 6}s`};
    transform: translateX(0px);
    opacity: 1;
`}

&:nth-of-type(even) {
    background: ${colors.secondary};  
}
`