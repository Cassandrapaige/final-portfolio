import styled from 'styled-components'

export const Grid = styled.div`
display: -ms-grid; 
display: grid;
grid-template-columns: repeat(2, 1fr);
-ms-grid-columns: repeat(2, 1fr);
gap: 20px;
padding-top: 50px;

img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 6px rgba(18, 18, 18, .1);
    -o-object-fit: contain;
	object-fit: contain;
}
`