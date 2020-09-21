import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
  const { author, match, authorRecorder, statusChanger, status } = props;
  const { authorId } = match.params;
  const {
    name,
    about,
    books,
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

  return (
    <div>
      {
        author.id.toString() !== authorId.toString()
          ? <Loading />
          : (
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
                {bornAt}
                <h4>Death</h4>
                {diedAt}
              </div>
              <div>
                <h4>Books</h4>
                {books[0].book.map(book => (
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
                ))}
              </div>
            </div>
          )
      }
    </div>
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
