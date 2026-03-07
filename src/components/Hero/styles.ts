import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  color: ${colors.gray};
    background: linear-gradient(
  to left,
  #000 40%,
  rgba(0, 0, 0, 0.8));
  width: 100%;
  padding-top: 128px;

  @media (max-width: ${breakpoints.tablet}) {
    background-color: #000;
  }
`

export const Content = styled.section`
  display: flex;

  div {
    flex-direction: column;
    align-items: center;
    padding-top: 64px;

    @media (max-width: ${breakpoints.tablet}) {
      // felx-direction: line;
    }

    h1 {
      font-size: 48px;
      text-align: center;
      font-weight: 900;
      padding-right: 64px;
    }

    p {
      font-size: 32px;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
      }
    }

    button {
      padding: 24px;
      margin-left: 128px;

      @media (max-width: ${breakpoints.tablet}) {
        margin-left: 8px;
        margin-bottom: 16px;
      }
    }
  }

  img {
    height: 620px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 480px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      height: 560px;
      width: 360px;
    }
  }
`
