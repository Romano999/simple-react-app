import * as React from 'react';

import { render, screen } from '@testing-library/react';
import { Home } from './home';

test('does render home text', () => {
    render(<Home />);
    const linkElement = screen.queryByText("This is the homepage");
    expect(linkElement).toBeInTheDocument();
});  
