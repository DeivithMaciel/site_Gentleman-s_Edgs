import { Container } from './styles'

import logo from '../../assets/images/logo2.png'

export const Footer = () => (
  <Container>
    <section className='container'>
      <img src={logo} alt="Gentleman's edge" />
      <p>Classic cuts. Modern presence.</p>
    </section>
    <span>&copy;{new Date().getFullYear()} Gentleman's Edge. All right reserved.</span>
  </Container>
)
