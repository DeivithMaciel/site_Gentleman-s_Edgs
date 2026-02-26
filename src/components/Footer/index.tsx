import { Container } from './styles'

import logo from '../../assets/images/logo2.png'

export const Footer = () => (
  <Container>
    <section className='container'>
      <img src={logo} alt="Gentleman's edge" />
      <p>Classic cuts. Modern presence.</p>
      <span>London, UK – SW1A 1AA</span>
      <span>United Kingdom</span>
    </section>
    <span>&copy;{new Date().getFullYear()} Gentleman's Edge. All right reserved.</span>
  </Container>
)
