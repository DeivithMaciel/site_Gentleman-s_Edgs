import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.lightBrown};
  width: 100%;
  padding: 16px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  li {
    list-style: none;
    display: flex;
    justify-content: center;

    img {
      height: 180px;
      border-radius: 8px;

      &:hover {
        transform: translateY(-4px);
      }
    }
  }

  @media (max-width:${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`
