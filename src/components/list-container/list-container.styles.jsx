import styled from 'styled-components'

export const List = styled.ul`
list-style-type: none;
display: -ms-grid;
display: grid;
-ms-grid-columns: (minmax(200px, 1fr))[auto-fit];
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 0 12px;
padding-bottom: 20px;

@media(max-width: 700px) {
    grid-template-columns: repeat(2, auto);
}
`
