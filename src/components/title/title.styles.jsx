import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const TitleContainer = styled.h2`
color: ${colors.secondary};
font-size: ${({isLarge}) => isLarge ? '4.5rem' : '2.5rem'};
-webkit-text-stroke: 1px ${colors.dark};
position: relative;
font-weight: 900;
margin-bottom: 20px;
line-height: 100%;

${({isPurple}) => isPurple && css`
    color: ${colors.primary};
`}

span {
    color: ${colors.accent};
}

@media(max-width: 750px) {
    font-size: ${({isLarge}) => isLarge ? '3rem' : '2rem'};
}
`