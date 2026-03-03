import { http, HttpResponse, delay } from 'msw'
import { campaigns, products, deliveryMethods } from './fixtures'

export const handlers = [
  http.get('/api/:version/products', async ({ params }) => {
    const { version } = params
    await delay(1000)
    if (version === 'v1') {
      return HttpResponse.json({
        currency: 'USD',
        products,
      })
    } else {
      return HttpResponse.json({ message: `API version ${version} not supported` }, { status: 404 })
    }
  }),
  http.get('/api/:version/campaigns', ({ params }) => {
    const { version } = params
    if (version === 'v1') {
      return HttpResponse.json(campaigns)
    } else {
      return HttpResponse.json({ message: `API version ${version} not supported` }, { status: 404 })
    }
  }),
  http.get('/api/:version/deliveryMethods', ({ params }) => {
    const { version } = params
    if (version === 'v1') {
      return HttpResponse.json(deliveryMethods)
    } else {
      return HttpResponse.json({ message: `API version ${version} not supported` }, { status: 404 })
    }
  }),
]
