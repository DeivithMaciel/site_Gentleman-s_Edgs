import { Clock4, MapPin } from 'lucide-react'

import * as S from './styles'

import { Button } from '../Header/styles'
import image from '../../assets/images/image.visit.png'

export const VisitUs = () => {
  return (
    <S.Container>
      <h2>Visit Us</h2>
      <section id='visit-us' className="container">
        <img src={image} alt="Gentleman's Edge" />
        <ul>
          <h3><MapPin size={36}/>Adress</h3>
          <li>221B Baker Street - Marylebone</li>
          <li>London NW1 6XE - United Kingdom</li>
          <h3><Clock4 size={36}/> Opening Hours</h3>
          <li>
            Monday - Friday <br />
            9:00 AM – 7:00 PM
          </li>
          <li>
            Saturday <br />
            9:00 AM – 5:00 PM
          </li>
          <li>
            Sunday <br />
            Closed
          </li>
        </ul>
      </section>
      <Button>
        <a
          href="https://www.google.com/maps/search/?api=1&query=221B+Baker+Street+London+NW1+6XE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </Button>
        <Button>
          <a href="https://wa.me/5551981458704">
        Book now
        </a>
        </Button>
    </S.Container>
  )
}
