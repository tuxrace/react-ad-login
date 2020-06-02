import React from 'react';
import { render } from '@testing-library/react';
import CreateAccount from './CreateAccount';

test('Renders CreateAccount', async () => {
    const props = {
        setCreate: jest.fn(),
    };
    const { getByText } = render(<CreateAccount {...props} />);
    expect(getByText(/Sign In/i)).toBeInTheDocument();
});