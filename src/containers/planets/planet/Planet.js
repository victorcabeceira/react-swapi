import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';

import Loader from '../../../components/UI/Loader/Loader';
import * as actions from '../../../store/actions/index';
import classes from './Planet.module.css';

const planet = props => {

  useEffect(() => {
    props.onFetchPlanet(1);
  }, []);

  let planet = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    planet = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mv-md'>
            <Col xs>
              <div className={classes.Planet}>Planet  {props.planet.name}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  return (
    <div>
      { planet }
    </div>
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