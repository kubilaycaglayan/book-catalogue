import React from 'react';

const Results = props => {
  const { books, authors } = props;

  return (
    <>
      <h2>results</h2>
      <h3>Books</h3>
      {books.map(book => (
        <div key={book.id}>
          {book.title}
        </div>
      ))}
      <h4>Authors</h4>
      {authors.map(author => (
        <div key={author.id}>
          {author.name}
        </div>
      ))}
    </>
  );
};

export default Results;
