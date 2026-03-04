import { describe, expect, it } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { queryWrapperWithSuspense as wrapper } from '../../utils/test/query'
import { deliveryMethods } from '../../mocks/fixtures.ts'
import { useGetDeliveryMethods } from './useGetDeliveryMethods.ts'

describe('useGetDeliveryMethods', () => {
  it('fetch delivery method correctly from MSW', async () => {
    const { result } = renderHook(() => useGetDeliveryMethods(), { wrapper })

    await waitFor(() => {
      expect(result.current?.data).toBeDefined()
      expect(result.current?.data?.length).toBeGreaterThan(0)
    })

    expect(result.current.data).toEqual(deliveryMethods)
  })
})
