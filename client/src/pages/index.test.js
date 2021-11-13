import { render, screen } from '@testing-library/react'
import Home from '.'

it('should', async () => {
  render(<Home />)

  const items = await screen.findAllByText("Get started by editing")
  expect(items).toHaveLength(1)
})
