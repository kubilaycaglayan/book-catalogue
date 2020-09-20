import React from 'react';
import Provider from 'react-redux';
import Query from './Query';
import Results from './Results';

const App = () => (
  <Provider store={store}>
    <Query />
    <Results />
  </Provider>
);

export default App;
