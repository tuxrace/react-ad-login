import React from 'react';
import { render } from '@testing-library/react';
import NewTo from './NewTo';

test('Renders NewTo', async () => {
    const props = {
        existing: true,
    };
    const { getByText } = render(<NewTo {...props} />);
    expect(getByText(/Sign In/i)).toBeInTheDocument();
});