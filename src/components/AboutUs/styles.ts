import styled from "styled-components";

import { breakpoints, colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.black};
  padding: 64px 0 128px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0;
  }
`

export const Content = styled.section`
  display: flex;
  padding: 128px 0;
  color: ${colors.gray};

  img {
    height: 520px;
    padding-right: 24px;
    border-radius: 16px;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 40px;
      font-weight: 900;
      text-align: center;
    }

    p {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 64px;
      line-height: 42px;
    }

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      height: 360px;
      width: 360px;
    }

    div {
      p {
        font-size: 24px;
        line-height: 36px;
    }
    }
  }
`
