import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../../components/UI/Loader/Loader';
import * as actions from '../../store/actions/index';

const planets = props => {
  useEffect(() => {
    props.onFetchPlanets(0);
  }, []);

  let planets = <div><Loader style={{ background: '#FFD700' }}/></div>

  if (!props.loading) {
    planets = (
      <div>
        <p>Planets count: {props.planets.count}</p>
        {props.planets.results.map(planet => {
          const idRegex = /(\b\d*\b)(?!\1)/g;
          const planetUrlId = idRegex.exec(planet.url);

          return (
            <NavLink
              to={`/planets/${planetUrlId[0]}`}
              exact
              key={planetUrlId[0]}
            >
              <div>
                Name: {planet.name}
              </div>
            </NavLink>
          )
        })}
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