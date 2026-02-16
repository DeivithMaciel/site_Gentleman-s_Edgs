import * as S from './styles'
import { Button } from '../Header/styles'

import image from '../../assets/images/image.hero.png'

export const Hero = () => (
  <S.Container>
    <S.Content  className='container'>
      <div>
      <h2>Classic Cuts, Refined Beard Grooming & More</h2>
      <p>Crafted with precision, tradition, and attention to every detail — because every gentleman deserves his edge.</p>
    <Button><a href="#">Haircuts</a></Button>
    <Button><a href="#">Book now</a></Button>
    </div>
    <img src={image}/>
    </S.Content>
  </S.Container>
)
