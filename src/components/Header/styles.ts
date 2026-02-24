  import styled from 'styled-components'

  import { colors } from '../../styles/GlobalStyles'

  export const Container = styled.div`
    background-color: ${colors.darkBrown};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;

    section {
      display: flex;
      align-items: center;
      padding: 16px 0;
      justify-content: space-between;
    }

    h1 {
      margin: 0;
    }

    img {
      height: 96px;
      width: 96px;
      border-radius: 50%;
    }

    ul {
      display: flex;
      list-style: none;

      li {
        padding-right: 24px;
        cursor: pointer;

        a {
          font-size: 24px;
          text-decoration: none;
          color: ${colors.gray};
        }
      }
    }
  `

  export const Button = styled.button`
    padding: 16px;
    border-radius: 32px;
    background-color: ${colors.gray};
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }

    a {
      color: ${colors.brown};
      text-decoration: none;
    }
  `
