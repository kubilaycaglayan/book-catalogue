import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { wakeUp } from '../API';

const Welcome = () => {
  useEffect(() => {
    wakeUp();
  }, []);

  return (
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
};

export default Welcome;
