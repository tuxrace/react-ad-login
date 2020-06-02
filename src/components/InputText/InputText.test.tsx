import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputText from './InputText';

test('Renders InputText', async () => {
    const props = {
        id: 'userName',
        message: 'Please enter userName',
        label: 'Username'
    };
    const { getByText, getByPlaceholderText } = render(<InputText {...props} />);
    expect(getByText(/Please enter userName/i)).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText('Username'));
});