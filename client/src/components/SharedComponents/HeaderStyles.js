import styled from 'styled-components'
import { colorScheme, fontSizing, 
  breakpoints, flex } from '../DesignComponents/theme'

export const HeaderContainer = styled.header`
  width: 100%;
  ${flex('column','center')};
  padding: 20px 10px;
  top: 0;
  z-index: 5;

  background: ${colorScheme.headerBgColor};

  & * {
    color: ${colorScheme.headerFontColor};
    font-size: ${fontSizing.s};
  }

  @media ${breakpoints[0]} {
    align-items: flex-start;
    padding-left: 5vw;
    
  }

`

export const Nav = styled.nav`
  width: 90%;
  max-width: 600px;
  ${flex('row','center','space-between')}

  & * {
    text-decoration: none;
  }

  @media ${breakpoints[0]} {
    width: 50%;
    display: ${props => props.show ? 'flex': 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    z-index: 10;

    & a {
      width: 100%;
      padding: 10px 0;
    }
  }

`

export const CrudNav = styled.div`
  width: 30%;
  ${flex('row', 'center', 'space-between')};

  @media ${breakpoints[0]} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & a {
      width: 100%;
      padding: 10px 0;
      border-top: 1px solid ${colorScheme.defaultBorderColor};
    }
  }

`

export default HeaderContainer