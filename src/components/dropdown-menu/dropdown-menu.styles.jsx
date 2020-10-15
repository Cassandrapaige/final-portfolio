import styled from 'styled-components'
import colors from '../../config/colors'

export const DropdownContainer = styled.div`
position: relative;
padding: 30px 40px;
cursor: pointer;
margin-right: 10px;

    li, a {
        color: ${colors.dark};
        cursor: pointer;
    }

    &:hover ul{
        display: block;
    }

    &:after {
        position: absolute;
        width: 7px;
        height: 7px;
        content: '';
        top: 48%;
        transform: translateY(-48%) rotate(45deg);
        right: 25px;
        border-bottom: 2px solid ${colors.dark};
        border-right: 2px solid ${colors.dark};
    }


    @media(max-width: 900px) {
        display: none;
    }
`

export const DropdownList = styled.ul`
list-style-type: none;
margin: 0;
position: absolute;
left: 50%;
transform: translate(-50%, 30px);
background: ${colors.light};
-webkit-filter: drop-shadow(0px 6px 6px rgba(19, 19, 19, .1));
filter: drop-shadow(0px 6px 6px rgba(19, 19, 19, .1));
box-shadow: 0px 2px 4px rgba(46,41,51,0.08),0px 2px 4px rgba(71,63,79,0.08);
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
    transform: translateX(-50%);
    pointer-events: none;
}
`