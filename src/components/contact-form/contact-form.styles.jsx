import styled, { css } from "styled-components"
import colors from "../../config/colors"

export const FormContainer = styled.div`
  min-height: 60vh;
`

export const Form = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;

  input[type="text"],
  input[type="email"],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 12px 10px;
    line-height: 100%;
    border: 1px solid ${colors.secondary};
    margin: 5px 0;
    max-width: 100%;
    background: ${colors.light};
    outline: none;
    box-shadow: none;
    border-radius: 0;

    &:focus {
      outline: 3px dotted ${colors.primary};
      outline-offset: 5px;
    }

    &:invalid {
      box-shadow: none;
    }
  }

  textarea {
    resize: none;
    margin-bottom: 20px;
    min-height: 250px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${colors.light} inset;
  }

  input[type="text"] {
    text-transform: capitalize;
  }

  label {
    font-weight: 700;
    color: ${colors.text};
  }

  button {
    font-size: 1.05em;
    padding: 16px;
    margin-top: 40px;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin: 10px 0;

  ${({ error }) =>
    error &&
    css`
      outline: 3px solid ${colors.primary};
      outline-offset: 10px;
    `}
`
