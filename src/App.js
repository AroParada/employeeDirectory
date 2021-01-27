import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import API from "./utils/API";

function App() {
  return (
    <div>
      <Navbar />
      <Form />
      <Card />
    </div>
  );
}

export default App;


  API.getRandomUsers()
  console.log(API)
    // .then(res => this.setState({ randomUser: res.data.message }))
    // .catch(err => console.log(err));



