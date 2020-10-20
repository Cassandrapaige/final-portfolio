import styled from 'styled-components'
import colors from '../../config/colors'

export const FormContainer = styled.div`
padding: 20px;
border: 1px solid ${colors.secondary};
min-height: 60vh;
`

export const Form = styled.form`
display: flex;
flex-direction: column;

    input[type="text"], input[type="email"], textarea {
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
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0px 1000px ${colors.light} inset;
    }

    input[type="text"]{
        text-transform: capitalize;
    }

    label {
        font-weight: 600;
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
`