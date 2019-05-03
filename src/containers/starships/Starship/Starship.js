import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Loader from '../../../components/UI/Loader/Loader';
import NextItem from '../../../components/UI/NextItem/NextItem';
import CustomCard from '../../../components/UI/CustomCard/CustomCard';
import * as actions from '../../../store/actions/index';

import { filterCollection, getIdFromUrl } from '../../../shared/utility';

import starship1 from '../../../assets/images/starships/1.png';
import starship2 from '../../../assets/images/starships/2.png';
import starship3 from '../../../assets/images/starships/3.png';
import starship4 from '../../../assets/images/starships/4.png';
import starship5 from '../../../assets/images/starships/5.png';
import starship6 from '../../../assets/images/starships/6.png';

const starship = props => {
  useEffect(() => {
    const starshipUrlId = getIdFromUrl(props.match.url);
    const parsedStarshipUrlId = starshipUrlId <= 1 ? 1 : (starshipUrlId > 37 ? 37 : starshipUrlId);

    if (starshipUrlId > 37 || starshipUrlId < 1) {
      props.history.push(`/starships/${parsedStarshipUrlId}`);
    }

    props.onFetchStarship(parsedStarshipUrlId);
  }, [props.match.url]);

  const unwantedProperties = ['randomImgNumber', 'url', 'created', 'edited'];
  const filteredStarship = filterCollection(props.starship, unwantedProperties, false);
  const starshipUrlId = props.match.params.id;
  const starshipsImgArray = [starship1, starship2, starship3, starship4, starship5, starship6];

  let starship = <div><Loader style={{ background: '#FFD700' }} /></div>

  if (!props.loading) {
    starship = (
      <CustomCard
        collection='Starship'
        collectionImgArray={starshipsImgArray}
        collectionImgNumber={props.starship.randomImgNumber}
        filteredCollection={filteredStarship}
        objectId={starshipUrlId}
        title={props.starship.name}
        singleData
      />
    )
  }

  const actualStarshipId = props.match.params.id;
  const previousStarshipId = actualStarshipId <= 1 ? 1 : parseInt(props.match.params.id, 10) - 1;
  const nextStarshipId = actualStarshipId >= 37 ? 37 : parseInt(props.match.params.id, 10) + 1;

  return (
    <Row style={{ margin: 0, height: '100vh', minHeight: '600px', maxHeight: '1024px' }} middle='xs' center='xs'>
      <Col xs={2}>
        <NextItem
          to={`/starships/${previousStarshipId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          previous
          size='lg'
          color='#FFFFFF'
          title='Previous starship'
          minId={1}
          actualId={parseInt(actualStarshipId)}
        />
      </Col>

      <Col xs={8}>
        {starship}
      </Col>

      <Col xs={2}>
        <NextItem
          to={`/starships/${nextStarshipId}/`}
          style={{ textDecoration: 'none', color: '#FFFFFF' }}
          size='lg'
          color='#FFFFFF'
          title='Next starship'
          maxId={37}
          actualId={parseInt(actualStarshipId)}
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    starship: state.starship.starship,
    loading: state.starship.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchStarship: (id) => dispatch(actions.fetchStarship(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(starship);