import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import AppReal from '../components/App';
import { initialState } from '../constants';
import '../styles/style.sass';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AppReal />
  </Provider>
);

export default App;
