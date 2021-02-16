import styled, { css } from "styled-components"

export const Container = styled.main`
  margin: 20px auto;
  max-width: 960px;
  padding: 50px 25px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px;
  overflow-x: hidden;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: 100vh;
      overflow: hidden;
    `}

  @media(max-width: 960px) {
    margin: 0;
    width: 100%;
    box-shadow: none;
    padding: 40px 20px;
  }
`
