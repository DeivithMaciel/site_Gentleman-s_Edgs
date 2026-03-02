import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.lightBrown};
  width: 100%;
  padding: 16px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  li {
    list-style: none;

    img {
      height: 180px;
      border-radius: 8px;

      &:hover {
        transform: translateY(-4px);
      }
    }
  }
`
