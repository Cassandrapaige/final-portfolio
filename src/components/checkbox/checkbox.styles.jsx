import styled from 'styled-components'
import colors from '../../config/colors'

export const FormGroup = styled.div`
display: block;
position: relative;
padding-left: 35px;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
margin-top: 15px;
`

export const Label = styled.label`
    font-weight: 100 !important;
    font-size: 1.3em;
    font-family: 'Indie flower';

    input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + svg path {
            stroke-dashoffset: 0;
            stroke: ${colors.dark};
        }

        &:focus + svg {
            outline: 3px dotted ${colors.primary};
            outline-offset: 5px;
        }
    }

    svg {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid ${colors.dark};
        background: ${colors.accent};
        box-shadow: 3px 3px ${colors.accent};

        path {
            transition: stroke-dashoffset .4s linear;
        }
    }
`