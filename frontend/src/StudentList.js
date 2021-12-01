import React from 'react';
import Table from './components/Table';
import './components/Table.css';
import axios from 'axios';

export default class StudentList extends React.Component {
  state = {
    students: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/api/students`).then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

  render() {
    const data = this.state.students.map((student) => (
      <tr>
        <td>{student.name}</td>
        <td>{student.surname}</td>
        <td>{student.note}</td>
      </tr>
    ));
    return <Table bodyData={data} />;
  }
}
