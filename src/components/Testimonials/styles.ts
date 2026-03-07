import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.darkBrown};
  color: ${colors.gray};
  padding: 128px 0;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 40px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 64px;
    opacity: 0.8;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  ul {
    display: flex;
    gap: 32px;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.lightBrown};
    height: 340px;
    width: 240px;
    padding: 40px 32px;
    list-style: none;
    border-radius: 8px;
    position: relative;

    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-6px);
    }
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
  }

  .stars {
    color: #c6a969;
    margin-bottom: 16px;
    font-size: 18px;
  }

  .name {
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-weight: bold;
    font-size: 16px;
  }
`
