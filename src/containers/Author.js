/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAuthor } from '../API';
import Loading from '../components/Loading';
import { recordAuthor, changeStatus } from '../actions';
import { LOADING, RESULTS_READY } from '../constants';

const mapStateToProps = state => ({
  author: state.author,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  authorRecorder: author => dispatch(recordAuthor(author)),
  statusChanger: status => dispatch(changeStatus(status)),
});

const Author = props => {
  const {
    author, match, authorRecorder, statusChanger,
  } = props;
  const { authorId } = match.params;
  const {
    link,
    name,
    about,
    books,
    image_url,
  } = author;

  const bornAt = author.born_at;
  const diedAt = author.died_at;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (author.id.toString() === authorId.toString()) return;
    statusChanger(LOADING);
    getAuthor(authorId)
      .then(
        newAuthor => {
          authorRecorder(newAuthor);
          statusChanger(RESULTS_READY);
        },
      );
  }, [authorId]);

  return (
    <>
      {
        author.id.toString() !== authorId.toString()
          ? <Loading />
          : (
            <div className="single-page">
              <img className="rounded" src={image_url} alt="author" />
              <div>
                <h1>
                  {name}
                </h1>
              </div>
              <div>
                <h2>About</h2>
                <p className="px-3 text-center">
                  {about.replace(/href=".*"/, '').replace(/(<.{1,55}>|<|>)/g, '').slice(0, 200).concat('...')}
                </p>
                <a className="mt-5 d-flex justify-content-end align-items-center pr-4" target="_blank" rel="noreferrer" href={link}>
                  <i className="fas fa-sign-out-alt pr-1" />
                  <p>
                    See More on Goodreads...
                  </p>
                </a>
              </div>
              <div>
                <h2>Birth</h2>
                <p className="px-3 text-center">
                  {bornAt}
                </p>
                <h2>Death</h2>
                <p className="px-3 text-center">
                  {diedAt}
                </p>
              </div>
              <div>
                <h2>Books</h2>
                {books.book.slice(0, 10).map(book => (
                  <div className="result-card media" key={book.id}>
                    <img src={book.image_url} alt="book cover" />
                    <div className="media-body ml-3">
                      {book.title}
                      <Link to={`/book/${book.id}`} className="more-link mt-3">More</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      }
    </>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    link: PropTypes.string,
    image_url: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    about: PropTypes.string,
    born_at: PropTypes.string,
    died_at: PropTypes.string,
    books: PropTypes.shape({
      book: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      authorId: PropTypes.string,
    }),
  }).isRequired,
  authorRecorder: PropTypes.func.isRequired,
  statusChanger: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Author);
