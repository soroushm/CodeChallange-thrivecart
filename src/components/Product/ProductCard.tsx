import './product.css'
import type { Product } from './types'
import Offer from '../../assets/offer-icon.svg'

interface ProductProps {
  product: Product
}

export function ProductCard({ product }: ProductProps) {
  return (
    <article className="product card">
      <div className="product-info">
        <img
          loading="lazy"
          src={product?.img}
          alt={product.name}
          decoding="async"
          className="product-image"
        />
        <h2 className="title">{product.name}</h2>
        <span className="sku">{product.SKU}</span>

        <div className="price">{product.price}</div>
        {product.SKU === 'R01' && (
          <span className="campaigns">
            <img src={Offer} alt="campaigns" /> buy one get one free{' '}
          </span>
        )}
      </div>
      <button>Add to cart</button>
    </article>
  )
}
