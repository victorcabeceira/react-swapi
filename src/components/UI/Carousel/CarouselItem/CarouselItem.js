import React from 'react';
import { NavLink } from 'react-router-dom';

import { Row, Col } from 'react-flexbox-grid';

import classes from './CarouselItem.module.css';

const carousel = props => {
  const backgroundImage = {
    backgroundImage: `url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <NavLink
      to={props.to}
      style={{ textDecoration: 'none', color: '#E8E8E8', width: '100%', height: '100%' }}
    >
      <Row center='xs' className={classes.CarouselItemRow}>
        <Col xs={12} className={classes.CarouselItemCol}>
          <div className={classes.ItemText}>{props.text}</div>
          <div className={classes.BackGroundImage} style={backgroundImage} />
        </Col>
      </Row>
    </NavLink>
  )
}

export default carousel;
