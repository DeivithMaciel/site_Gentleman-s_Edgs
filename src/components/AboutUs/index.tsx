import * as S from './styles'
import { Button } from '../Header/styles'

import image from '../../assets/images/image.aboutUs.png'


export const AboutUs = () => (
  <S.Container id='about-us'>
    <S.Content className='container'>
      <img src={image}/>
      <div>
        <h3>Who are we?</h3>
        <p>
          At Gentleman’s Edge, grooming is treated as a craft. Inspired by
          classic British barbering traditions, we provide precision cuts,
          refined beard care, and a welcoming atmosphere where detail and
          quality come first. Every visit is designed to leave you looking sharp
          and feeling confident.
        </p>
        <Button><a href="#">Book Your Visit</a></Button>
      </div>
    </S.Content >
  </S.Container>
)
