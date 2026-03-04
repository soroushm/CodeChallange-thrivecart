import { useQuery } from '@tanstack/react-query'
import { api } from '../../config'
import type { DeliveryMethods } from '../../types.ts'

export const useGetDeliveryMethods = () =>
  useQuery<DeliveryMethods>({
    queryKey: ['deliveryMethods'],
    queryFn: () =>
      fetch(`${api.baseURL}/api/${api.version}/deliveryMethods`).then((res) => res.json()),
  })
