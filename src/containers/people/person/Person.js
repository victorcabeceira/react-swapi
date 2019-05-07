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

import peopleImgArray from '../../../assets/images/people';

const person = props => {
  useEffect(() => {
    const personUrlId = getIdFromUrl(props.match.url)
    const parsedPersonUrlId = personUrlId <= 1 ? 1 : (personUrlId > 87 ? 87 : personUrlId);

    if (personUrlId > 87 || personUrlId < 1) {
      props.history.push(`/people/${parsedPersonUrlId}`);
    }

    props.onFetchPerson(parsedPersonUrlId);
  }, [props.match.url]);

  const unwantedProperties = ['randomImgNumber', 'url', 'created', 'edited'];
  const filteredPerson = filterCollection(props.person, unwantedProperties, false);
  const personUrlId = props.match.params.id;

  let person = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    person = (
      <CustomCard
        collectionImgArray={peopleImgArray}
        collectionImgNumber={props.person.randomImgNumber}
        filteredCollection={filteredPerson}
        objectId={personUrlId}
        title={props.person.name}
        singleData
      />
    )
  }

  const actualPersonId = props.match.params.id;
  const previousPersonId = actualPersonId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextPersonId = actualPersonId >= 87 ? 87 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, height: '100vh', minHeight: '600px', maxHeight: '1024px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/people/${previousPersonId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous person'
          minId={1}
          actualId={parseInt(actualPersonId)}
        />
      </Col>

      <Col xs={8}>
        {person}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/people/${nextPersonId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next person'
          maxId={87}
          actualId={parseInt(actualPersonId)}
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    person: state.person.person,
    loading: state.person.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPerson: (id) => dispatch(actions.fetchPerson(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(person, axios));