import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const Item = styled.li`
position: relative;
color: ${colors.text};
font-size: 17px;
line-height: 150%;

    &:before {
        content: '';
        position: absolute;
        height: 12px;
        top: 50%;
        -webkit-transform: translateY(-50%) rotate(45deg);
        -ms-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
        width: 12px;
        margin-left: -1.2em;
        border: 1px solid ${colors.dark};
        background: ${colors.primary};
        box-shadow: 2px 2px ${colors.primary};
        transition: all .5s ease;

        ${({isLink}) => isLink && css`
            background: ${colors.secondary};
            box-shadow: 2px 2px ${colors.secondary};
        `}

    }

    &:hover :before {
        ${({isLink}) => isLink && css`
            -webkit-transform: translateY(-50%) rotate(180deg);
            -ms-transform: translateY(-50%) rotate(180deg);
            transform: translateY(-50%) rotate(180deg);
            background: ${colors.primary};
            box-shadow: 2px 2px ${colors.primary};
        `}
    }
`