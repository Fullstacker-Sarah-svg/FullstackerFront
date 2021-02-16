global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Dog from './Dog';
describe('Dog containor', () => {
    it('check the buttons and input of the application', () => {
        render(<Dog />);
    });
});
