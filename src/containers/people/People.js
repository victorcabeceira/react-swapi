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

import classes from './People.module.css';

import peopleImgArray from '../../assets/images/people';


const people = props => {
  useEffect(() => {
    props.onFetchPeople(props.people.page);
  }, [props.people.page]);

  let people = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the people are loaded. . .</div>

  if (!props.loading) {
    people = (
      <Row middle='xs' center='xs' className={classes.MainRow}>
        <Col xs className={classes.MainCol}>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.People}>People count : {props.people.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className={`mt-sm ${classes.SecondRow}`}>
            {props.people.results.map(people => {
              const wantedProperties = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'birth_year', 'gender'];
              const filteredPeople = filterCollection(people, wantedProperties, true);
              const peopleUrlId = getIdFromUrl(people.url);

              return (
                <Col xs={10} md={5} className={`${classes.PeopleCol} m-md`} key={peopleUrlId}>
                  <NavLink
                    to={`/people/${peopleUrlId}`}
                    key={peopleUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <CustomCard
                      collection='People'
                      collectionImgArray={peopleImgArray}
                      collectionImgNumber={people.randomImgNumber}
                      filteredCollection={filteredPeople}
                      objectId={peopleUrlId}
                      title={people.name}
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
          count={props.people.count}
          page={props.people.page}
          onClick={(page) => props.onPeoplePageChange(page)}
        />
      </div>
    )
  }

  return (
    <div className={classes.MainPeople}>
      {people}
      {pagination}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    people: state.people.people,
    loading: state.people.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPeople: (page) => dispatch(actions.fetchPeople(page)),
    onPeoplePageChange: (page) => dispatch(actions.fetchPeople(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(people, axios));