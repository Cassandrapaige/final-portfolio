import styled from 'styled-components'
import colors from '../../config/colors'

export const ProjectContainer = styled.div`
background: ${colors.secondary};
border: 1px solid ${colors.dark};
box-shadow: 6px 6px ${colors.secondary};
grid-template-columns: repeat(2, 1fr);
-ms-grid-columns: repeat(2, 1fr);
display: -ms-grid; 
display: grid;
margin-bottom: 30px;
height: 100%;

  a {
    border-radius: 0;
  }

  &:nth-child(2n) {
    background: ${colors.primary};
    box-shadow: 6px 6px ${colors.primary};

    a:hover {
      box-shadow: 2px 2px ${colors.dark};
      background: ${colors.secondary};
    }
  }

  a:hover {
    box-shadow: 2px 2px ${colors.dark};
    background: ${colors.primary};
  }

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectOverviewContainer = styled.div`
text-decoration: none;
display: -webkit-box; 
display: -ms-flexbox;
display: -webkit-flex;
display: flex;  
flex-direction: column;
justify-content: center;
padding: 20px;
`

export const ImageContainer = styled.div`
background: rgba(255, 255, 255, .4);
display: -webkit-box; 
display: -ms-flexbox;
display: -webkit-flex;
display: flex;  
flex-direction: column;
justify-content: center;

@media(max-width: 700px) {
  max-height: 400px;
  width: 100%;
}

@media(max-width: 500px) {
  max-height: 300px;
}
`

export const BlogTitle = styled.h3`
  font-size: 40px;
  margin-bottom: 10px;
  color: ${colors.light};
  -webkit-text-stroke: 1px ${colors.dark};
  font-weight: 900;

  @media(max-width: 700px) {
    font-size: 30px;
  }
`