global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Dog from './Dog';

describe.only('Dog containor', () => {
  it('check the application', () => {
    render(<Dog />);
    const postMethod = screen.getByPlaceholderText('Enter post');
    const name = screen.getByPlaceholderText('Enter name');

    user.type(postMethod);
    user.type(name);

    return waitFor(() => {
      expect(screen.getByText('Dog')).not.toBeEmptyDOMElement();
    });

  });
});
