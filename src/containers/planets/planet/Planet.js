import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../../components/UI/Loader/Loader';
import NextItem from '../../../components/UI/NextItem/NextItem';
import CustomCard from '../../../components/UI/CustomCard/CustomCard';
import * as actions from '../../../store/actions/index';

import { filterCollection, getIdFromUrl } from '../../../shared/utility';

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

  const unwantedProperties = ['randomImgNumber', 'url', 'created', 'edited'];
  const filteredPlanet = filterCollection(props.planet, unwantedProperties, false);
  const planetUrlId = props.match.params.id;
  const planetsImgArray = [sun, venus, mercury, earth, moon, mars, jupiter, saturn, neptune, uranus];

  let planet = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    planet = (
      <CustomCard
        collectionImgArray={planetsImgArray}
        collectionImgNumber={props.planet.randomImgNumber}
        filteredCollection={filteredPlanet}
        objectId={planetUrlId}
        title={props.planet.name}
        singleData
      />
    )
  }

  const actualPlanetId = props.match.params.id;
  const previousPlanetId = actualPlanetId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextPlanetId = actualPlanetId >= 61 ? 61 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, height: '100vh', minHeight: '600px', maxHeight: '1024px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/planets/${previousPlanetId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous planet'
          minId={1}
          actualId={parseInt(actualPlanetId)}
        />
      </Col>

      <Col xs={8}>
        {planet}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/planets/${nextPlanetId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next planet'
          maxId={61}
          actualId={parseInt(actualPlanetId)}
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