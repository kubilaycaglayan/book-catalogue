import React from 'react';
import { Link } from 'react-router-dom';

const Results = props => {
  const { books, authors } = props;

  return (
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
  );
};

export default Results;
