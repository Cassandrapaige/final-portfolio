import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const HamburgerMenuContainer = styled.div`
position: relative;
width: 40px;
height: 40px;
display: none;
z-index: 5000;

    @media(max-width: 960px) {
        display: block;
    }
`

export const HamburgerMenu = styled.div`
position: absolute;
width: 70%;
height: 2px;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
background: ${colors.dark};
transition: .2s background ease .2s;

    &:before,
    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background: ${colors.dark};
        transition: transform .2s linear, margin .2s linear .2s;
    };

    &:before {
        margin-top: -10px;

        ${({isOpen}) => isOpen && css`
            margin: 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            transition: margin .2s linear, transform .2s linear .2s;
        `}
    };

    &:after {
        margin-top: 10px;

        ${({isOpen}) => isOpen && css`
            margin: 0;
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
            transition: margin .2s linear, transform .2s linear .2s;
        `}
    };

    ${({isOpen}) => isOpen && css`
        transition: background .2s ease;
        background: transparent;
    `}  
`