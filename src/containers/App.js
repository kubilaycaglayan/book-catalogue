import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Query from './Query';
import Error from '../components/Error';
import Results from '../components/Results';
import Welcome from '../components/Welcome';
import Book from '../components/Book';
import Author from '../components/Author';

const App = () => {

  return (
    <Router>
      <Query />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/error" component={Error} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/book/:bookId" component={Book} />
      <Route exact path="/author/:authorId" component={Author} />
    </Router>
  );
};

export default App;
