import styled from 'styled-components'
import colors from '../../config/colors'

export const TitleContainer = styled.h2`
padding: 20px 0;
color: transparent;
font-size: ${({isLarge}) => isLarge ? '75px' : '50px'};
text-shadow: ${({isPurple}) => isPurple ? `2px 2px ${colors.primary}` : `2px 2px ${colors.secondary}`};
-webkit-text-stroke: 1px ${colors.dark};
font-weight: 900;

@media(max-width: 700px) {
    font-size: ${({isLarge}) => isLarge ? '9vmin' : '8vmin'};
    text-shadow: ${({isPurple}) => isPurple ? `1px 1px ${colors.primary}` : `1px 1px ${colors.secondary}`};
  }
`