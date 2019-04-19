import styled, { css } from 'styled-components'
import { color, colorScheme, flex } from '../DesignComponents/theme'

export const LoginContainer = styled.div`
  width: 90%;
  max-width: 600px;
  ${flex('column','center','center')};
  margin: 50px auto;
  padding: 50px 0;
  border: 1px solid ${colorScheme.defaultBorderColor};
  background: ${color.lightText};

  .error {
    margin: 0 auto;
    margin-top: 16px;
    padding: 16px;
    width: 300px;
    border: 1px solid #ff00002e;
    border-radius: 4px;
    background: #ff000036;
    color: ${color.danger};
  }
`

export const LoginForm = styled.form`
  width: 90%;
  margin: 20px 0;
  border: 1px solid ${props => props.theme.colorScheme.defaultBorderColor};

  input {
    width: 100%;
    padding: 5px 10px;
    border: none;
    font-size: ${props => props.theme.fontSizing.s};
  }

  ${props =>
    props.login &&
    css`
    ${props.theme.flex('column', 'center', 'center')};
    border: none;

    & * {
      width: 90%;
      margin: 5px 0;
      border-radius: 5px;
    }

    input {
      padding: 10px;
      border: 1px solid ${props.theme.colorScheme.defaultBorderColor};
      background: ${props.theme.color.primaryBgShading};
    }

    button {
      width: 100px;
      text-transform: uppercase;
    }
  `
  }
`