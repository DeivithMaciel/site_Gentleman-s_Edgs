import * as S from './styles'
import { Button } from '../Header/styles'

import image from '../../assets/images/image.hero.png'

export const Hero = () => (
  <S.Container>
    <S.Content  className='container'>
      <div>
      <h1>Gentleman's Edge</h1>
      <p>Classic Cuts, Refined Beard Grooming. Crafted with precision, tradition, and attention to every detail — because every gentleman deserves his edge.</p>
    <div>
      <Button><a href="#">Haircuts</a></Button>
      <Button><a href="#">Book now</a></Button>
    </div>
    </div>
    <img src={image}/>
    </S.Content>
  </S.Container>
)
