import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../shared/Spinner";
import "./RandomPlanet.css";

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    this.setState({
      loading: true,
    });

    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(() => {
        this.setState({
          error: true,
        });
      })
      .finally(() =>
        this.setState({
          loading: false,
        })
      );
  }
  render() {
    const { planet, loading, error } = this.state;

    const neededComponent = loading ? (
      <Spinner />
    ) : (
      <PlanetView planet={planet} />
    );

    return (
      <div className="random-planet jumbotron rounded">
        {error ? <p>Error</p> : neededComponent}
      </div>
    );
  }
}

function PlanetView({ planet }) {
  const { id, name, population, rotationPeriod, diametr } = planet;

  return (
    <>
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
    </>
  );
}

export default RandomPlanet;
