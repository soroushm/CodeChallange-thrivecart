import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import { describe, it, expect } from 'vitest'

describe('Theme Header', () => {
  it('render Header correctly', () => {
    render(<Header />)
    expect(screen.getByText('Acme Widget Co')).toBeInTheDocument()
  })
})
