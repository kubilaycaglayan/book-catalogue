import React from 'react';

const Author = props => {
  const { author } = props;
  const {
    name,
    about,
    born_at,
    died_at,
    books,
  } = author;
  console.log(author);

  return (
    <div>
      <div>
        <h4>Name</h4>
        {name}
      </div>
      <div>
        <h4>About</h4>
        {about[0].slice(0, 200).concat('...')}
      </div>
      <div>
        <h4>Birth</h4>
        {born_at}
        <h4>Death</h4>
        {died_at}
      </div>
      <div>
        <h4>Books</h4>
        {books[0].book.map(book => {
          return (
            <div key={book.id[0]._}>
              <img src={book.image_url} alt="book cover" />
              <h5>
                Title
              </h5>
              <div>
                {book.title}
              </div>
              <h5>
                Description
              </h5>
              <div>
                {book.description[0].slice(0, 100).concat('...')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Author;
