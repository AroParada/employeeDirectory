import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults";
import Wrapper from "../components/Wrapper";
import { Table } from 'reactstrap';

class Search extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    API.getRandomUsers()
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
    <div>
      <Navbar />
      <Form />
      <Wrapper>
      <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <SearchResults
         results = {this.state.results} />
      </tbody>
    </Table>
      </Wrapper>
    </div>
    )}
}

export default Search;  