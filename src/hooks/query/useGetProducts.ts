import { useSuspenseQuery } from '@tanstack/react-query'
import { api } from '../../config'
import type { Product } from '../../components/Product/types.ts'

interface Data {
  products: Product[]
  currency: string
}

export const useGetProducts = () =>
  useSuspenseQuery<Data>({
    queryKey: ['products'],
    queryFn: () => fetch(`${api.baseURL}/api/${api.version}/products`).then((res) => res.json()),
  })
