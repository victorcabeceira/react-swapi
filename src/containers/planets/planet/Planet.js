import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';

import Loader from '../../../components/UI/Loader/Loader';
import NextItem from '../../../components/UI/NextItem/NextItem';
import CustomNavLink from '../../../components/Navigation/CustomNavLink/CustomNavLink';
import * as actions from '../../../store/actions/index';
import classes from './Planet.module.css';

import { getIdFromUrl, filterUrl } from '../../../shared/utility';

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
    const planetUrlId = getIdFromUrl(props.match.url)
    const parsedPlanetUrlId = planetUrlId <= 1 ? 1 : (planetUrlId > 61 ? 61 : planetUrlId);

    if (planetUrlId > 61 || planetUrlId < 1) {
      props.history.push(`/planets/${parsedPlanetUrlId}`);
    }

    props.onFetchPlanet(parsedPlanetUrlId);
  }, [props.match.url]);

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
          let value = fp[1];
          let hasUrls = false;
          const filteredUrls = [];

          if (Array.isArray(fp[1])) {
            hasUrls = true;
            fp[1].forEach(url => {
              const filteredUrl = filterUrl(url);
              filteredUrls.push(filteredUrl)
            })
          }

          return (
            <div key={`${fp.name}_${fp[0]}`} className={classes.CardContent}>
              <div className={classes.ContentProperty}>{property} : {hasUrls ? `${filteredUrls.length}` : null }</div>
              {hasUrls ?
                filteredUrls.map((fu, i) => {
                  return (
                    <div key={i} className={`${classes.ContentData} mh-sm`} style={{ verticalAlign: 'baseline'}}>
                      <CustomNavLink
                        customTo={fu}
                        customKey={i}
                        divContent={getIdFromUrl(fu)}
                        style={{ backgroundColor: '#222222', borderRadius: '20px', minWidth: '0px' }}
                      />
                    </div>
                  )
                })
                :
                <div className={classes.ContentData}>{value}</div>
              }
            </div>
          )
        })}
      </Card>
    )
  }

  const actualPlanetId = props.match.params.id;
  const previousPlanetId = actualPlanetId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextPlanetId = actualPlanetId >= 61 ? 61 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, minHeight: '600px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/planets/${previousPlanetId}`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous planet'
        />
      </Col>

      <Col xs={8}>
        {planet}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/planets/${nextPlanetId}`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next planet'
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