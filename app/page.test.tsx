import { render, screen } from '@testing-library/react';

import Page from '@/app/page';

test('renders the Page component', () => {
  render(<Page />);

  // Check if the Next.js logo is present
  const logo = screen.getByAltText('Next.js logo');

  expect(logo).toBeInTheDocument();

  // Check if the "Get started by editing" text is present
  const getStartedText = screen.getByText(/Get started by editing/i);

  expect(getStartedText).toBeInTheDocument();

  // Check if the "Deploy now" link is present
  const deployLink = screen.getByText(/Deploy now/i);

  expect(deployLink).toBeInTheDocument();

  // Check if the "Read our docs" link is present
  const docsLink = screen.getByText(/Read our docs/i);

  expect(docsLink).toBeInTheDocument();
});
