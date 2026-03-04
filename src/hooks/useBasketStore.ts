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
  remove: (productId: ProductId) => void
  increaseQTY: (productId: ProductId, quantity?: QTY) => void
  decreaseQTY: (productId: ProductId, quantity?: QTY) => void
  clear: () => void
}

export const useBasketStore = create<BasketStore>((set) => ({
  items: [],
  add: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((item) => item.productId === product.id)

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === product.id ? { ...i, quantity: i.quantity + quantity } : i,
          ),
        }
      }

      return { items: [...state.items, { SKU: product.SKU, productId: product.id, quantity }] }
    })
  },
  remove: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }))
  },
  increaseQTY: (productId, quantity = 1) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
      ),
    }))
  },
  decreaseQTY: (productId, quantity = 1) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity - quantity } : item,
        )
        .filter(({ quantity }) => quantity > 0),
    })),
  clear: () => set({ items: [] }),
}))
