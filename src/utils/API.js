import axios from "axios";

// Export an object containing methods we'll use for accessing API

const Search = () => {
    return axios.get("https://randomuser.me/api/?results=20");
  };

export default Search; 

