import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { changeStatus, changeQuery } from '../actions';
import { LOADING } from '../constants';

const mapStateToProps = state => ({
  status: state.status,
  query: state.query,
});

const mapDispatchToProps = dispatch => ({
  statusChanger: status => dispatch(changeStatus(status)),
  queryChanger: query => dispatch(changeQuery(query)),
});

const Query = props => {
  const {
    statusChanger,
    status,
    query,
    queryChanger,
  } = props;

  let timeOut;
  const handleInput = event => {
    const val = event.target.value;

    const callThis = () => {
      queryChanger(val);
      statusChanger(LOADING);
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

Query.propTypes = {
  statusChanger: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  queryChanger: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query);
