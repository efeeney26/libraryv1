import React from 'react';
import PropTypes from 'prop-types';

const TableHead = (props) => {
  const { headerTitles } = props;
  return (
    <thead>
      <tr>
        {headerTitles.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  headerTitles: PropTypes.array.isRequired,
};

export default TableHead;
