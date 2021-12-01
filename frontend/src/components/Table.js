import React from 'react';

const Table = ({ bodyData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Isim</th>
          <th>Soyisim</th>
          <th>Not</th>
        </tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </table>
  );
};

export default Table;
