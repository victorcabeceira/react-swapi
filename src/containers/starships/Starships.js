import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../components/UI/Loader/Loader';
import Pagination from '../../components/Navigation/Pagination/Pagination';
import CustomCard from '../../components/UI/CustomCard/CustomCard';

import { getIdFromUrl, filterCollection } from '../../shared/utility';

import * as actions from '../../store/actions/index';

import classes from './Starships.module.css';

import starship1 from '../../assets/images/starships/1.png';
import starship2 from '../../assets/images/starships/2.png';
import starship3 from '../../assets/images/starships/3.png';
import starship4 from '../../assets/images/starships/4.png';
import starship5 from '../../assets/images/starships/5.png';
import starship6 from '../../assets/images/starships/6.png';

const starships = props => {
  useEffect(() => {
    props.onFetchStarships(props.starships.page);
  }, [props.starships.page]);

  const starshipsImgArray = [starship1, starship2, starship3, starship4, starship5, starship6];

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
                <Col xs={5} className={`${classes.StarshipsCol} m-md`} key={starshipUrlId}>
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

export default connect(mapStateToProps, mapDispatchToProps)(starships);