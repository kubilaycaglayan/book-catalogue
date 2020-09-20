import React from 'react';
import { connect } from 'react-redux';
import Query from './Query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Results from '../components/Results';
import Welcome from '../components/Welcome';
import Book from '../components/Book';
import Author from '../components/Author';

import {
  WELCOME,
  RESULTS_READY,
  BOOK_READY,
  AUTHOR_READY,
  LOADING,
  ERROR,
} from '../constants';

const mapStateToProps = state => ({
  status: state.status,
  books: state.results.books,
  authors: state.results.authors,
  author: state.author,
  book: state.book,
});

const App = props => {
  const { status, books, authors, author, book } = props;

  const whichComponent = () => {
    switch (status) {
      case WELCOME:
        return <Welcome />;
      case ERROR:
        return <Error />;
      case LOADING:
        return <Loading />;
      case BOOK_READY:
        return <Book book={book} />;
      case AUTHOR_READY:
        return <Author author={author} />;
      case RESULTS_READY:
        return <Results books={books} authors={authors} />;
      default:
        return <Welcome />;
    }
  };

  return (
    <>
      <Query />
      {whichComponent()}
    </>
  );
};

export default connect(
  mapStateToProps,
  null,
)(App);
