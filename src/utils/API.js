import axios from "axios";

// Export an object containing methods we'll use for accessing API

export default {
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },
}