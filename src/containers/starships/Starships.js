import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';

import Loader from '../../components/UI/Loader/Loader';
// import Pagination from '../../components/Navigation/Pagination/Pagination';
// import * as actions from '../../store/actions/index';
import classes from './Starships.module.css';

// import { getIdFromUrl } from '../../shared/utility';

const starships = props => {
  useEffect(() => {
    console.log('starships')
  }, []);

  let starships = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the starships are loaded. . .</div>

  if (!props.loading) {
    starships = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.Starships}>Starships count : TODO</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className='mt-sm'>
            TODO
            {/* Map starships and display them */}
          </Row>

        </Col>
      </Row>
    )

    pagination = (
      <div className={`${classes.PaginationLoading} pt-md pb-xl`}>
        TODO
        {/*
          TODO
        <Pagination
          count={props.starships.count}
          page={props.starships.page}
          onClick={(page) => props.onStarshipsPageChange(page)}
        /> */}
      </div>
    )
  }

  return (
    <div style={{ marginBottom: 60 }}>
      {starships}
      {pagination}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // starships: state.starships.starships,
    // loading: state.starships.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    /* onFetchStarships: (page) => dispatch(actions.fetchStarships(page)),
    onStarshipsPageChange: (page) => dispatch(actions.fetchStarships(page)) */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(starships);