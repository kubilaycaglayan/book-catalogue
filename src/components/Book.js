import React from 'react';

const Book = props => {
  const { book } = props;
  const {
    title,
    authors,
    publisher,
    similar_books,
  } = book;
  return (
    <div>
      <img src={book.image_url[0]} alt="book cover" />
      <h4>
        Title
      </h4>
      <div>
        {title}
      </div>
      <h4>
        Authors
      </h4>
      <div>
        {authors[0].author.map(author => (
          <div key={author.id[0]}>
            {author.name[0]}
          </div>
        ) )}
      </div>
      <h4>
        Publisher
      </h4>
      <div>
        {publisher}
      </div>
      <h4>
        Similar Books
      </h4>
      <div>
        {similar_books[0].book.slice(0, 3).map(book => {
          return <> {book.title} </>;
        })}
      </div>
    </div>
  );
};

export default Book;
