import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Loader from '../../../components/UI/Loader/Loader';
import * as actions from '../../../store/actions/index';
import classes from './Planet.module.css';

import sun from '../../../assets/images/planets/sun.png';
import venus from '../../../assets/images/planets/venus.png';
import mercury from '../../../assets/images/planets/mercury.png';
import earth from '../../../assets/images/planets/earth.png';
import moon from '../../../assets/images/planets/moon.png';
import mars from '../../../assets/images/planets/mars.png';
import jupiter from '../../../assets/images/planets/jupiter.png';
import saturn from '../../../assets/images/planets/saturn.png';
import neptune from '../../../assets/images/planets/neptune.png';
import uranus from '../../../assets/images/planets/uranus.png';

const planet = props => {
  useEffect(() => {
    const idRegex = /(\b\d*\b)(?!\1)/g;
    const planetUrlId = idRegex.exec(props.match.url);
    props.onFetchPlanet(planetUrlId[0]);
  }, []);

  const filteredPlanet = Object.entries(props.planet).filter(p => !['randomImgNumber', 'url', 'created', 'edited'].includes(p[0]));
  const planetsImgArray = [sun, venus, mercury, earth, moon, mars, jupiter, saturn, neptune, uranus];

  let planet = <div><Loader style={{ background: '#FFD700' }} /></div>

  const randomRgbaGenerator = () => {
    const g = Math.floor(Math.random() * 80);
    const b = Math.floor(Math.random() * 80);
    const r = Math.floor(Math.random() * 80);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
  }

  const cardStyle = {
    margin: '16px 8px',
    backgroundImage: `
      url(${planetsImgArray[props.planet.randomImgNumber]}),
      linear-gradient(
        ${randomRgbaGenerator()},
        rgba(30, 30, 30, 0.6),
        rgba(20, 20, 20, 0.4)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  if (!props.loading) {
    planet = (
      <Card style={cardStyle} className='pv-md'>
        <div className={classes.CardContentTitle}>
          Planet {props.planet.name}
        </div>

        {filteredPlanet.map(fp => {
          let property = fp[0].charAt(0).toUpperCase() + fp[0].slice(1)
          property = property.replace('_', ' ');
          let value = Array.isArray(fp[1]) ? fp[1].length : fp[1];

          return (
            <div key={`${fp.name}_${fp[0]}`} className={classes.CardContent}>
              <div className={classes.ContentProperty}>{property} : </div>
              <div className={classes.ContentData}>{value}</div>
            </div>
          )
        })}
      </Card>
    )
  }

  return (
    <Row style={{ margin: 0 }} middle='xs' center='xs'>
      <Col xs={2}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size='lg'
          color='#FFFFFF'
        />
      </Col>

      <Col xs={8}>
        {planet}
      </Col>

      <Col xs={2}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size='lg'
          color='#FFFFFF'
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    planet: state.planet.planet,
    loading: state.planet.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlanet: (id) => dispatch(actions.fetchPlanet(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(planet);