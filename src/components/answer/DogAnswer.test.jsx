import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DogAnswer from './DogAnswer';

describe('Response component', () => {
  afterEach(() => cleanup());
  it('renders Response', () => {
    const { asFragment } = render(<DogAnswer answer={{}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});