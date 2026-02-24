import { Product } from './types'

import pomade1 from '../../assets/images/products/pomade.1.png'
import pomade2 from '../../assets/images/products/pomade.2.png'
import pomade3 from '../../assets/images/products/pomade.3.png'

import beard1 from '../../assets/images/products/beard.1.png'
import beard2 from '../../assets/images/products/beard.2.png'
import beard3 from '../../assets/images/products/beard.3.png'

import tool1 from '../../assets/images/products/tools.1.png'
import tool2 from '../../assets/images/products/tools.2.png'
import tool3 from '../../assets/images/products/tools.3.png'


const products: Product[] = [
  { id: '1', name: 'The Rugged Bros', image: pomade1, category: 'pomades' },
  { id: '2', name: "Maestros's Classic", image: pomade2, category: 'pomades' },
  { id: '3', name: "L'Oréal Paris", image: pomade3, category: 'pomades' },

  { id: '4', name: 'Melanin Kings', image: beard1, category: 'beard' },
  { id: '5', name: 'The Man Company', image: beard2, category: 'beard' },
  { id: '6', name: 'Mountaineer Brand', image: beard3, category: 'beard' },

  { id: '7', name: "Kit Valentine's Day Grooming", image: tool1, category: 'tools' },
  { id: '8', name: 'Beard Shaping Tool', image: tool2, category: 'tools' },
  { id: '9', name: "Royal's Beard Kit", image: tool3, category: 'tools' }
]

export const getProducts = async () => {
  return new Promise<Product[]>((resolve) =>
    setTimeout(() => resolve(products), 300)
  )
}


export const getProductsByCategory = async (category: string) => {
  const data = products.filter(p => p.category === category)
  return Promise.resolve(data)
}
