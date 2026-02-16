import * as S from './styles'

import logo  from '../../assets/images/logo.png'

export const Header = () => {
  return (
    <S.Container>
      <section className='container'>
        <h1><img src={logo} alt="Gentleman's Edge"/></h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Haircuts</a></li>
      </ul>
      <S.Button><a href="#">Chat on WhatsApp</a></S.Button>
      </section>
    </S.Container>
  )
}
