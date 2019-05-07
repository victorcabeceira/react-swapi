import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../../components/UI/Loader/Loader';
import NextItem from '../../../components/UI/NextItem/NextItem';
import CustomCard from '../../../components/UI/CustomCard/CustomCard';
import * as actions from '../../../store/actions/index';

import axios from '../../../axios-swapi';
import withErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler';

import { filterCollection, getIdFromUrl } from '../../../shared/utility';

import speciesImgArray from '../../../assets/images/species';

const specie = props => {
  useEffect(() => {
    const specieUrlId = getIdFromUrl(props.match.url);
    const parsedSpecieUrlId = specieUrlId <= 1 ? 1 : (specieUrlId > 37 ? 37 : specieUrlId);

    if (specieUrlId > 37 || specieUrlId < 1) {
      props.history.push(`/species/${parsedSpecieUrlId}`);
    }

    props.onFetchSpecie(parsedSpecieUrlId);
  }, [props.match.url]);

  const unwantedProperties = ['randomImgNumber', 'url', 'created', 'edited'];
  const filteredSpecie = filterCollection(props.specie, unwantedProperties, false);
  const specieUrlId = props.match.params.id;

  let specie = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    specie = (
      <CustomCard
        collection='Specie'
        collectionImgArray={speciesImgArray}
        collectionImgNumber={props.specie.randomImgNumber}
        filteredCollection={filteredSpecie}
        objectId={specieUrlId}
        title={props.specie.name}
        singleData
      />
    )
  }

  const actualSpecieId = props.match.params.id;
  const previousSpecieId = actualSpecieId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextSpecieId = actualSpecieId >= 37 ? 37 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, height: '100vh', minHeight: '600px', maxHeight: '1024px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/species/${previousSpecieId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous specie'
          minId={1}
          actualId={parseInt(actualSpecieId)}
        />
      </Col>

      <Col xs={8}>
        {specie}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/species/${nextSpecieId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next specie'
          maxId={37}
          actualId={parseInt(actualSpecieId)}
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    specie: state.specie.specie,
    loading: state.specie.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSpecie: (id) => dispatch(actions.fetchSpecie(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(specie, axios));