import React from 'react';

const Filter = props => {
  const { authors, handleFilterChange, filter } = props;
  const dropDown = [{name: 'All Authors', id: 0}, ...authors];

  const changeFilter = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <select onChange={(e) => {changeFilter(e)}}>
      {
        dropDown.map(author => (
          <option key={author.id} value={author.id}>{author.name}</option>
        ))
      }
    </select>
  );
};

export default Filter;
