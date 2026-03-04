import { create } from 'zustand'
import type { Product } from '../types.ts'

type QTY = number
type ProductId = Product['id']
type SKU = Product['SKU']

interface Item {
  productId: ProductId
  quantity: QTY
  SKU: SKU
}

interface BasketStore {
  items: Item[]
  add: (product: { id: ProductId; SKU: SKU }, quantity?: QTY) => void
  remove: (SKU: SKU) => void
  increaseQTY: (SKU: SKU, quantity?: QTY) => void
  decreaseQTY: (SKU: SKU, quantity?: QTY) => void
  clear: () => void
}

export const useBasketStore = create<BasketStore>((set) => ({
  items: [],
  add: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((item) => item.SKU === product.SKU)

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.SKU === product.SKU ? { ...i, quantity: i.quantity + quantity } : i,
          ),
        }
      }

      return { items: [...state.items, { SKU: product.SKU, productId: product.id, quantity }] }
    })
  },
  remove: (SKU) => {
    set((state) => ({
      items: state.items.filter((item) => item.SKU !== SKU),
    }))
  },
  increaseQTY: (SKU, quantity = 1) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.SKU === SKU ? { ...item, quantity: item.quantity + quantity } : item,
      ),
    }))
  },
  decreaseQTY: (SKU, quantity = 1) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.SKU === SKU ? { ...item, quantity: item.quantity - quantity } : item))
        .filter(({ quantity }) => quantity > 0),
    })),
  clear: () => set({ items: [] }),
}))
