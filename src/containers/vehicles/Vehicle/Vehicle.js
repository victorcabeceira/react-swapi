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

import vehicle1 from '../../../assets/images/vehicles/1.png';
import vehicle2 from '../../../assets/images/vehicles/2.png';
import vehicle3 from '../../../assets/images/vehicles/3.png';
import vehicle4 from '../../../assets/images/vehicles/4.png';

const vehicle = props => {
  useEffect(() => {
    const vehicleUrlId = getIdFromUrl(props.match.url);
    const parsedVehicleUrlId = vehicleUrlId <= 1 ? 1 : (vehicleUrlId > 37 ? 37 : vehicleUrlId);

    if (vehicleUrlId > 37 || vehicleUrlId < 1) {
      props.history.push(`/vehicles/${parsedVehicleUrlId}`);
    }

    props.onFetchVehicle(parsedVehicleUrlId);
  }, [props.match.url]);

  const unwantedProperties = ['randomImgNumber', 'url', 'created', 'edited'];
  const filteredVehicle = filterCollection(props.vehicle, unwantedProperties, false);
  const vehicleUrlId = props.match.params.id;
  const vehiclesImgArray = [vehicle1, vehicle2, vehicle3, vehicle4];

  let vehicle = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    vehicle = (
      <CustomCard
        collection='Vehicle'
        collectionImgArray={vehiclesImgArray}
        collectionImgNumber={props.vehicle.randomImgNumber}
        filteredCollection={filteredVehicle}
        objectId={vehicleUrlId}
        title={props.vehicle.name}
        singleData
      />
    )
  }

  const actualVehicleId = props.match.params.id;
  const previousVehicleId = actualVehicleId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextVehicleId = actualVehicleId >= 37 ? 37 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, height: '100vh', minHeight: '600px', maxHeight: '1024px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/vehicles/${previousVehicleId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous vehicle'
          minId={1}
          actualId={parseInt(actualVehicleId)}
        />
      </Col>

      <Col xs={8}>
        {vehicle}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/vehicles/${nextVehicleId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next vehicle'
          maxId={37}
          actualId={parseInt(actualVehicleId)}
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    vehicle: state.vehicle.vehicle,
    loading: state.vehicle.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchVehicle: (id) => dispatch(actions.fetchVehicle(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(vehicle, axios));