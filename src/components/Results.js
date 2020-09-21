import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import autoComplete from '../API/autoComplete';
import { changeStatus, recordResults } from '../actions';
import { RESULTS_READY } from '../constants';
import Loading from './Loading';

const mapStateToProps = state => ({
  status: state.status,
  books: state.results.books,
  authors: state.results.authors,
});

const mapDispatchToProps = dispatch => ({
  statusChange: status => dispatch(changeStatus(status)),
  resultRecorder: results => dispatch(recordResults(results)),
});

const Results = props => {
  const { status, location, statusChange, resultRecorder, books, authors } = props;
  const query = location.search.slice(3);

  const newAuthors = response => {
    const ids = [];
    const result = [];
    response.forEach(bookObj => {
      if (ids.includes(bookObj.author.id)) return;
      ids.push(bookObj.author.id);
      result.push({
        name: bookObj.author.name,
        id: bookObj.author.id,
      });
    });
    return result;
  };

  const newBooks = response => response.map(bookObj => ({
    title: bookObj.title,
    author: bookObj.author.name,
    id: bookObj.bookId,
  }));

  const callThis = () => {
    if (status === RESULTS_READY) return;
    autoComplete(query)
      .then(
        response => {
          resultRecorder({
            authors: newAuthors(response),
            books: newBooks(response),
          });
          statusChange(RESULTS_READY);
        },
      );
  };

  callThis();

  return (
    <>
      {
        status !== RESULTS_READY
          ? <Loading />
          : (
            <>
              <h2>results</h2>
              <h3>Books</h3>
              {books.map(book => (
                <div key={book.id}>
                  {book.title}
                  <Link to={`/book/${book.id}`}>More</Link>
                </div>
              ))}
              <h4>Authors</h4>
              {authors.map(author => (
                <div key={author.id}>
                  {author.name}
                  <Link to={`/author/${author.id}`}>More</Link>
                </div>
              ))}
            </>
          )
      }
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
