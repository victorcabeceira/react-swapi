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

import classes from './Starships.module.css';

import starshipsImgArray from '../../assets/images/starships';

const starships = props => {
  useEffect(() => {
    props.onFetchStarships(props.starships.page);
  }, [props.starships.page]);

  let starships = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the starships are loaded. . .</div>

  if (!props.loading) {
    starships = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.Starships}>Starships count : {props.starships.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className='mt-sm'>
            {props.starships.results.map(starship => {
              const wantedProperties = ['name', 'model', 'passengers', 'starship_class', 'crew'];
              const filteredStarship = filterCollection(starship, wantedProperties, true);
              const starshipUrlId = getIdFromUrl(starship.url);

              return (
                <Col xs={10} md={5} className={`${classes.StarshipsCol} m-md`} key={starshipUrlId}>
                  <NavLink
                    to={`/starships/${starshipUrlId}`}
                    key={starshipUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <CustomCard
                      collection='Starship'
                      collectionImgArray={starshipsImgArray}
                      collectionImgNumber={starship.randomImgNumber}
                      filteredCollection={filteredStarship}
                      objectId={starshipUrlId}
                      title={starship.name}
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
          count={props.starships.count}
          page={props.starships.page}
          onClick={(page) => props.onStarshipsPageChange(page)}
        />
      </div>
    )
  }

  return (
    <div className={classes.MainStarships}>
      {starships}
      {pagination}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    starships: state.starships.starships,
    loading: state.starships.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchStarships: (page) => dispatch(actions.fetchStarships(page)),
    onStarshipsPageChange: (page) => dispatch(actions.fetchStarships(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(starships, axios));