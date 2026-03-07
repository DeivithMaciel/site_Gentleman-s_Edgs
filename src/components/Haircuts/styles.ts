import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: #111;
  color: #fff;
  padding: 128px 0;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 48px 0;
    }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  margin-bottom: 64px;
`

export const Carousel = styled.div`
  overflow: hidden;
  width: 100%;
`

export const Slides = styled.ul`
  display: flex;
  transition: transform 0.8s ease-in-out;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const Slide = styled.li`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  img {
    width: 480px;
    height: 580px;
    object-fit: cover;
    border-radius: 8px;
  }

  .info {
    max-width: 520px;
    text-align: left;
  }

  h3 {
    font-size: 40px;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    margin-bottom: 24px;
    opacity: 0.8;
    line-height: 1.6;
  }

  .meta {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;
    font-weight: bold;
    font-size: 18px;
  }

  button {
    padding: 16px 32px;
    background-color: #c6a969;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;

    &:hover {
      opacity: 0.85;
    }
  }

    @media (max-width: ${breakpoints.tablet})  {
      img {
        height: 360px;
        width: 360px;
      }
    }
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 12px;
`

export const Dot = styled.button<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? `${colors.darkBrown}` : `${colors.lightBrown}`};
  transition: 0.3s;

  &:hover {
    background-color: ${colors.darkBrown};
  }
`
