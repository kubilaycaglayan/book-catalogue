import React from 'react';
import { connect } from 'react-redux';
import autoComplete from '../API/autoComplete';
import { changeStatus } from '../actions';
import {
  RESULTS_READY,
  LOADING,
  ERROR,
} from '../constants';

const mapDispatchToProps = dispatch => ({
  statusChange: status => dispatch(changeStatus(status)),
});

const Query = props => {
  const { statusChange } = props;

  let timeOut;
  const handleInput = event => {
    statusChange(LOADING)
    const val = event.target.value;
    const callThis = () => {
      autoComplete(val)
        .then(
          response => {
            statusChange(RESULTS_READY);
            console.log(response);
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
