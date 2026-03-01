import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('First Test', () => {
    it('render Header correctly', () => {
        render(<App />)
        expect(screen.getByText('Vite + React')).toBeInTheDocument()
    })

    it('initial count check', () => {
        render(<App />)
        expect(screen.getByRole('button')).toHaveTextContent('count is 0')
    })

    it('increments count on clicked', () => {
        render(<App />)

        const button = screen.getByRole('button')

        fireEvent.click(button)
        expect(button).toHaveTextContent('count is 1')

        fireEvent.click(button)
        expect(button).toHaveTextContent('count is 2')
    })
})