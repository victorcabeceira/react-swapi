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

import classes from './Vehicles.module.css';

import vehicle1 from '../../assets/images/vehicles/1.png';
import vehicle2 from '../../assets/images/vehicles/2.png';
import vehicle3 from '../../assets/images/vehicles/3.png';
import vehicle4 from '../../assets/images/vehicles/4.png';

const vehicles = props => {
  useEffect(() => {
    props.onFetchVehicles(props.vehicles.page);
  }, [props.vehicles.page]);

  const vehiclesImgArray = [vehicle1, vehicle2, vehicle3, vehicle4];

  let vehicles = <div><Loader style={{ background: '#FFD700' }} /></div>
  let pagination = <div className={classes.PaginationLoading}>Wait while the vehicles are loaded. . .</div>

  if (!props.loading) {
    vehicles = (
      <Row style={{ margin: 0 }} middle='xs' center='xs'>
        <Col xs>
          <Row middle='xs' center='xs' className='mt-xl'>
            <Col xs>
              <div className={classes.Vehicles}>Vehicles count : {props.vehicles.count}</div>
            </Col>
          </Row>

          <Row middle='xs' center='xs' className='mt-sm'>
            {props.vehicles.results.map(vehicle => {
              const wantedProperties = ['name', 'model', 'passengers', 'vehicle_class', 'crew'];
              const filteredVehicle = filterCollection(vehicle, wantedProperties, true);
              const vehicleUrlId = getIdFromUrl(vehicle.url);

              return (
                <Col xs={10} md={5} className={`${classes.VehiclesCol} m-md`} key={vehicleUrlId}>
                  <NavLink
                    to={`/vehicles/${vehicleUrlId}`}
                    key={vehicleUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <CustomCard
                      collection='Vehicle'
                      collectionImgArray={vehiclesImgArray}
                      collectionImgNumber={vehicle.randomImgNumber}
                      filteredCollection={filteredVehicle}
                      objectId={vehicleUrlId}
                      title={vehicle.name}
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
          count={props.vehicles.count}
          page={props.vehicles.page}
          onClick={(page) => props.onVehiclesPageChange(page)}
        />
      </div>
    )
  }

  return (
    <div className={classes.MainVehicles}>
      {vehicles}
      {pagination}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles.vehicles,
    loading: state.vehicles.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchVehicles: (page) => dispatch(actions.fetchVehicles(page)),
    onVehiclesPageChange: (page) => dispatch(actions.fetchVehicles(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(vehicles, axios));