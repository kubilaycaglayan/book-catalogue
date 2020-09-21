import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="welcome-page">
    <i className="fas fa-book-open" />
    <h1>
      Welcome to the books catalogue.
    </h1>
    <Link to="/query" className="main-page-link">
      Search Book or Author
    </Link>
  </div>
);

export default Welcome;
