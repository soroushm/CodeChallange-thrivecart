import { beforeEach, describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useBasketStore } from './useBasketStore.ts'
import { products } from '../mocks/fixtures'
import { act } from 'react'

describe('useBasket store', () => {
  beforeEach(() => {
    useBasketStore.getState().clear()
  })
  it('Update state after add from other places', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    useBasketStore.getState().add(products[0])
    rerender()
    expect(result.current.items.length).toBe(1)
  })
  it('Check store is empty after each test', async () => {
    const { result } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
  })
  it('Add multiple times same product', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    rerender()
    expect(result.current.items[0]).toEqual({
      quantity: 1,
      SKU: products[0].SKU,
      productId: products[0].id,
    })
    act(() => result.current.add(products[0]))
    rerender()
    expect(result.current.items[0].quantity).toBe(2)
  })
  it('Remove product', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    rerender()
    expect(result.current.items[0]).toEqual({
      quantity: 1,
      SKU: products[0].SKU,
      productId: products[0].id,
    })
    act(() => result.current.remove(products[0].id))
    rerender()
    expect(result.current.items.length).toBe(0)
  })
  it('Increase quantity', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    rerender()
    expect(result.current.items[0]).toEqual({
      quantity: 1,
      SKU: products[0].SKU,
      productId: products[0].id,
    })
    act(() => result.current.increaseQTY(products[0].id))
    rerender()
    expect(result.current.items[0].quantity).toBe(2)
  })

  it('Increase correct product', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    act(() => result.current.add(products[2]))
    rerender()
    expect(result.current.items.length).toBe(2)
    act(() => result.current.increaseQTY(products[0].id))
    rerender()
    expect(result.current.items.length).toBe(2)
    expect(result.current.items.find((item) => item.productId === products[0].id)).toEqual({
      quantity: 2,
      SKU: products[0].SKU,
      productId: products[0].id,
    })
  })

  it('Increase quantity by define how many ', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    rerender()
    expect(result.current.items[0]).toEqual({
      quantity: 1,
      SKU: products[0].SKU,
      productId: products[0].id,
    })
    act(() => result.current.increaseQTY(products[0].id, 1))
    rerender()
    expect(result.current.items[0].quantity).toBe(2)
    act(() => result.current.increaseQTY(products[0].id, 10))
    rerender()
    expect(result.current.items[0].quantity).toBe(12)
  })

  it('Decrease quantity', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    act(() => result.current.increaseQTY(products[0].id))
    rerender()
    expect(result.current.items[0].quantity).toBe(2)
    act(() => result.current.decreaseQTY(products[0].id))
    rerender()
    expect(result.current.items[0].quantity).toBe(1)
  })

  it('Decrease correct product', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    act(() => result.current.add(products[2]))
    act(() => result.current.increaseQTY(products[2].id, 10))
    rerender()
    expect(result.current.items.length).toBe(2)
    act(() => result.current.decreaseQTY(products[2].id))
    rerender()
    expect(result.current.items.length).toBe(2)
    expect(result.current.items.find((item) => item.productId === products[2].id)).toEqual({
      quantity: 10,
      SKU: products[2].SKU,
      productId: products[2].id,
    })
  })

  it('Decrease quantity to zero, must be remove from basket', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    rerender()
    expect(result.current.items[0]).toEqual({
      quantity: 1,
      productId: products[0].id,
      SKU: products[0].SKU,
    })

    act(() => result.current.decreaseQTY(products[0].id))
    rerender()
    expect(result.current.items.length).toBe(0)
  })

  it('Decrease quantity by define quantity ', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    act(() => result.current.increaseQTY(products[0].id, 10))
    rerender()
    expect(result.current.items[0].quantity).toBe(11)
    act(() => result.current.decreaseQTY(products[0].id, 10))
    rerender()
    expect(result.current.items[0].quantity).toBe(1)
  })

  it('Decrease quantity from product is not exsit', async () => {
    const { result, rerender } = renderHook(() => useBasketStore())
    expect(result.current.items.length).toBe(0)
    act(() => result.current.add(products[0]))
    rerender()
    act(() => result.current.decreaseQTY(products[2].id, 10))
    rerender()
    expect(result.current.items.length).toBe(1)
    expect(result.current.items[0].quantity).toBe(1)
  })
})
