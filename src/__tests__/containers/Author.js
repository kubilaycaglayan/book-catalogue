import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SmallApp from '../../helpers/SmallApp';

test('successfully lands on the author page', async () => {
  const history = createMemoryHistory();
  history.push('/author/4');
  render(
    <Router history={history}>
      <SmallApp />
    </Router>,
  );
  const result = await screen.findByText(/Douglas Adams/);
  expect(result).toBeTruthy();
});
