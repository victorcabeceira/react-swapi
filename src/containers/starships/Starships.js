import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Loader from '../../components/UI/Loader/Loader';
// import Pagination from '../../components/Navigation/Pagination/Pagination';
import * as actions from '../../store/actions/index';
import classes from './Starships.module.css';

import { getIdFromUrl, filterCollection, randomRgbaGenerator } from '../../shared/utility';

import sun from '../../assets/images/planets/sun.png';
import venus from '../../assets/images/planets/venus.png';
import mercury from '../../assets/images/planets/mercury.png';
import earth from '../../assets/images/planets/earth.png';
import moon from '../../assets/images/planets/moon.png';
import mars from '../../assets/images/planets/mars.png';
import jupiter from '../../assets/images/planets/jupiter.png';
import saturn from '../../assets/images/planets/saturn.png';
import neptune from '../../assets/images/planets/neptune.png';
import uranus from '../../assets/images/planets/uranus.png';

const starships = props => {
  useEffect(() => {
    props.onFetchStarships(props.starships.page);
  }, [props.starships.page]);

  const starshipsImgArray = [sun, venus, mercury, earth, moon, mars, jupiter, saturn, neptune, uranus];

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
          {props.starships.results.map(starship => {
              const wantedProperties = ['name', 'model', 'passengers', 'starship_class', 'crew'];
              const filteredStarship = filterCollection(starship, wantedProperties, true);
              const starshipUrlId = getIdFromUrl(starship.url);

              return (
                <Col xs={5} className="m-md" key={starshipUrlId}>
                  <NavLink
                    to={`/starships/${starshipUrlId}`}
                    key={starshipUrlId}
                    style={{ textDecoration: 'none', color: '#E8E8E8' }}
                  >
                    <Card style={{
                      backgroundImage: `
                        url(${starshipsImgArray[starship.randomImgNumber]}),
                        linear-gradient(
                          ${randomRgbaGenerator(80)},
                          rgba(0,0,0,0.3),
                          rgba(255, 255, 255, 0.8))
                      `,
                      backgroundSize: 'cover',
                    }}>
                      <CardActionArea>
                        <CardContent>
                          <div className={classes.CardContentTitle}>
                            Starship {starship.name}
                          </div>
                          {filteredStarship.map(fp => {
                            let property = fp[0].charAt(0).toUpperCase() + fp[0].slice(1)
                            property = property.replace('_', ' ')
                            let value = Array.isArray(fp[1]) ? fp[1].length : fp[1];
                            return (
                              <div key={`${starshipUrlId[0]}_${fp[0]}`} className={classes.CardContent}>
                                <div className={classes.ContentProperty}>{property} : </div>
                                <div className={classes.ContentData}>{value}</div>
                              </div>
                            )
                          })}
                        </CardContent>
                      </CardActionArea>
                    </Card>
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