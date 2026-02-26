import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

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
  }

  span {
    margin-top: 16px;
    color: ${colors.black};
    font-size: 24px;
  }
`
