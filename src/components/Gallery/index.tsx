import * as S from './styles'

import image1 from '../../assets/images/image.gallery.1.png'
import image2 from '../../assets/images/image.gallery.2.png'
import image3 from '../../assets/images/image.gallery.3.png'
import image4 from '../../assets/images/image.gallery.4.png'

export const Gallery = () => (
  <S.Container>
    <S.List className='container'>
      <li><img src={image1}/></li>
      <li><img src={image2}/></li>
      <li><img src={image3}/></li>
      <li><img src={image4}/></li>
    </S.List>
  </S.Container>
)
