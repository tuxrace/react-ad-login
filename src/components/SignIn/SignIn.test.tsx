import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';

test('SignIn', async () => {
    const { container, getByText } = render(<SignIn />);
    expect(container).toBeDefined();
    expect(getByText(/Sign In/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Next/i));
});