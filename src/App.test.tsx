import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

test("Renders root component", async () => {
  let container;

  await act(async () => {
    container = render(<App />).container;
  });
  expect(container).toMatchSnapshot();
});