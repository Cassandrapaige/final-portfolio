import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const HamburgerMenuContainer = styled.div`
position: relative;
width: 45px;
height: 45px;
background: ${colors.secondary};
border: 1px solid ${colors.dark};
display: none;
z-index: 1000;

    @media(max-width: 600px) {
        display: block;
    }
`

export const HamburgerMenu = styled.div`
position: absolute;
width: 70%;
height: 2px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: ${colors.dark};
transition: .2s background ease .2s;

    @media(max-width: 600px) {
        display: block;
    };

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
            transform: rotate(45deg);
            transition: margin .2s linear, transform .2s linear .2s;
        `}
    };

    &:after {
        margin-top: 10px;

        ${({isOpen}) => isOpen && css`
            margin: 0;
            transform: rotate(-45deg);
            transition: margin .2s linear, transform .2s linear .2s;
        `}
    };

    ${({isOpen}) => isOpen && css`
        transition: background .2s ease;
        background: transparent;
    `}  
`