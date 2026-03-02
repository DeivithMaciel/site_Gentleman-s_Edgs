import { Haircut } from '../types'

import slickBack from '../../assets/images/haircuts/hair.1.png'
import sidePart from '../../assets/images/haircuts/hair.2.png'
import undercut from '../../assets/images/haircuts/hair.3.png'
import crewCut from '../../assets/images/haircuts/hair.4.png'

const haircuts: Haircut[] = [
  {
    id: '1',
    name: 'Slick Back',
    description:
      'A refined classic styled with volume and precision, perfect for a sharp and confident look.',
    price: 29.99,
    duration: '45 min',
    image: slickBack
  },
  {
    id: '2',
    name: 'Side Part',
    description:
      'Timeless gentleman style with clean lines and balanced proportions.',
    price: 27.99,
    duration: '40 min',
    image: sidePart
  },
  {
    id: '3',
    name: 'Undercut',
    description:
      'Bold contrast between sides and top, styled for a modern and edgy finish.',
    price: 31.48,
    duration: '50 min',
    image: undercut
  },
  {
    id: '4',
    name: 'Crew Cut',
    description:
      'Low-maintenance, clean and sharp. Ideal for a polished everyday look.',
    price: 21.99,
    duration: '30 min',
    image: crewCut
  }
]

export const getHaircuts = async (): Promise<Haircut[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(haircuts), 300)
  )
}
