/* eslint-disable max-len */
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
    const inputCharacteristic = screen.getByPlaceholderText('Enter characteristic');
    const getMethod = screen.getByText('Get all Dogs');
    const getMethodID = screen.getByText('Find Dog by Id');
    const updateDog = screen.getByText('Update dog by Id');
    const deleteDog = screen.getByText('Delete Dog by Id');

    user.type(inputCharacteristic);
    user.type(postMethod);
    user.type(name);
    user.type(inputText);
    user.type(getMethod);
    user.type(getMethodID);
    user.type(updateDog);
    user.type(deleteDog);

    return waitFor(() => {
      expect(screen.getByText('Dog')).not.toBeEmptyDOMElement();
    });

  });
});
