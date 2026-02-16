import styled from "styled-components";

import { colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  width: 100%;
`

export const Content = styled.section`
  display: flex;

  div {
    flex-direction: column;

    h2 {
      font-size: 48px;
      text-align: center;
      font-weight: 900;
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
