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
    imageUrl: bookObj.imageUrl,
  }));

  useEffect(() => {
    if (status === RESULTS_READY || query === '') return;
    autoComplete(query)
      .then(
        response => {
          console.log(response);
          resultRecorder({
            authors: newAuthors(response),
            books: newBooks(response),
          });
          statusChange(RESULTS_READY);
        },
      );
  }, [query]);

  return (
    <div className="results-page">
      {
        status !== RESULTS_READY
          ? <Loading />
          : (
            <>
              <p>
                Showing results for "
                {query}
                "
              </p>
              <Filter authors={authors} handleFilterChange={handleFilterChange} filter={filter} />
              <div className="container-fluid">
                <div className="row">
                  <div className="results col-12-md col-lg-6">
                    <h2>
                      <div className="px-5 py-3 badge badge-light">
                        Books
                      </div>
                    </h2>
                    {books
                      .filter(book => (book.authorId.toString() === filter || filter === '0'))
                      .map(book => (
                        <div className="result-card media" key={book.id}>
                          <img src={book.imageUrl} />
                          <div className="media-body ml-3">
                            {book.title}
                            <Link to={`/book/${book.id}`} className="more-link mt-3">More</Link>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="results col-12-md col-lg-6">
                    <h2>
                      <div className="px-5 py-3 badge badge-light">
                        Authors
                      </div>
                    </h2>
                    {authors
                      .filter(author => (author.id.toString() === filter || filter === '0'))
                      .map(author => (
                        <div className="result-card media" key={author.id}>
                          <i className="fas fa-user-edit" />
                          <div className="media-body ml-3">
                            {author.name}
                            <Link to={`/author/${author.id}`} className="more-link mt-3">More</Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )
      }
    </div>
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
