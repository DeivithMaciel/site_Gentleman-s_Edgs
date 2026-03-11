import * as S from './styles'

import logo from '../../assets/images/logo2.png'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setShowHeader(true)
        lastScrollY.current = currentScrollY
        return
      }

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <S.Container className={`${showHeader ? 'show' : 'hide'}`}>
      <section className="container">
        <h1>
          <img src={logo} alt="Gentleman's Edge" />
        </h1>
        <ul>
          <li>
            <a href="#haircuts">Haircuts</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#visit-us">Visit Us</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <S.Button>
          <a href="https://wa.me/5551981458704" target="_blank">
            Chat on WhatsApp
          </a>
        </S.Button>
      </section>
    </S.Container>
  )
}
