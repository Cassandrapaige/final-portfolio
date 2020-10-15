import styled from 'styled-components'
import colors from '../../config/colors'

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 300px;
margin-bottom: 30px;
background: ${colors.primary};
gap: 20px;
padding: 20px;

    .image-3 {
        grid-column: span 2;
    }

    @media(max-width: 700px) {
        grid-auto-rows: 300px 200px;
        gap: 10px;
        padding: 10px;
        grid-template-columns: repeat(3, 1fr);

        .image-1,
        .image-4 {
            display: none;
        }

        .image-0 {
            grid-column: span 3; 
        }
    }
`

export const ImageContainer = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
mix-blend-mode: luminosity;
`
 