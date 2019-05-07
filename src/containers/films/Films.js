import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../components/UI/Loader/Loader';
import Pagination from '../../components/Navigation/Pagination/Pagination';
import CustomCard from '../../components/UI/CustomCard/CustomCard';

import axios from '../../axios-swapi';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

import { getIdFromUrl, filterCollection } from '../../shared/utility';

import * as actions from '../../store/actions/index';

import classes from './Films.module.css';

import filmsImgArray from '../../assets/images/films';

const films = props => {
  useEffect(() => {
    props.onFetchFilms(props.films.page);
  }, [props.films.page]);

  let films = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the films are loaded. . .</div>

  if (!props.loading) {
    films = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.Films}>Films count : {props.films.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className='mt-sm'>
            {props.films.results.map(film => {
              const wantedProperties = ['title', 'director', 'producer', 'release_date'];
              const filteredFilm = filterCollection(film, wantedProperties, true);
              const filmUrlId = getIdFromUrl(film.url);

              console.log('episode_id', film.episode_id)
              return (
                <Col xs={10} md={5} className={`${classes.FilmsCol} m-md`} key={filmUrlId}>
                  <NavLink
                    to={`/films/${filmUrlId}`}
                    key={filmUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <CustomCard
                      collection='Films'
                      collectionImgArray={filmsImgArray}
                      collectionImgNumber={parseInt(film.episode_id, 10) - 1}
                      filteredCollection={filteredFilm}
                      objectId={filmUrlId}
                      title={film.name}
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
          count={props.films.count}
          page={props.films.page}
          onClick={(page) => props.onFilmsPageChange(page)}
        />
      </div>
    )
  }

  return (
    <div className={classes.MainFilms}>
      {films}
      {pagination}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    films: state.films.films,
    loading: state.films.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchFilms: (page) => dispatch(actions.fetchFilms(page)),
    onFilmsPageChange: (page) => dispatch(actions.fetchFilms(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(films, axios));