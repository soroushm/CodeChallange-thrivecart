import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll, vi } from 'vitest'
import { server } from './mocks/server'
import { queryClientForTest } from './utils/test/query'

beforeAll(() => {
  server.listen()
  vi.clearAllMocks()
  vi.resetModules()
  queryClientForTest.clear()
})
afterEach(() => server.resetHandlers())
afterAll(() => {
  server.close()
  vi.restoreAllMocks()
})
