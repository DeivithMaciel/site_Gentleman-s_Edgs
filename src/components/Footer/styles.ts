import styled from "styled-components";
import { breakpoints, colors } from "../../styles/GlobalStyles";

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
      margin-bottom: 8px;

      @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 16px;
      }
    }

    span {
      padding: 0;
      font-size: 12px;

      @media (max-width: ${breakpoints.tablet}) {
        padding: 6px;
      }
    }
  }

    span {
    padding-left: 24px;
    font-size: 18px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }
`
