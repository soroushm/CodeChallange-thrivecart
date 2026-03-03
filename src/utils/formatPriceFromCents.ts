export type CurrencyCode = 'USD' | 'EUR'
export type Locales = 'en-US' | 'de-DE'

export const formatPriceFromCents = (
  number: number,
  currency: CurrencyCode,
  locales: Locales = 'en-US',
): string => {
  return new Intl.NumberFormat(locales, { style: 'currency', currency }).format(number / 100)
}
