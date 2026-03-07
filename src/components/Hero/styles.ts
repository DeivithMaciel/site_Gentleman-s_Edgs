import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  color: ${colors.gray};
  background: linear-gradient(to left, #000 40%, rgba(0, 0, 0, 0.8));
  width: 100%;
  padding-top: 128px;

  @media (max-width: ${breakpoints.tablet}) {
    background-color: #000;
  }
`

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    text-align: center;

    h1 {
      font-size: 48px;
      font-weight: 900;
      margin-bottom: 16px;
      padding-right: 64px;
    }

    @media (max-width: ${breakpoints.mobile}) {
    padding-top: 32px;

      h1 {
        font-size: 36px;
        padding-right: 0;
      }
    }

    p {
      font-size: 32px;
      margin-bottom: 32px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
      }
    }

    button {
      padding: 24px;
      margin-left: 128px;

      @media (max-width: ${breakpoints.tablet}) {
        margin-left: 8px;
        margin-bottom: 16px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        margin-left: 0;
      }
    }
  }

  img {
    height: 620px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 480px;
      width: 360px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`
