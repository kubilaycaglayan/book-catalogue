import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="welcome-page">
    <h1>
      <i className="fas fa-book-open" />
      Welcome to the book catalogue
    </h1>
    <Link to="/query" className="main-page-link">
      <i className="fas fa-search" />
      Search Book or Author
    </Link>
  </div>
);

export default Welcome;
