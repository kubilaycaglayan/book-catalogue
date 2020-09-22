import React from 'react';
import { Link } from 'react-router-dom';

const LinkQuery = () => (
  <div className="query-page-link">
    <i className="fas fa-angle-double-left" />
    <Link to="/query">
      Search Page
    </Link>
  </div>
);

export default LinkQuery;
