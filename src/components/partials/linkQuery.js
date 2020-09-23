import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  query: state.query,
});

const LinkQuery = props => {
  const { query } = props;

  return (
    <div className="query-page-link">
      <Link className="d-flex justify-content-start align-items-center" to="/query">
        New Search
        <i className="mx-2 fas fa-search" />
      </Link>
      <Route exact path="/(book/.*|author/.*)">
        <Link className="d-flex justify-content-start align-items-center ml-3" to={`/results?q=${query}`}>
          <i className="mx-2 fas fa-angle-double-left" />
          Go Back To Results
        </Link>
      </Route>
    </div>
  );
};

LinkQuery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(LinkQuery);
