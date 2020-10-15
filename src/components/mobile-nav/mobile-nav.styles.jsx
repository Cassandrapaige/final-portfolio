import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const MobileNavigationMenu = styled.nav`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
height: 100vh;
width: 100vw;
background: ${colors.light};
z-index: 10;
`