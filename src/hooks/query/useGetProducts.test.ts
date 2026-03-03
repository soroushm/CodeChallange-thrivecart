import { describe, expect, it } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetProducts } from './useGetProducts'
import { queryWrapperWithSuspense as wrapper } from '../../utils/test/query'

describe('useGetProducts', () => {
  it('fetches products correctly from MSW', async () => {
    const { result } = renderHook(() => useGetProducts(), { wrapper })

    await waitFor(
      () => {
        console.log(new Date().toISOString(), 'result', result)
        expect(result.current?.data?.products).toBeDefined()
      },
      { timeout: 1100 },
    )

    await waitFor(() => {
      expect(result.current.data).toBeDefined()
      expect(result.current.data.products.length).toBeGreaterThan(0)
    })

    const firstProduct = result.current.data.products[0]
    expect(firstProduct).toHaveProperty('id')
    expect(firstProduct).toHaveProperty('name')
    expect(firstProduct).toHaveProperty('price')
  })
})
