import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../components/UI/Loader/Loader';
import * as actions from '../../store/actions/index';
import classes from './Planets.module.css';

const planets = props => {
  useEffect(() => {
    props.onFetchPlanets(0);
  }, []);

  let planets = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    planets = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mv-md'>
            <Col xs>
              <div className={classes.Planets}>Planets count : {props.planets.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className='mv-md'>
            {props.planets.results.map(planet => {
              const idRegex = /(\b\d*\b)(?!\1)/g;
              const planetUrlId = idRegex.exec(planet.url);

              return (
                <Col xs={6}>
                  <NavLink
                    to={`/planets/${planetUrlId[0]}`}
                    exact
                    key={planetUrlId[0]}
                  >
                    <div>
                      Name: {planet.name}
                    </div>
                  </NavLink>
                </Col>
              )
            })}
          </Row>

        </Col>
      </Row>
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