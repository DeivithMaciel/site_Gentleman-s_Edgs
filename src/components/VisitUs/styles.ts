import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.lightBrown};
  color: ${colors.gray};
  text-align: center;
  padding: 120px 0;

  h2 {
    margin: 0 auto 48px;
    font-size: 56px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    color: ${colors.lightBrown};
    font-size: 24px;
    margin: 24px 16px 0 16px;
  }

  section {
    display: flex;
    justify-content: center;

    img {
      height: 640px;
      border-radius: 16px;
      padding-right: 128px;
      margin-bottom: 24px;
    }

    ul {
      list-style: none;

      h3 {
        font-size: 36px;
        margin: 24px 0;
      }

      li {
        font-size: 24px;
        padding: 12px;
      }
    }
  }
`
