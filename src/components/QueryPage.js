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
    <h2 className="mt-4 ml-3">
      Powered by
      <a href="https://www.goodreads.com/" target="_blank" rel="noreferrer">
        <img alt="goodreads logo" className="d-block" src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png" />
      </a>
    </h2>
    <h2>
      Created by
      <p>
        <a href="https://kubilaycaglayan.com" target="_blank" rel="noreferrer">
          Kubilay Caglayan
        </a>
      </p>
    </h2>
  </div>
);

export default QueryPage;
