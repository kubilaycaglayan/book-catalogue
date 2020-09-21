import React from 'react';
import { connect } from 'react-redux';
import getBook from '../API/getBook';
import Loading from './Loading';
import { recordBook } from '../actions';

const mapStateToProps = state => ({
  book: state.book,
});

const mapDispatchToProps = dispatch => ({
  bookRecorder: book => dispatch(recordBook(book)),
});

const Book = props => {
  const { match, bookRecorder, book } = props;
  const { bookId } = match.params;
  const {
    title,
    authors,
    publisher,
    similar_books,
  } = book;

  const startProcess = () => {
    if (book.id.toString() === bookId.toString()) return;
    getBook(bookId)
      .then(
        newBook => {
          bookRecorder(newBook);
        },
      );
  };

  startProcess();

  return (
    <div>
      {
        book.id.toString() !== bookId.toString()
          ? <Loading />
          : (
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
          )
      }
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
