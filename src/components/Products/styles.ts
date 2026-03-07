import styled from "styled-components";
import { breakpoints, colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.lightBrown};
  padding-top: 8px;
  padding-bottom: 64px;

  h2 {
    text-align: center;
    font-size: 64px;
  }

  h4 {
    text-align: center;
    font-size: 48px;
  }

    @media (max-width: ${breakpoints.tablet}) {
      h2 {
        font-size: 48px;
      }
    }
`

export const ButtonList = styled.ul`
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0 144px;
    margin-bottom: 48px;

    .active {
      background-color: ${colors.darkBrown};
      border-radius: 8px;

    }

    a {
      color: ${colors.gray};
      font-size: 24px;
      padding: 8px;
      cursor: pointer;
    }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  img {
    height: 240px;
    width: 240px;
    border-radius: 8px;
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-8px);
    }
  }

  p {
    margin: 12px 0;
    color: ${colors.black};
    font-size: 24px;
  }

  span {
    font-size: 24px;
  }

    @media (max-width: ${breakpoints.tablet}) {
      img {
        height: 200px;
        width: 200px;
      }
    }
`
