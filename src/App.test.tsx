import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router';

test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['']} initialIndex={0}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText('Dashboard');
  expect(linkElement).toBeInTheDocument();
});
