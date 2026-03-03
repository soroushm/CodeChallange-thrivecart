import './catalogue.css'
import { Suspense } from 'react'
import { ProductsList } from '../Product'
export function Catalogue() {
  return (
    <main className="catalogue-wrapper">
      <hgroup>
        <h1>Catalogue</h1>
        <p>Select widgets to add to your current sales order.</p>
      </hgroup>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsList />
      </Suspense>
    </main>
  )
}
