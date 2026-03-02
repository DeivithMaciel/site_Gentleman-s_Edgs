import styled from "styled-components";

export const FloatButton = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;

  width: 60px;
  height: 60px;

  background-color: #25d366;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  transition: 0.3s ease;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
  }
`
