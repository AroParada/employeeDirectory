import React from "react";

function Navbar(props) {
  return (
<div className="jumbotron jumbotron-fluid">
    <div className="container">
  <div className="row">
      <div className="col">
      <h2>
      Employee Directory
  </h2>
    </div>
  </div>
  <div className="row">
    <div  className="col align-self-center">
    <h6> Click on carrots to filter by heading or use the search box to narrow your results
     </h6>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Navbar;


