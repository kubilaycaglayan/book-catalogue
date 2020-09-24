import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SmallApp from '../../helpers/SmallApp';

test('successfully lands on the book page', async () => {
  const history = createMemoryHistory();
  history.push('/book/386162');
  render(
    <Router history={history}>
      <SmallApp />
    </Router>,
  );
  const result = await screen.findByText(/The Hitchhiker's Guide to the Galaxy/);
  expect(result).toBeTruthy();
});
