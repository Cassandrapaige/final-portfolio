import styled from 'styled-components'

export const AnimatedContainer = styled.div`
opacity: 0;
transform: translateY(50px);
animation: slideUp 1s forwards;
animation-delay: ${({delay}) => `${delay}s`};
-webkit-animation: slideUp 1s forwards;
-webkit-animation-delay: ${({delay}) => `${delay}s`};
`