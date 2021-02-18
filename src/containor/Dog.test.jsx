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
    const inputText = screen.getByPlaceholderText('Enter type');
    // eslint-disable-next-line max-len
    const inputCharacteristic = screen.getByPlaceholderText('Enter characteristic');

    user.type(inputCharacteristic);
    user.type(postMethod);
    user.type(name);
    user.type(inputText);

    return waitFor(() => {
      expect(screen.getByText('Dog')).not.toBeEmptyDOMElement();
    });

  });
});
