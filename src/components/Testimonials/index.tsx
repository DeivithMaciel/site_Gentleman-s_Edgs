import { useEffect, useState } from 'react'

import { Client } from '../../services/types'
import { getClients } from '../../services/testimonials/api'

import * as S from './styles'

export const Testimonials = () => {
  const [items, setItems] = useState<Client[]>([])

  useEffect(() => {
    const load = async () => {
      const data = await getClients()
      setItems(data)
    }
    load()
  }, [])

  return (
    <S.Container>
      <S.Section className="container">
        <h2>What Our Clients Say</h2>
        <h5>Trusted by gentlemen who value precision and style.</h5>
        <ul>
          {items.map((client) => (
            <li key={client.id}>
            <img src={client.image} />
            <span className="stars">★★★★★</span>
            <p>"{client.description}"</p>
            <span className="name">- {client.name}</span>
          </li>
          ))}
        </ul>
      </S.Section>
    </S.Container>
  )
}
