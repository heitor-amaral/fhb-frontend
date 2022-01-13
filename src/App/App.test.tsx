import { render, screen } from '@testing-library/react';

import App from '.';

test('renders hpme page slogan', () => {
  render(<App />);
  const linkElement = screen.getByText(/FHB. brewing your home content/i);
  expect(linkElement).toBeInTheDocument();
});
