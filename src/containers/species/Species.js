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

import classes from './Species.module.css';

import speciesImgArray from '../../assets/images/species';

const species = props => {
  useEffect(() => {
    props.onFetchSpecies(props.species.page);
  }, [props.species.page]);

  let species = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the species are loaded. . .</div>

  if (!props.loading) {
    species = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.Species}>Species count : {props.species.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className='mt-sm'>
            {props.species.results.map(specie => {
              const wantedProperties = ['name', 'classification', 'designation', 'average_height', 'average_lifespan', 'language'];
              const filteredSpecie = filterCollection(specie, wantedProperties, true);
              const specieUrlId = getIdFromUrl(specie.url);

              return (
                <Col xs={10} md={5} className={`${classes.SpeciesCol} m-md`} key={specieUrlId}>
                  <NavLink
                    to={`/species/${specieUrlId}`}
                    key={specieUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <CustomCard
                      collection='Specie'
                      collectionImgArray={speciesImgArray}
                      collectionImgNumber={specie.randomImgNumber}
                      filteredCollection={filteredSpecie}
                      objectId={specieUrlId}
                      title={specie.name}
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
          count={props.species.count}
          page={props.species.page}
          onClick={(page) => props.onSpeciesPageChange(page)}
        />
      </div>
    )
  }

  return (
    <div className={classes.MainSpecies}>
      {species}
      {pagination}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    species: state.species.species,
    loading: state.species.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSpecies: (page) => dispatch(actions.fetchSpecies(page)),
    onSpeciesPageChange: (page) => dispatch(actions.fetchSpecies(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(species, axios));