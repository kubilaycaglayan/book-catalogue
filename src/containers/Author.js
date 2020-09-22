import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAuthor } from '../API';
import Loading from '../components/Loading';
import { recordAuthor, changeStatus } from '../actions';
import { LOADING, RESULTS_READY } from '../constants';
import LinkQuery from '../components/partials/linkQuery';

const mapStateToProps = state => ({
  author: state.author,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  authorRecorder: author => dispatch(recordAuthor(author)),
  statusChanger: status => dispatch(changeStatus(status)),
});

const Author = props => {
  const { author, match, authorRecorder, statusChanger, status } = props;
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

  console.log(author);

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
                <a className="d-block" target="_blank" rel="noreferrer" href={link[0]}>
                  <i className="fas fa-sign-out-alt pr-1" />
                  See More on Goodreads...
                </a>
              </div>
              <div>
                <h2>About</h2>
                <p className="px-3 text-center">
                  {about[0].slice(0, 200).concat('...')}
                </p>
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
                {books[0].book.slice(0, 10).map(book => (
                  <div className="result-card media" key={book.id[0]._}>
                    <img src={book.image_url} />
                    <div className="media-body ml-3">
                      {book.title}
                      <Link to={`/book/${book.id[0]._}`} className="more-link mt-3">More</Link>
                    </div>
                  </div>
                ))}
              </div>
              <LinkQuery />
            </div>
          )
      }
    </>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.arrayOf(PropTypes.string),
    about: PropTypes.arrayOf(PropTypes.string),
    born_at: PropTypes.arrayOf(PropTypes.string),
    died_at: PropTypes.arrayOf(PropTypes.string),
    books: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      authorId: PropTypes.string,
    }),
  }).isRequired,
  authorRecorder: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Author);
