import styled from "styled-components";

import { colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.black};
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
      font-size: 48px;
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
`
