import React from 'react';
import { connect } from 'react-redux';
import getAuthor from '../API/getAuthor';
import { recordAuthor } from '../actions';

const mapDispatchToProps = dispatch => ({
  authorRecorder: book => dispatch(recordAuthor(book));
});

const Results = props => {
  const { books, authors, authorRecorder } = props;

  const handleAuthor = authorId => {
    getAuthor(authorId)
      .then(
        response => {

        }
      )
  };

  return (
    <>
      <h2>results</h2>
      <h3>Books</h3>
      {books.map(book => (
        <div key={book.id}>
          {book.title}
          <button type="button">More</button>
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
