import React from 'react';
import Query from '../containers/Query';

const QueryPage = () => (
  <div className="query-page">
    <h1>
      Type into and search books or authors...
    </h1>
    <i className="fas fa-search" />
    <Query />
    <div className="symbols">
      <i className="fas fa-book" />
      <i className="fas fa-user-friends" />
    </div>
    <h2>
      Powered by Goodreads
    </h2>
  </div>
);

export default QueryPage;
