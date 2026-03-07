import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.darkBrown};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;


  &.show {
    transform: translateY(0);
  }
  &.hide {
    transform: translateY(-100%);
  }

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

        @media (max-width: ${breakpoints.tablet}) {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    section {
    padding: 0 16px;
      img {
        height: 72px;
        width: 72px;
      }

      ul {
        display: none;
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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px;
    font-size: 14px;
  }
`
