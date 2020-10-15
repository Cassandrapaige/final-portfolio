import styled, {css} from 'styled-components'
import colors from '../../config/colors'

export const Item = styled.li`
position: relative;
margin-bottom: ${({isLink}) => isLink && `15px`};
color: ${colors.text};

    &:before {
        content: '';
        position: absolute;
        height: 12px;
        top: 50%;
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
            transform: translateY(-50%) rotate(180deg);
            background: ${colors.primary};
            box-shadow: 2px 2px ${colors.primary};
        `}
    }
`