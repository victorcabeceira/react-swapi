import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../components/UI/Loader/Loader';
import Pagination from '../../components/Navigation/Pagination/Pagination';
import CustomCard from '../../components/UI/CustomCard/CustomCard';

import { getIdFromUrl, filterCollection } from '../../shared/utility';

import * as actions from '../../store/actions/index';

import classes from './Planets.module.css';

import sun from '../../assets/images/planets/sun.png';
import venus from '../../assets/images/planets/venus.png';
import mercury from '../../assets/images/planets/mercury.png';
import earth from '../../assets/images/planets/earth.png';
import moon from '../../assets/images/planets/moon.png';
import mars from '../../assets/images/planets/mars.png';
import jupiter from '../../assets/images/planets/jupiter.png';
import saturn from '../../assets/images/planets/saturn.png';
import neptune from '../../assets/images/planets/neptune.png';
import uranus from '../../assets/images/planets/uranus.png';

const planets = props => {
  useEffect(() => {
    props.onFetchPlanets(props.planets.page);
  }, [props.planets.page]);

  const planetsImgArray = [sun, venus, mercury, earth, moon, mars, jupiter, saturn, neptune, uranus];

  let planets = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the planets are loaded. . .</div>

  if (!props.loading) {
    planets = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.Planets}>Planets count : {props.planets.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className={`${classes.PlanetsRow} mt-sm`}>
            {props.planets.results.map(planet => {
              const wantedProperties = ['name', 'climate', 'gravity', 'population', 'films'];
              const filteredPlanet = filterCollection(planet, wantedProperties, true);
              const planetUrlId = getIdFromUrl(planet.url);

              return (
                <Col xs={10} md={5} className={`${classes.PlanetsCol} m-md`} key={planetUrlId}>
                  <NavLink
                    to={`/planets/${planetUrlId}`}
                    key={planetUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <CustomCard
                      collection='Planet'
                      collectionImgArray={planetsImgArray}
                      collectionImgNumber={planet.randomImgNumber}
                      filteredCollection={filteredPlanet}
                      objectId={planetUrlId}
                      title={planet.name}
                    />
                  </NavLink>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    )

    pagination = (
      <div className={`${classes.PaginationLoading} pt-md pb-xl`}>
        <Pagination
          count={props.planets.count}
          page={props.planets.page}
          onClick={(page) => props.onPlanetsPageChange(page)}
        />
      </div>
    )
  }

  return (
    <div className={classes.MainPlanets}>
      {planets}
      {pagination}
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
    onFetchPlanets: (page) => dispatch(actions.fetchPlanets(page)),
    onPlanetsPageChange: (page) => dispatch(actions.fetchPlanets(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(planets);