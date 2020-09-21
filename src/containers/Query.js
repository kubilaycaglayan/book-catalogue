import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import autoComplete from '../API/autoComplete';
import { changeStatus, changeQuery } from '../actions';
import {
  RESULTS_READY,
  LOADING,
  ERROR,

} from '../constants';

const mapStateToProps = state => ({
  status: state.status,
  query: state.query,
});

const mapDispatchToProps = dispatch => ({
  statusChange: status => dispatch(changeStatus(status)),
  queryChanger: query => dispatch(changeQuery(query)),
});

const Query = props => {
  const { statusChange, status, query, queryChanger } = props;

  let timeOut;
  const handleInput = event => {
    const val = event.target.value;

    const callThis = () => {
      queryChanger(val);
      statusChange(LOADING);
    };

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callThis();
    }, 700);
  };

  return (
    <>
      <input onChange={handleInput} />
      {
        status === LOADING
          ? (
            <Redirect to={{
              pathname: '/results',
              search: `?q=${query}`,
            }}
            />
          )
          : ''
      }
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query);
