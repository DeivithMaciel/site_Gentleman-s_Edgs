export type ProductCategory =
  | 'pomades'
  | 'beard'
  | 'tools'

export interface Product {
  id: string
  name: string
  image: string
  category: ProductCategory
}
