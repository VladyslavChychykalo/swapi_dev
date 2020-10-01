import React from "react";

const PersonDetails = () => (
  <div className="person-details card">
    <img
      className="person-image"
      //   src="https://starwars-visualguide.com/assets/img"
    />
    <div className="card-body">
      <h4>R2-D2</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender</span>
          <span>male</span>
        </li>
      </ul>
    </div>
  </div>
);

export default PersonDetails;
