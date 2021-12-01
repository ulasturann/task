import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr>
      {data.map((item) => {
        return <td>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
