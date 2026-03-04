import { describe, it, expect } from 'vitest'
import { formatPriceFromCents } from './formatPriceFromCents'

describe('formatPriceFromCents', () => {
  it('formats and convert sent to USD correctly', () => {
    const result = formatPriceFromCents(12345, 'USD')
    expect(result).toBe('$123.45')
  })

  it('formats EUR correctly in de-DE', () => {
    const result = formatPriceFromCents(12345, 'EUR', 'de-DE')
    expect(result).toBe('123,45 €')
  })

  it('zero value', () => {
    const result = formatPriceFromCents(0, 'USD', 'en-US')
    expect(result).toBe('$0.00')
  })

  it('negative values', () => {
    const result = formatPriceFromCents(-12345, 'USD', 'en-US')
    expect(result).toBe('-$123.45')
  })
})
