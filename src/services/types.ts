export type ProductCategory =
  | 'pomades'
  | 'beard'
  | 'tools'

export interface Product {
  id: string
  name: string
  image: string
  category: ProductCategory
  price: number
}

export interface Haircut {
  id: string
  name: string
  description: string
  price: number
  duration: string
  image: string
}

export interface Client {
  id: string
  name: string
  description: string
  image: string
}
