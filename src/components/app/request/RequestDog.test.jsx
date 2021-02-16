import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RequestDog from './RequestDogs';

describe('Renders the request dog page', () => {
  afterEach(() => cleanup());
    

  it('diplays the page for dogs', () => {
    const { asFragment } = render(<RequestDog
      name="daisy" 
      type="bulldog" 
      characteristic="brintle"
      onChange={jest.fn()}
      onSubmit={jest.fn()}  
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
