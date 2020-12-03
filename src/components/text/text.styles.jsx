import styled from 'styled-components'
import colors from '../../config/colors'

export const TextContainer = styled.p`
font-size: 18px;
font-weight: 100;
line-height: 170%;
margin-bottom: 20px;
color: ${({darken}) => darken ? `${colors.dark}` : `${colors.text}`};
`