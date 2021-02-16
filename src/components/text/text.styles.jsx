import styled from "styled-components"
import colors from "../../config/colors"

export const TextContainer = styled.p`
  font-size: 19px;
  line-height: 30px;
  margin-bottom: 20px;
  color: ${({ darken }) => (darken ? `${colors.dark}` : `${colors.text}`)};
`
