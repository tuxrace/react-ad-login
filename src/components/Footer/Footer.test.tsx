import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Footer', async () => {
    const { container, getByText } = render(<Footer />);
    expect(container).toBeDefined();
    expect(getByText(/Learn More/i)).toBeInTheDocument();
});
