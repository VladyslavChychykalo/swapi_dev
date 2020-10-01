import React from "react";
import Header from "../Header";
import RandoPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

const App = () => (
  <div>
    <Header />
    <RandoPlanet />
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList />
      </div>
      <div className="col-md-6">
        <PersonDetails />
      </div>
    </div>
  </div>
);

export default App;

// https://swapi.dev/
