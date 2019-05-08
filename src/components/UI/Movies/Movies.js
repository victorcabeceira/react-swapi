import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';

import Card from '@material-ui/core/Card';

import filmsImage from '../../../assets/images/films';

import classes from './Movies.module.css';

const card = props => {
  const movie = (m, index) => {
    const imgStyle = {
      backgroundImage: `url(${filmsImage[index]})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
    }
    return (
      <NavLink
        key={m.id}
        to={`/films/${m.id}`}
        style={{ textDecoration: 'none', color: '#E8E8E8' }}
      >
        <Card className={classes.Card}>
          <Row className={classes.MovieRow}>
            <Col xs={12} md={3} className={classes.MovieImage}>
              <div style={imgStyle} />
            </Col>
            <Col xs={12} md={8}>
              <Row className={classes.MovieName}>{m.name}</Row>
              <Row className={classes.MovieDescription}>{m.description}</Row>
            </Col>
          </Row>
        </Card>
      </NavLink>
    )
  }

  return (
    <div>
      {
        props.content.map((c, index) => (
          <div key={c.id}>
            {movie(c, index)}
          </div>
        ))
      }
    </div>
  )
}


export default card;