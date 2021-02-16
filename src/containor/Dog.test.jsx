global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Dog from './Dog';
describe.only('Dog containor', () => {
  it('check the application', () => {
    render(<Dog />);
    // const ul = screen.getByPlaceholderText('Enter Post');

    // return waitFor(() => {
    //   expect(ul).not.toBeEmptyDOMElement();
    // });

  });
});
