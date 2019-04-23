import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { faGlobe, faFighterJet, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from './NavigationItem/NavigationItem';
// import classes from './NavigationItems.module.css'

const navigationItems = (props) => (
  <Row end="xs" middle="xs">
    <Col xs>
      <NavigationItem
        title='Spaceships'
        icon={faSpaceShuttle}
        size='lg'
        color='#8C8C8C'
        to={'/spaceships'}
        {...props}
      // className={props.active ? classes.active : null}
      />
    </Col>

    <Col xs>
      <NavigationItem
        title='Vehicles'
        icon={faFighterJet}
        size='lg'
        color='#8C8C8C'
        to={'/vehicles'}
        {...props}
      // className={props.active ? classes.active : null}
      />
    </Col>

    <Col xs>
      <NavigationItem
        title='Planets'
        icon={faGlobe}
        size='lg'
        color='#8C8C8C'
        to={'/planets'}
        {...props}
      // className={props.active ? classes.active : null}
      />
    </Col>
  </Row>
)

export default navigationItems;