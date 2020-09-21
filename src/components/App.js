import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Query from '../containers/Query';
import Error from './Error';
import Results from '../containers/Results';
import Welcome from './Welcome';
import Book from '../containers/Book';
import Author from '../containers/Author';
import LinkMain from './partials/linkMain';

const App = () => (
  <Router>
    <Query />
    <Route path="/(results|author|book)" component={LinkMain} />
    <Route exact path="/" component={Welcome} />
    <Route exact path="/error" component={Error} />
    <Route exact path="/results" component={Results} />
    <Route exact path="/book/:bookId" component={Book} />
    <Route exact path="/author/:authorId" component={Author} />
  </Router>
);

export default App;
