import { useEffect, useState } from 'react'

import * as S from './styles'

import { Product, ProductCategory } from '../../services/types'
import { getProductsByCategory } from '../../services/products/api'

export const Products = () => {
  const [activeList, setActiveList] = useState<ProductCategory>('pomades')
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    getProductsByCategory(activeList).then(setItems)
  }, [activeList])

  return (
    <S.Container id="products">
      <h2>Our Products</h2>
      <section className="container">
        <S.ButtonList>
          <a
            className={activeList === 'pomades' ? 'active' : ''}
            onClick={() => setActiveList('pomades')}
          >
            Pomades
          </a>
          <a
            className={activeList === 'beard' ? 'active' : ''}
            onClick={() => setActiveList('beard')}
          >
            Beard Care
          </a>
          <a
            className={activeList === 'tools' ? 'active' : ''}
            onClick={() => setActiveList('tools')}
          >
            Tools
          </a>
        </S.ButtonList>
        <S.List>
          {items.map((product) => (
            <S.ItemList key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <span>
                {product.price.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP'
                })}
              </span>
            </S.ItemList>
          ))}
        </S.List>
        <h4>& more</h4>
      </section>
    </S.Container>
  )
}
