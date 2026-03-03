import { render } from '@testing-library/react'
import App from './App'
import { describe, it } from 'vitest'

describe('First Test', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
