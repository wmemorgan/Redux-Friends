import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../StyleComponents/theme'

export const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  ${flex('column','center','center')};
  padding: 20px;
  font-size: ${fontSizing.sm};

  @media ${breakpoints[0]} {
    width: 100%;
    font-size ${fontSizing.s};
  }

  form {
    width: 90%;
    ${flex('column','center')};
    padding: 20px;
    box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
    background: ${color.primaryBgShading};

    @media ${breakpoints[0]} {
      width: 100%;
    }

    & *  {
      margin: 5px 0;
    }

    input {
      width: 100%;
      padding: 2px 10px;
      border: 1px solid ${colorScheme.defaultBorderColor};
      background: ${color.lightText};
      line-height: 1.5rem;
      
    }

    button {
      width: 50%;
      min-width: 150px;
    }
  }


`

export default FormContainer