import { useSuspenseQuery } from '@tanstack/react-query'
import { api } from '../../config'
import type { Product } from '../../components/Product/types.ts'
import type { CurrencyCode } from '../../utils/formatPriceFromCents.ts'

interface Data {
  products: Product[]
  currency: CurrencyCode
}

export const useGetProducts = () =>
  useSuspenseQuery<Data>({
    queryKey: ['products'],
    queryFn: () => fetch(`${api.baseURL}/api/${api.version}/products`).then((res) => res.json()),
  })
