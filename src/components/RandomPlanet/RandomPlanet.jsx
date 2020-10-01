import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../shared/Spinner";
import "./RandomPlanet.css";

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }
  render() {
    const {
      planet: { id, name, population, rotationPeriod, diametr },
    } = this.state;

    return <Spinner />;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diametr</span>
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
