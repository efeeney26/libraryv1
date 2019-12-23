import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props) => {
  const { onClick, data } = props;
  const values = data.reduce((acc, dataItem) => [
    ...acc,
    Object.values(dataItem),
  ], []);

  return (
    <tbody>
      {values.map((item) => (
        <tr key={item}>
          {item.map((item1) => (
            <td key={item1}>{item1}</td>
          ))}
          <td>
            <button type="button" onClick={onClick()}>Открыть</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TableBody;
