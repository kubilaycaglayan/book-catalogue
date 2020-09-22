import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../helpers/App';

test('successfully lands to the welcome page', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to the book catalogue')).toBeTruthy();
});

test('navigates to the query page', () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/Search Book or Author/));

  expect(getByText('Type into and search books or authors...')).toBeTruthy();
});
