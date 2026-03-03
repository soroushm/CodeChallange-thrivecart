import './product.css'
import { useMemo } from 'react'
import type { Product } from './types'
import Offer from '../../assets/offer-icon.svg'
import { type CurrencyCode, formatPriceFromCents } from '../../utils/formatPriceFromCents.ts'

interface ProductProps {
  product: Product
  productCurrency: CurrencyCode
}

export function ProductCard({ product, productCurrency }: ProductProps) {
  const price = useMemo(
    () => formatPriceFromCents(product.price, productCurrency),
    [product.price, productCurrency],
  )
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

        <div className="price">{price}</div>
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
