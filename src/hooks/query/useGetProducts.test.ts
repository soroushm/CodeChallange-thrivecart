import { describe, expect, it } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetProducts } from './useGetProducts'
import { queryWrapperWithSuspense as wrapper } from '../../utils/test/query'
import { products } from '../../mocks/fixtures.ts'

describe('useGetProducts', () => {
  it('fetches products correctly from MSW', async () => {
    const { result } = renderHook(() => useGetProducts(), { wrapper })

    await waitFor(
      () => {
        expect(result.current?.data).toBeDefined()
        expect(result.current?.data?.products.length).toBeGreaterThan(0)
      },
      { timeout: 1100 },
    )

    expect(result.current.data.products).toEqual(products)
  })
})
