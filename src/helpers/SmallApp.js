import React from 'react';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Error from '../components/Error';
import Results from '../containers/Results';
import Welcome from '../components/Welcome';
import QueryPage from '../components/QueryPage';
import Book from '../containers/Book';
import Author from '../containers/Author';
import LinkQuery from '../components/partials/linkQuery';
import reducer from '../reducers/index';
import { initialState } from '../constants';
import '../styles/style.sass';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/query" component={QueryPage} />
    <Route exact path="/error" component={Error} />
    <Route exact path="/results" component={Results} />
    <Route exact path="/book/:bookId" component={Book} />
    <Route exact path="/author/:authorId" component={Author} />
    <Route exact path="/(results|author/.*|book/.*|error)" component={LinkQuery} />
  </Provider>
);

export default App;
