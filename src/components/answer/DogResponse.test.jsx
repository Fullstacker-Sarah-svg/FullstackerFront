import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dogresponse from './DogResponse';


describe('response component', () => {
  afterEach(() => cleanup());
  it('renders response', () => {
    const { asFragment } = render(<Dogresponse response={{}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
