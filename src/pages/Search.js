import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults";
import Wrapper from "../components/Wrapper";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.getRandomUsers();
  };

  // getRandomUsers = query => {
  //   API.getRandomUsers(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getRandomUsers(this.state.search);
  };

  render() {
    return (
    <div>
      <Navbar />
      <Form />
      <Wrapper>
        

      </Wrapper>
      

    </div>


      
    

    )}
}

export default Search;  