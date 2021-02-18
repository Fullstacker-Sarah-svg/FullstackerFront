global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Dog from './Dog';

describe.only('Dog containor', () => {
  it('check the application', () => {
    render(<Dog />);
    const postMethod = screen.getByPlaceholderText('Enter post');
    

    user.type(postMethod);

    return waitFor(() => {
      expect(screen.getByText('Dog')).not.toBeEmptyDOMElement();
    });

  });
});
