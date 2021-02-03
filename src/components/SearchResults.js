import React from 'react';
// import { Table } from 'reactstrap';

const SearchResults = (props) => {
  console.log(props)
  return (
    <div>
    {props.results.map((employee, index) => {
      return (
        <tr key={index}>
          <img alt={employee.results} className="img-fluid" src={props.src} />
          <td> {employee.name} </td>
          <td> {employee.phone} </td>
          <td> {employee.email} </td>
          <td> {employee.dob} </td>
      </tr>
    )})}
  </div>
  
  );
}

export default SearchResults;
