import { render } from '@testing-library/react'
import App from './App'
import { describe, it } from 'vitest'
import { queryWrapper as wrapper } from './utils/test/query'

describe('First Test', () => {
  it('renders without crashing', () => {
    render(<App />, { wrapper })
  })
})
