import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SmallApp from '../../helpers/SmallApp';

test('successfully lands on the query page', () => {
  const history = createMemoryHistory();
  history.push('/query');
  const { getByText } = render(
    <Router history={history}>
      <SmallApp />
    </Router>,
  );
  expect(getByText('Type into and search books or authors...')).toBeTruthy();
});

test('makes a search with the book name', async () => {
  const history = createMemoryHistory();
  history.push('/results?q=galaxy');
  render(
    <Router history={history}>
      <SmallApp />
    </Router>,
  );
  const result = await screen.findByText(/Showing results for "galaxy"/);
  expect(result).toBeTruthy();
});
