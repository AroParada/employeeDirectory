import React from 'react';
// import { Table } from 'reactstrap';

const SearchResults = (props) => {
  console.log(props)
  return (
    <tr>
    {props.results.map((employee, index) => {
      const {
        dob: {date, age},
        email,
        name: {title, first, last},
        phone,
      } = employee;


      return (
        <tr key={index}>
          <img alt={employee.results} className="img-fluid" src={props.src} />
          <td>{[title, first, last].join(' ')}</td>
          <td> {phone} </td>
          <td> {email} </td>
          <td> {[date, age].join(' ')} </td>
      </tr>
    )})}
  </tr>
  
  );
}

export default SearchResults;
