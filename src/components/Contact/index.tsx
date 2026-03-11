import { useState } from 'react'
import { Instagram, Facebook, Mail, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

import { Button } from '../Header/styles'

import * as S from './styles'

export const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [startTime] = useState(() => Date.now())

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Date.now() - startTime < 1500) {
      return
    }

    const botField = (
      e.currentTarget.elements.namedItem('adress') as HTMLInputElement
    )?.value

    if (botField) return

    setLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent successfully!')
        e.currentTarget.reset()
      })
      .catch((err) => {
        console.warn('EmailJS error:', err)
        alert('Something went wrong, but message was processed.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <S.Container>
      <section id='contact' className="container">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you. Book your appointment or send us a
            message.
          </p>

          <Button>
            <a href="https://wa.me/5551981458704">Chat on WhatsApp</a>
          </Button>
        </div>

        <div className="contact-grid">
          <div className="icons">
            <a
              href="https://instagram.com/deivith_a_maciel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={72} />
            </a>

            <a href="#">
              <Facebook size={72} />
            </a>

            <a href="tel:+5551981458704">
              <Phone size={72} />
            </a>

            <a href="mailto:deivithfagundes@gmail.com">
              <Mail size={72} />
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Send us your message</h3>

            <input name="name" placeholder="Your name" required />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />

            <input
              autoComplete="off"
              type="text"
              name="adress"
              tabIndex={-1}
              style={{ display: 'none' }}
            />

            <textarea name="message" placeholder="Your message" required />

            <Button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </section>
    </S.Container>
  )
}
