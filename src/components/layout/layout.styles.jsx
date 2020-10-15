import styled from 'styled-components'

export const Container = styled.main`
margin: 20px auto;
max-width: 960px;
padding: 1.0875rem 1.45rem;
background: rgba(255, 255, 255, .8);
box-shadow: 0px 2px 4px rgba(46,41,51,0.08),0px 4px 8px rgba(71,63,79,0.16);

    @media(max-width: 960px) {
        margin: 10px;
        padding: 1.0875rem 1.005rem;
    }
`
