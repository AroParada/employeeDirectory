import React from "react";

function Form() {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
      <input 
      // value={props.search}
      // onChange={props.handleInputChange}
      name="employee"
      list="employees"
      className="form-control mr-sm-2" 
      type="text" 
      placeholder="Search employee" 
      id="Search"
      >
      </input>
    </form>
  </nav>
  );
}

export default Form;
