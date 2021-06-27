import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

  const similarBooks = book.similar_books || [{ book: [] }];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id.toString() === bookId.toString()) return;
    getBook(bookId)
      .then(
        newBook => {
          bookRecorder(newBook);
        },
      );
  }, [bookId]);

  return (
    <>
      {
        id.toString() !== bookId.toString()
          ? <Loading />
          : (
            <div className="single-page">
              <img src={book.image_url} alt="book cover" />
              <h1>
                {title}
              </h1>
              <h2>
                Authors
              </h2>
              <div className="px-5">
                <ul>
                  {authors.author.map(author => (
                    <li key={author.id}>
                      {author.name}
                      <Link to={`/author/${author.id}`} className="more-link">More</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <h2>
                Publisher
              </h2>
              <div>
                {publisher}
              </div>
              <h2>
                Similar Books
              </h2>
              <div className="px-5">
                <ul>
                  {similarBooks.book.slice(0, 3).map(bookTwo => (
                    <li key={bookTwo.id}>
                      {bookTwo.title}
                      <a className="d-block" target="_blank" rel="noreferrer" href={bookTwo.link}>
                        <i className="fas fa-sign-out-alt pr-1" />
                        See More on Goodreads...
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
      }
    </>
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
    image_url: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    authors: PropTypes.shape({
      author: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    publisher: PropTypes.string,
    similar_books: PropTypes.shape({}),
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
