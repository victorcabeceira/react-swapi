import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Loader from '../../components/UI/Loader/Loader';
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
    props.onFetchPlanets(0);
  }, []);

  const planetsImgArray = [sun, venus, mercury, earth, moon, mars, jupiter, saturn, neptune, uranus];

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

              const wantedProperties = ['name', 'climate', 'gravity', 'terrain', 'population', 'residents', 'films'];

              const filteredPlanet = Object.entries(planet).filter(p => wantedProperties.includes(p[0]));

              return (
                <Col xs={5} className="m-md" key={planetUrlId[0]}>
                  <Link
                    to={`/planets/${planetUrlId[0]}`}
                    key={planetUrlId[0]}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <Card style={{
                      backgroundImage: `url(${planetsImgArray[planet.randomImgNumber]}), linear-gradient(rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.8))`,
                      backgroundSize: 'cover',
                    }}>
                      <CardActionArea>
                        <CardContent>
                          <div className={classes.CardContentTitle}>
                            Planet {planet.name}
                          </div>
                          {filteredPlanet.map(fp => {
                            let property = fp[0].charAt(0).toUpperCase() + fp[0].slice(1)
                            property = property.replace('_', ' ')
                            let value = Array.isArray(fp[1]) ? fp[1].length : fp[1];
                            return (
                              <div key={`${planetUrlId[0]}_${fp[0]}`} className={classes.CardContent}>
                                <div className={classes.ContentProperty}>{property} : </div>
                                <div className={classes.ContentData}>{value}</div>
                              </div>
                            )
                          })}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>

        </Col>
      </Row>
    )
  }

  return (
    <div style={{ marginBottom: 60 }}>
      {planets}
      <div style={{ color: 'white' }}>
        TODO: Pagination
      </div>
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
    onFetchPlanets: (page) => dispatch(actions.fetchPlanets(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(planets);