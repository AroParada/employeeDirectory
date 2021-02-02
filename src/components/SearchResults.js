import React from 'react';
import { Table } from 'reactstrap';

function SearchResults(props) {
  return (
    <ul className="list-group">
    {props.results.map(item => (
      <li className="list-group-item" key={item.picture}>
        {item.name}{item.phone}{item.email}{item.dob}
      </li>
    ))}
  </ul>


    // <Table>
    //   <thead>
    //     <tr>
    //       <th>Image</th>
    //       <th>Name</th>
    //       <th>Phone</th>
    //       <th>Email</th>
    //       <th>DOB</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //       <td>@mdo</td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
}

export default SearchResults;
