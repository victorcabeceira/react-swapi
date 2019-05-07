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

import filmsImgArray from '../../../assets/images/films';

const film = props => {
  useEffect(() => {
    const filmUrlId = getIdFromUrl(props.match.url)
    const parsedFilmUrlId = filmUrlId <= 1 ? 1 : (filmUrlId > 7 ? 7 : filmUrlId);

    if (filmUrlId > 7 || filmUrlId < 1) {
      props.history.push(`/films/${parsedFilmUrlId}`);
    }

    props.onFetchFilm(parsedFilmUrlId);
  }, [props.match.url]);

  const unwantedProperties = ['url', 'created', 'edited'];
  const filteredFilm = filterCollection(props.film, unwantedProperties, false);
  const filmUrlId = props.match.params.id;

  let film = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    film = (
      <CustomCard
        collectionImgArray={filmsImgArray}
        collectionImgNumber={parseInt(props.film.episode_id, 10) - 1}
        filteredCollection={filteredFilm}
        objectId={filmUrlId}
        title={props.film.name}
        singleData
      />
    )
  }

  const actualFilmId = props.match.params.id;
  const previousFilmId = actualFilmId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextFilmId = actualFilmId >= 7 ? 7 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, height: '100vh', minHeight: '600px', maxHeight: '1024px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/films/${previousFilmId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous film'
          minId={1}
          actualId={parseInt(actualFilmId)}
        />
      </Col>

      <Col xs={8}>
        {film}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/films/${nextFilmId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next film'
          maxId={7}
          actualId={parseInt(actualFilmId)}
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    film: state.film.film,
    loading: state.film.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchFilm: (id) => dispatch(actions.fetchFilm(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(film, axios));