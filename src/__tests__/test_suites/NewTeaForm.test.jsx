import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewTeaForm from '../../components/NewTeaForm'
import { vi } from 'vitest'
import App from '../../App'

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { id: 1, name: 'Green Tea' },
        { id: 2, name: 'Black Tea' },
      ]),
    })
  ))
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('The test will ensure', () => {
  test('render new tea form', () => {
    render(<NewTeaForm onAddTea={() => { }} />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add tea/i })).toBeInTheDocument()
  })

  test('the form can be filled out and form can be submitted', async () => {
    render(<NewTeaForm onAddTea={() => { }} />)

    const user = userEvent.setup()
    render(<App />)

    // Fill the form
    await user.type(screen.getByLabelText(/name/i), 'Test Tea')
    await user.type(screen.getByLabelText(/image/i), 'https://placehold.co/600x400.png')
    await user.type(screen.getByLabelText(/description/i), 'Warm and cozy')
    await user.click(screen.getByLabelText(/caffeinated/i)) // if checkbox
    await user.type(screen.getByLabelText(/price/i), '5')

    // Mock POST response
    const mockPost = vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve({ id: 123 }) })
    )
    vi.stubGlobal('fetch', mockPost)

    // Submit the form
    await user.click(screen.getByRole('button', { name: /add tea/i }))

    // Ensure fetch was called with correct data
    expect(mockPost).toHaveBeenCalledWith(
      expect.stringContaining('http://localhost:3001/tea'),
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('"name":"Test Tea"')
      })
    )
  })
})