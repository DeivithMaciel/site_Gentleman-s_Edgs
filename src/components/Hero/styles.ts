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
    }

    p {
      font-size: 32px;
    }

    button {
    padding: 24px;
      margin-right: 48px;
    }
  }

  img {
    height: 620px;
  }
`
