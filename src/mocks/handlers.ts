import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/user', () =>
    HttpResponse.json(
      {
        id: 1,
        name: 'masoud',
      },
      { status: 200 },
    ),
  ),
]
