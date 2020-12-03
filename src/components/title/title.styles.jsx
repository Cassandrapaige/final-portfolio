import styled from 'styled-components'
import colors from '../../config/colors'

export const TitleContainer = styled.h2`
padding: 20px 0;
color: ${({isPurple}) => isPurple ? `${colors.primary}` : `${colors.secondary}`};
font-size: ${({isLarge}) => isLarge ? '80px' : '40px'};
-webkit-text-stroke: 1px ${colors.dark};
position: relative;
font-weight: 900;


span {
    color: ${colors.accent};
}

@media(max-width: 750px) {
    font-size: ${({isLarge}) => isLarge ? '50px' : '30px'};
}
`