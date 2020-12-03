import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
import colors from '../../config/colors'

export const HeaderContainer = styled.header`
box-shadow: 0px 2px 6px rgba(18, 18, 18, .1);
background: #fff;
transition: transform .3s ease, background 0s ease 0s;
position: sticky;
-webkit-transform: ${({sticky}) => sticky ? `translateY(0px)` : `translateY(-300px)`};
-ms-transform: ${({sticky}) => sticky ? `translateY(0px)` : `translateY(-300px)`};
transform: ${({sticky}) => sticky ? `translateY(0px)` : `translateY(-300px)`};
top: 0;
z-index: 100;
padding: 5px 40px;

    .cta {
        animation: .6s fly ease;
    }

    @media(max-width: 960px) {
        padding: 20px;

        #ctaBtn {
            display: none;
        }
    }


${({isOpen}) => isOpen && css`
    box-shadow: none;
`}
`

export const Navbar = styled.nav`
margin: 0 auto;
padding: 0;
display: -webkit-box; 
display: -ms-flexbox;
display: -webkit-flex;
display: flex;  
justify-content: space-between;
align-items: center
`
export const Logo = styled(Link)`
color: ${colors.dark};
text-decoration: none;
line-height: 28px;

    h2 {
        font-weight: 800;
        font-size: 26px;

        span {
            font-weight: 300;
            font-size: 19px;
            padding-left: 5px;
            color: ${colors.text};

            @media(max-width: 900px) {
                display: block;
                padding-left: 0;
                padding-top: 5px;
            }

            @media(max-width: 500px) {
                font-size: 16px;
            }
        }

        @media(max-width: 700px) {
            font-size: 22px;

            span {
                font-size: 17px;
            }
        }
    }

// ${({isOpen}) => isOpen && css`
//     opacity: 0;
// `}
`

export const Arrow = styled.span`
margin-left: 10px;
transition: all .7s ease;
transition-delay: .2s;
`