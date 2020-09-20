import React from 'react';
import { connect } from 'react-redux';
import getAuthor from '../API/getAuthor';
import getBook from '../API/getBook';
import { recordAuthor, changeStatus, recordBook } from '../actions';
import { AUTHOR_READY, BOOK_READY, LOADING } from '../constants';

const mapDispatchToProps = dispatch => ({
  authorRecorder: author => dispatch(recordAuthor(author)),
  bookRecorder: book => dispatch(recordBook(book)),
  statusChanger: status => dispatch(changeStatus(status)),
});

const Results = props => {
  const { books, authors, authorRecorder, statusChanger, bookRecorder } = props;

  const handleAuthor = authorId => {
    statusChanger(LOADING);
    getAuthor(authorId)
      .then(
        response => {
          console.log(response);
          authorRecorder(response);
          statusChanger(AUTHOR_READY);
        },
      );
  };

  const handleBook = bookId => {
    statusChanger(LOADING);
    getBook(bookId)
      .then(
        response => {
          console.log(response);
          bookRecorder(response);
          statusChanger(BOOK_READY);
        },
      );
  };

  return (
    <>
      <h2>results</h2>
      <h3>Books</h3>
      {books.map(book => (
        <div key={book.id}>
          {book.title}
          <button onClick={() => {handleBook(book.id)}} type="button">More</button>
        </div>
      ))}
      <h4>Authors</h4>
      {authors.map(author => (
        <div key={author.id}>
          {author.name}
          <button onClick={() => {handleAuthor(author.id)}} type="button">More</button>
        </div>
      ))}
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Results);
