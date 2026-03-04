export interface Product {
  id: string
  SKU: string
  name: string
  description: string
  price: number
  active: boolean
  category: string
  availableQTY: number
  img: string
}
export type Products = Product[]

export interface Condition {
  code: string
  target: string
  operation: string
  value: number
  cost: number
}

export interface DeliveryMethod {
  id: string
  name: string
  code: number
  conditions: Condition[]
}
export type DeliveryMethods = DeliveryMethod[]

export interface Campaign {
  id: string
  code: string
  name: string
  description: string
  applyTo: string
  target: string
  operation: string
  type: string
  value: number
}
export type Campaigns = Campaign[]
