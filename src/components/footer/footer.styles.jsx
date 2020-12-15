import styled from 'styled-components'
import colors from '../../config/colors'

export const FooterContainer = styled.footer`
width: 100%;
background: ${colors.light};
text-align: center;
padding: 30px 50px;
font-weight: 500;
font-size: 20px;
border-top: 2px solid ${colors.secondary};

 h4 {
    font-family: muli, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 30px;
 }

 span, .fa-heart {
    color: #f85195;
 }
`