import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { autoComplete } from '../API';
import { changeStatus, recordResults, changeFilter } from '../actions';
import { RESULTS_READY } from '../constants';
import Loading from '../components/Loading';
import Filter from '../components/Filter';

const mapStateToProps = state => ({
  status: state.status,
  books: state.results.books,
  authors: state.results.authors,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  statusChange: status => dispatch(changeStatus(status)),
  resultRecorder: results => dispatch(recordResults(results)),
  handleFilterChange: filter => dispatch(changeFilter(filter)),
});

const Results = props => {
  const {
    status,
    location,
    statusChange,
    resultRecorder,
    books,
    authors,
    handleFilterChange,
    filter,
  } = props;
  const query = location.search.slice(3);

  const newAuthors = response => {
    const ids = [];
    const result = [];
    response.forEach(bookObj => {
      if (ids.includes(bookObj.author.id)) return;
      ids.push(bookObj.author.id);
      result.push({
        name: bookObj.author.name,
        id: bookObj.author.id,
      });
    });
    return result;
  };

  const newBooks = response => response.map(bookObj => ({
    title: bookObj.title,
    author: bookObj.author.name,
    id: bookObj.bookId,
    authorId: bookObj.author.id,
  }));

  useEffect(() => {
    if (status === RESULTS_READY || query === '') return;
    autoComplete(query)
      .then(
        response => {
          resultRecorder({
            authors: newAuthors(response),
            books: newBooks(response),
          });
          statusChange(RESULTS_READY);
        },
      );
  }, [query]);

  return (
    <>
      {
        status !== RESULTS_READY
          ? <Loading />
          : (
            <>
              <h2>results</h2>
              <Filter authors={authors} handleFilterChange={handleFilterChange} filter={filter} />
              <h3>Books</h3>
              {books
                .filter(book => (book.authorId.toString() === filter || filter === '0'))
                .map(book => (
                  <div key={book.id}>
                    {book.title}
                    <Link to={`/book/${book.id}`}>More</Link>
                  </div>
                ))}
              <h4>Authors</h4>
              {authors
                .filter(author => (author.id.toString() === filter || filter === '0'))
                .map(author => (
                  <div key={author.id}>
                    {author.name}
                    <Link to={`/author/${author.id}`}>More</Link>
                  </div>
                ))}
            </>
          )
      }
    </>
  );
};

Results.propTypes = {
  status: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  statusChange: PropTypes.func.isRequired,
  resultRecorder: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
