import React from 'react';
import PropTypes from 'prop-types';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

const Table = (props) => {
  const { tableScheme, onButtonClick, data } = props;
  const titles = [];
  const values = tableScheme.reduce((acc, item) => {
    const { title, ...rest } = item;
    titles.push(title);
    return [
      ...acc,
      rest,
    ];
  }, []);
  return (
    <table cellSpacing={0}>
      <TableHead headerTitles={titles} />
      <TableBody
        tableValues={values}
        onClick={onButtonClick}
        data={data}
      />
    </table>
  );
};

Table.propTypes = {
  tableScheme: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Table;
