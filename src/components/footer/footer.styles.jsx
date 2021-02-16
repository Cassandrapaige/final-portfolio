import styled from "styled-components"
import colors from "../../config/colors"

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${colors.light};
  text-align: center;
  padding: 25px 10px;
  font-weight: 500;
  font-size: 20px;
  border-top: 2px solid ${colors.secondary};

  h4 {
    font-size: 19px;
    font-weight: 400;
    line-height: 30px;
  }

  span,
  .fa-heart {
    color: #f85195;
  }
`
