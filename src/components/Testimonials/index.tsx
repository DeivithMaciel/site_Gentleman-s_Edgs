import image from '../../assets/images/haircuts/hair.1.png'

import * as S from './styles'

export const Testimonials = () => {
  return (
    <S.Container>
      <S.Section className='container'>
        <h2>What Our Clients Say</h2>
        <p>Trusted by gentlemen who value precision and style.</p>
        <ul>
          <li>
            <img src={image} />
            <span className='stars'>★★★★★</span>
            <p>
              Fantastic service and a perfect fade. The attention to detail is
              impressive.
            </p>
            <span className='name'>- William Walter</span>
          </li>
                    <li>
            <img src={image} />
            <span className='stars'>★★★★★</span>
            <p>
              Fantastic service and a perfect fade. The attention to detail is
              impressive.
            </p>
            <span className='name'>- William Walter</span>
          </li>
                    <li>
            <img src={image} />
            <span className='stars'>★★★★★</span>
            <p>
              Fantastic service and a perfect fade. The attention to detail is
              impressive.
            </p>
            <span className='name'>- William Walter</span>
          </li>
        </ul>
      </S.Section>
    </S.Container>
  )
}
