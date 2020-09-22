import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  changeStatus, changeQuery, changeFilter, recordResults,
} from '../actions';
import { LOADING } from '../constants';

const mapStateToProps = state => ({
  status: state.status,
  query: state.query,
});

const mapDispatchToProps = dispatch => ({
  statusChanger: status => dispatch(changeStatus(status)),
  queryChanger: query => dispatch(changeQuery(query)),
  resetFilter: () => dispatch(changeFilter(0)),
  resetResults: () => dispatch(recordResults({
    books: [],
    authors: [],
  })),
});

const Query = props => {
  const {
    statusChanger,
    status,
    query,
    queryChanger,
    resetFilter,
    resetResults,
  } = props;

  let timeOut;
  const handleInput = event => {
    const val = event.target.value;

    if (status !== LOADING) {
      resetResults();
    }

    const callThis = () => {
      queryChanger(val);
      resetFilter();
      statusChanger(LOADING);
    };

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callThis();
    }, 1200);
  };

  // eslint-disable-next-line consistent-return
  const RedirectIf = () => {
    if (status === LOADING) {
      return (
        <Redirect to={{
          pathname: '/results',
          search: `?q=${query}`,
        }}
        />
      );
    }
  };

  return (
    <div className="query">
      <input onChange={handleInput} spellCheck="false" />
      {RedirectIf()}
    </div>
  );
};

Query.propTypes = {
  statusChanger: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  queryChanger: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
  resetResults: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query);
