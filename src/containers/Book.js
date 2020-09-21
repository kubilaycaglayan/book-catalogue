import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBook } from '../API';
import Loading from '../components/Loading';
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
    id,
    title,
    authors,
    publisher,
  } = book;

  const similarBooks = book.similar_books;

  useEffect(() => {
    if (id.toString() === bookId.toString()) return;
    getBook(bookId)
      .then(
        newBook => {
          bookRecorder(newBook);
        },
      );
  }, [bookId]);

  return (
    <div key={id}>
      {
        id.toString() !== bookId.toString()
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
                ))}
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
                {similarBooks[0].book.slice(0, 3).map(bookTwo => (
                  <div key={bookTwo.id}>
                    {bookTwo.title}
                  </div>
                ))}
              </div>
            </div>
          )
      }
    </div>
  );
};

Book.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      bookId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  bookRecorder: PropTypes.func.isRequired,
  book: PropTypes.shape({
    image_url: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    title: PropTypes.arrayOf(PropTypes.string),
    authors: PropTypes.arrayOf(PropTypes.object),
    publisher: PropTypes.arrayOf(PropTypes.string),
    similar_books: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
