import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateAccount from './CreateAccount';

test('Renders CreateAccount', async () => {
    const props = {
        setCreate: jest.fn(),
    };
    const { getByText, container } = render(<CreateAccount {...props} />);
    expect(getByText(/Sign In/i)).toBeInTheDocument();
    fireEvent.change(container.querySelector("input[id='firstName']") as HTMLInputElement, {target: {value: ''}})
    fireEvent.click(container.querySelector("button") as HTMLButtonElement);
});