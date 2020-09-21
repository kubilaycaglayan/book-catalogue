import React from 'react';
import { connect } from 'react-redux';
import autoComplete from '../API/autoComplete';
import { changeStatus, recordResults } from '../actions';
import {
  RESULTS_READY,
  LOADING,
  ERROR,
} from '../constants';

const mapDispatchToProps = dispatch => ({
  statusChange: status => dispatch(changeStatus(status)),
  resultRecorder: results => dispatch(recordResults(results)),
});

const Query = props => {
  const { statusChange, resultRecorder } = props;

  const authors = response => {
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

  const books = response => response.map(bookObj => ({
    title: bookObj.title,
    author: bookObj.author.name,
    id: bookObj.bookId,
  }));

  let timeOut;
  const handleInput = event => {
    if (timeOut === undefined) {
      statusChange(LOADING);
    }

    const val = event.target.value;

    const callThis = () => {
      autoComplete(val)
        .then(
          response => {
            console.log(response);
            resultRecorder({
              authors: authors(response),
              books: books(response),
            });
            statusChange(RESULTS_READY);
          },
        );
    };

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callThis();
    }, 700);
  };

  return (
    <input onChange={handleInput} />
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Query);
