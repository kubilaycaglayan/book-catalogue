import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const { authors, handleFilterChange } = props;
  const dropDown = [{ name: 'All Authors', id: 0 }, ...authors];

  const changeFilter = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <select onChange={e => { changeFilter(e); }}>
      {
        dropDown.map(author => (
          <option key={author.id} value={author.id}>{author.name}</option>
        ))
      }
    </select>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filter;
