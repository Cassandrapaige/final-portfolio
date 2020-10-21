import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
import colors from '../../config/colors'

export const HeaderContainer = styled.header`
box-shadow: 0px 2px 2px rgba(18, 18, 18, .1);
background: rgba(255, 255, 255, .98);
zIndex: 100;
transition: transform .3s ease;
position: sticky;
transform: ${({sticky}) => sticky ? `translateY(0px)` : `translateY(-300px)`};
top: 0;
z-index: 100;
padding: 0px 40px;

${({isOpen}) => isOpen && css`
transform: translateY(0px);
`}
    .cta {
        animation: .6s fly ease;
    }


    @media(max-width: 900px) {
        padding: 20px;
    }

    @media(max-width: 600px) {
        #ctaBtn {
            display: none;
        }
    }
`

export const Navbar = styled.nav`
margin: 0 auto;
padding: 0;
display: flex;
justify-content: space-between;
align-items: center
`
export const Logo = styled(Link)`
color: ${colors.dark};
text-decoration: none;
line-height: 28px;

    h2 {
        font-weight: 900;
        font-size: 26px;

        span {
            font-weight: 300;
            font-size: 19px;
            padding-left: 15px;


            @media(max-width: 900px) {
                display: block;
                padding-left: 0;
                padding-top: 5px;
            }

            @media(max-width: 500px) {
                font-size: 16px;
            }
        }

        @media(max-width: 500px) {
            font-size: 22px;
        }
    }
`

export const NavItem = styled.div`
padding: 12px 30px;
cursor: pointer;
color: ${colors.dark};
text-decoration: none;
font-size: 20px;
font-weight: 200;
position: relative;
`

export const Arrow = styled.span`
margin-left: 10px;
transition: all .7s ease;
transition-delay: .2s;
`