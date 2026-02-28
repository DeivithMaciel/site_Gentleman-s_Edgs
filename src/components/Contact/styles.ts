import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.veryDarkBrown};
  color: ${colors.brown};
  padding: 96px 0;
  text-align: center;

  section {
    background-color: ${colors.darkBrown};
    padding: 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;

    button {
      margin: 0 auto;
    }

    h2 {
      margin: 0;
      font-size: 48px;
      font-weight: 900;
    }

    p {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 56px;
    }

    .icons {
      margin-top: 56px;

      a {
        color: inherit;
        text-decoration: none;
        padding: 24px;
      }
    }
  }
`
