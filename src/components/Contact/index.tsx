import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Button } from '../Header/styles'
import * as S from './styles'

export const Contact = () => {
  return (
    <S.Container>
      <section className="container">
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you. Book your appointment or send us a
          message.
        </p>
        <Button>
          <a href="https://wa.me/5551981458704">Chat on WhatsApp</a>
        </Button>
        <div className="icons">
          <a
            href="https://instagram.com/deivith_a_maciel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={56} />
          </a>
          <a href="">
            <Facebook size={56} />
          </a>
          <a href="tel:+5551981458704">
            <Phone size={56} />
          </a>
          <a href="mailto:deivithfagundes@gmail.com?subject=Booking&body=Hello, I would like to book an appointment.">
            <Mail size={56} />
          </a>
        </div>
      </section>
    </S.Container>
  )
}
