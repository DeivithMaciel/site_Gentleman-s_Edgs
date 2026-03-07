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
    font-size: 48px;
    margin-bottom: 16px;
    font-weight: bold;
  }

  h5 {
    font-size: 16px;
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
    gap: 64px;
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
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);

    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
    border: 3px solid ${colors.gray};
  }

  .stars {
    color: #c6a969;
    margin-bottom: 16px;
    font-size: 18px;
    letter-spacing: 3px;
  }

  .name {
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-weight: 600;
    font-size: 16px;
  }
`
