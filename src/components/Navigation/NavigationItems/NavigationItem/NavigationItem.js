import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@material-ui/core/Tooltip';

import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
  const { to, location } = props;
  const { pathname } = location;
  const active = (pathname === to);

  console.log('[navitem] props', props);

  let navItem = (
    <div className={classes.NavLink}>
      <Tooltip title={props.title}>
        <NavLink
          to={props.to}
          exact={props.exact}
          onClick={() => console.log(`${props.title} was clicked`)}
        >
          <FontAwesomeIcon
            icon={props.icon}
            size={props.size}
            className={classes.NavigationItemFAI}
            color={active ? '#FFD700' : props.color}
          />
        </NavLink>
      </Tooltip>
    </div>
  )

  if (props.mobile) {
    navItem = (
      <Row center='xs' middle='xs' className={classes.NavItemRow}>
        <NavLink
          to={props.to}
          exact={props.exact}
          style={{ textDecoration: 'none', color: '#E8E8E8' }}
        >
          <div className={classes.NavLinkMainDiv}>
            <Col xs={4} className={classes.NavItemIconCol}>
              <FontAwesomeIcon
                icon={props.icon}
                size={props.size}
                className={`${classes.NavigationItemFAI} ${classes.NavItemIcon}`}
                color={active ? '#FFD700' : props.color}
              />
            </Col>
            <Col xs={8} className={classes.NavItemTitle}>
              {props.title}
            </Col>
          </div>

        </NavLink>
      </Row>
    )
  }

  return (
    <div>
      {navItem}
    </div>
  )
}

export default navigationItem;