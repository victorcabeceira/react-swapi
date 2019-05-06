import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { faHome, faGlobe, faFighterJet, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from './NavigationItem/NavigationItem';
// import classes from './NavigationItems.module.css'

const navigationItems = (props) => {
  let navigationItemsDiv = <div></div>;
  const navigationItemsArray = [
    {
      title: 'Starships',
      icon: faSpaceShuttle,
      size: 'lg',
      color: '#8C8C8C',
      to: '/starships'
    },
    {
      title: 'Vehicles',
      icon: faFighterJet,
      size: 'lg',
      color: '#8C8C8C',
      to: '/vehicles'
    },
    {
      title: 'Planets',
      icon: faGlobe,
      size: 'lg',
      color: '#8C8C8C',
      to: '/planets'
    }
  ]

  if (props.mobile) {
    navigationItemsArray.unshift({
      title: 'Home',
      icon: faHome,
      size: 'lg',
      color: '#8C8C8C',
      to: '/'
    })
    navigationItemsDiv = (
      <div>
        {navigationItemsArray.map((item, id) => {
          return (
            <NavigationItem
              key={id}
              title={item.title}
              icon={item.icon}
              size={item.size}
              color={item.color}
              to={item.to}
              {...props}
            />
          )
        })
        }
      </div>
    )
  } else {
    navigationItemsDiv = (
      <Row end="xs" middle="xs" between="xs">
        {navigationItemsArray.map((item, id) => {
          return (
            <Col xs key={id}>
              <NavigationItem
                title={item.title}
                icon={item.icon}
                size={item.size}
                color={item.color}
                to={item.to}
                {...props}
              />
            </Col>
          )
        })}
      </Row>
    )
  }

  return (
    <div>
      {navigationItemsDiv}
    </div>
  )
}

export default navigationItems;