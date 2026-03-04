import { describe, expect, it } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { queryWrapperWithSuspense as wrapper } from '../../utils/test/query'
import { useGetCampaigns } from './useGetCampaigns.ts'
import { campaigns } from '../../mocks/fixtures.ts'

describe('useGetCampaigns', () => {
  it('fetch campaigns correctly from MSW', async () => {
    const { result } = renderHook(() => useGetCampaigns(), { wrapper })

    await waitFor(() => {
      expect(result.current?.data).toBeDefined()
      expect(result.current?.data?.length).toBeGreaterThan(0)
    })

    expect(result.current.data).toEqual(campaigns)
  })
})
