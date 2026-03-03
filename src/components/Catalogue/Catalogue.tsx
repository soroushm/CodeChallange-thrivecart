import './catalogue.css'
import { products } from '../../mocks/fixtures'
import { ProductCard } from '../Product'
export function Catalogue() {
  return (
    <main className="catalogue-wrapper">
      <hgroup>
        <h1>Catalogue</h1>
        <p>Select widgets to add to your current sales order.</p>
      </hgroup>
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
