import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  background-color: ${colors.darkBrown};
  color: ${colors.gray};
  padding: 16px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      height: 128px;
      width: 128px;
      border-radius: 50%;
    }

    p {
      font-size: 24px;
    }
  }

    span {
    padding-left: 24px;
    font-size: 18px;
  }
`
