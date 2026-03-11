import { Container } from "./styles"

import loading from '../../assets/gifs/BarbersPole.gif'

export const Loader = () => {
  return (
    <Container>
      <img src={loading}/>
    </Container>
  )
}
