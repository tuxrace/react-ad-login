import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders App', () => {
  const { getByText } = render(<App />);
  const signInText = getByText(/Sign In/i);
  expect(signInText).toBeInTheDocument();
});
