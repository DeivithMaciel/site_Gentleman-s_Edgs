import { Product } from '../types'

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
  { id: '1', name: 'The Rugged Bros', image: pomade1, category: 'pomades', price: 14.99 },
  { id: '2', name: "Maestros's Classic", image: pomade2, category: 'pomades', price: 16.99 },
  { id: '3', name: "L'Oréal Paris", image: pomade3, category: 'pomades', price: 12.99 },
  { id: '4', name: 'The Man Company(hair)', image: pomade4, category: 'pomades', price: 18.99 },
  { id: '5', name: 'American Crew', image: pomade5, category: 'pomades', price: 21.99 },
  { id: '6', name: 'Don Ruan', image: pomade6, category: 'pomades', price: 10.99 },

  { id: '7', name: 'Melanin Kings', image: beard1, category: 'beard', price: 17.99 },
  { id: '8', name: 'The Man Company(beard)', image: beard2, category: 'beard', price: 19.99 },
  { id: '9', name: 'Mountaineer Brand', image: beard3, category: 'beard', price: 24.99 },
  { id: '10', name: "Woody's", image: beard4, category: 'beard', price: 22.99 },
  { id: '11', name: 'Blackwood', image: beard5, category: 'beard', price: 15.99 },
  { id: '12', name: 'Particle', image: beard6, category: 'beard', price: 27.99 },

  { id: '13', name: "Kit Valentine's Day Grooming", image: tool1, category: 'tools', price: 79.99 },
  { id: '14', name: 'Beard Shaping Tool', image: tool2, category: 'tools', price: 12.99 },
  { id: '15', name: "Royal's Beard Kit", image: tool3, category: 'tools', price: 64.99 },
  { id: '16', name: "Men Beard Straightening Iron", image: tool4, category: 'tools', price: 119.99 },
  { id: '17', name: 'Cut Throat Razors', image: tool5, category: 'tools', price: 49.99 },
  { id: '18', name: "Elamei's Beard Care", image: tool6, category: 'tools', price: 29.99 }
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
