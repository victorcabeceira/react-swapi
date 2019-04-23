import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

const planets = props => {
  useEffect(() => {
    props.onFetchPlanets(0);
  }, []);

  let planets = <div>No planets loaded.</div>

  if (!props.loading) {
    planets = (
      <div>
        <p>Planets count: {props.planets.count}</p>
        {props.planets.results.map(planet => (
          <div key={planet.name}>
            Name: {planet.name}
          </div>
        ))}
      </div>
    )

  }

  return (
    <div>
      {planets}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    planets: state.planets.planets,
    loading: state.planets.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlanets: (token, userId) => dispatch(actions.fetchPlanets(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(planets);