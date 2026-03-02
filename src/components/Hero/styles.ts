import styled from 'styled-components'

import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  color: ${colors.gray};
    background: linear-gradient(
  to left,
  #000 40%,
  rgba(0, 0, 0, 0.8));
  width: 100%;
  padding-top: 128px;
`

export const Content = styled.section`
  display: flex;

  div {
    flex-direction: column;
    align-items: center;
    padding-top: 64px;

    h1 {
      font-size: 48px;
      text-align: center;
      font-weight: 900;
      padding-right: 64px;
    }

    p {
      font-size: 32px;
    }

    button {
      padding: 24px;
      margin-left: 128px;
    }
  }

  img {
    height: 620px;
  }
`
