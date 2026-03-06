import { useEffect, useState } from "react"
import { Button } from "../Header/styles"
import { Haircut } from "../../services/types"
import { getHaircuts } from "../../services/haircuts/api"

import * as S from './styles'

export const Haircuts = () => {
  const [current, setCurrent] = useState(0)
  const [items, setItems] = useState<Haircut[]>([])

  useEffect(() => {
    const load = async () => {
      const data = await getHaircuts()
      setItems(data)
    }

    load()
  }, [])
  useEffect(() => {
    if (items.length === 0) return

    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === items.length - 1 ? 0 : prev + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <S.Container>
      <section className="container">
        <S.Title>Our Haircuts</S.Title>
        <S.Carousel>
          <S.Slides style={{ transform: `translateX(-${current * 100}%)` }}>
            {items.map((cut) => (
              <S.Slide key={cut.id}>
                <img src={cut.image} alt={cut.name} />
                <div className="info">
                  <h3>{cut.name}</h3>
                  <p>{cut.description}</p>
                  <div className="meta">
                    <span>
                      {cut.price.toLocaleString('en-GB', {
                        style: 'currency',
                        currency: 'GBP'
                      })}
                    </span>
                    <span>{cut.duration}</span>
                  </div>
                  <Button>Book now</Button>
                </div>
              </S.Slide>
            ))}
          </S.Slides>
        </S.Carousel>
        <S.Dots>
          {items.map((_, index) => (
            <S.Dot key={index} $active={index === current} onClick={() => setCurrent(index)} />
          ))}
        </S.Dots>
      </section>
    </S.Container>
  )
}
