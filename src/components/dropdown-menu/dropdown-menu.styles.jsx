import styled from 'styled-components'
import colors from '../../config/colors'

export const DropdownContainer = styled.div`
position: relative;
padding: 30px 40px;
cursor: pointer;
margin-right: 10px;

    li, span {
        color: ${colors.dark};
        cursor: pointer;
    }

    span {
        font-weight: 500;
    }

    &:hover ul{
        display: block;
    }

    &:after {
        position: absolute;
        width: 9px;
        height: 9px;
        content: '';
        top: 48%;
        -webkit-transform: translateY(-48%) rotate(45deg);
        -ms-transform: translateY(-48%) rotate(45deg);
        transform: translateY(-48%) rotate(45deg);
        right: 25px;
        border-bottom: 2px solid ${colors.dark};
        border-right: 2px solid ${colors.dark};
    }


    @media(max-width: 960px) {
        display: none;
    }
`

export const DropdownList = styled.ul`
list-style-type: none;
margin: 0;
position: absolute;
left: 50%;
-webkit-transform: translate(-50%, 30px);
-ms-transform: translate(-50%, 30px);
transform: translate(-50%, 30px);
background: ${colors.light};
-webkit-filter: drop-shadow(rgb(0 0 0 / 12%) 0px 2px 8px);
filter: drop-shadow(rgb(0 0 0 / 12%) 0px 2px 8px);
box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px;
border-radius: 10px;
padding: 20px 40px;
min-width: 300px;
display: none;

&:before {
    width: 30px;
    height: 30px;
    position: absolute;
    content: '';
    background: ${colors.light};
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    top: -30px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    pointer-events: none;
}
`