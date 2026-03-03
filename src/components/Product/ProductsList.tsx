import { ProductCard } from './ProductCard.tsx'
import { useGetProducts } from '../../hooks/query/useGetProducts.ts'
export function ProductsList() {
  const { data } = useGetProducts()

  return (
    <div className="products-wrapper">
      {data?.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
