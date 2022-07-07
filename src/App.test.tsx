import { render, screen } from '@testing-library/react'

import App from './App'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/dom'

test('Show App Component', () => {
    render(<App />)
    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
})

test('Working Counter', () => {
    const { getByText } = render(<App />)

    expect(getByText('count is: 0')).toBeInTheDocument()

    const button = getByText(/count is: \d/)

    act(() => userEvent.click(button))
    expect(getByText('count is: 1')).toBeInTheDocument()

    act(() => userEvent.click(button))
    expect(getByText('count is: 2')).toBeInTheDocument()

    act(() => userEvent.click(button))
    expect(getByText('count is: 3')).toBeInTheDocument()
})

test('working msw', async () => {
    render(<App />)
    await waitFor(() => {
        expect(screen.getByText('Axios')).toBeInTheDocument()
        expect(screen.getByText('MSW')).toBeInTheDocument()
        expect(screen.getByText('UnoCSS')).toBeInTheDocument()
    })
})
