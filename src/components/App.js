import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Error from './Error';
import Results from '../containers/Results';
import Welcome from './Welcome';
import QueryPage from './QueryPage';
import Book from '../containers/Book';
import Author from '../containers/Author';

const App = () => (
  <Router>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/query" component={QueryPage} />
    <Route exact path="/error" component={Error} />
    <Route exact path="/results" component={Results} />
    <Route exact path="/book/:bookId" component={Book} />
    <Route exact path="/author/:authorId" component={Author} />
  </Router>
);

export default App;
