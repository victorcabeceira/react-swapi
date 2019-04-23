import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { faGlobe, faFighterJet } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from './NavigationItem/NavigationItem';
// import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
  <Row end="xs" middle="xs">
    <Col xs>
      <NavigationItem
        title='Spaceships'
        icon={faFighterJet}
        size='lg'
        color='#aaa'
        to={'/spaceships'}
      // className={props.active ? classes.active : null}
      />
    </Col>
    <Col xs>
      <NavigationItem
        title='Planets'
        icon={faGlobe}
        size='lg'
        color='#aaa'
        to={'/planets'}
      // className={props.active ? classes.active : null}
      />
    </Col>
  </Row>
)

export default navigationItems;