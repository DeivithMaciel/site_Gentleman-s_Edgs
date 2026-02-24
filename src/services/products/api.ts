import { Product } from './types'

import pomade1 from '../../assets/images/products/pomade.1.png'
import pomade2 from '../../assets/images/products/pomade.2.png'
import pomade3 from '../../assets/images/products/pomade.3.png'
import pomade4 from '../../assets/images/products/pomade.4.png'
import pomade5 from '../../assets/images/products/pomade.5.png'
import pomade6 from '../../assets/images/products/pomade.6.png'

import beard1 from '../../assets/images/products/beard.1.png'
import beard2 from '../../assets/images/products/beard.2.png'
import beard3 from '../../assets/images/products/beard.3.png'
import beard4 from '../../assets/images/products/beard.4.png'
import beard5 from '../../assets/images/products/beard.5.png'
import beard6 from '../../assets/images/products/beard.6.png'

import tool1 from '../../assets/images/products/tools.1.png'
import tool2 from '../../assets/images/products/tools.2.png'
import tool3 from '../../assets/images/products/tools.3.png'
import tool4 from '../../assets/images/products/tools.4.png'
import tool5 from '../../assets/images/products/tools.5.png'
import tool6 from '../../assets/images/products/tools.6.png'


const products: Product[] = [
  { id: '1', name: 'The Rugged Bros', image: pomade1, category: 'pomades' },
  { id: '2', name: "Maestros's Classic", image: pomade2, category: 'pomades' },
  { id: '3', name: "L'Oréal Paris", image: pomade3, category: 'pomades' },
  { id: '4', name: 'The Man Company(hair)', image: pomade4, category: 'pomades' },
  { id: '5', name: 'American Crew', image: pomade5, category: 'pomades' },
  { id: '6', name: 'Don Ruan', image: pomade6, category: 'pomades' },

  { id: '7', name: 'Melanin Kings', image: beard1, category: 'beard' },
  { id: '8', name: 'The Man Company(beard)', image: beard2, category: 'beard' },
  { id: '9', name: 'Mountaineer Brand', image: beard3, category: 'beard' },
  { id: '10', name: "Woody's", image: beard4, category: 'beard' },
  { id: '11', name: 'Blackwood', image: beard5, category: 'beard' },
  { id: '12', name: 'Particle', image: beard6, category: 'beard' },

  { id: '13', name: "Kit Valentine's Day Grooming", image: tool1, category: 'tools' },
  { id: '14', name: 'Beard Shaping Tool', image: tool2, category: 'tools' },
  { id: '15', name: "Royal's Beard Kit", image: tool3, category: 'tools' },
  { id: '16', name: "Men Beard Straightening Iron", image: tool4, category: 'tools' },
  { id: '17', name: 'Cut Throat Razors', image: tool5, category: 'tools' },
  { id: '18', name: "Elamei's Beard Care", image: tool6, category: 'tools' }
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
