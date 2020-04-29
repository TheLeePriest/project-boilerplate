import React from 'react';
import { render } from '@testing-library/react';
import App from '../../../src/App';

test('It loads!', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('heading')).toBeInTheDocument();
});
