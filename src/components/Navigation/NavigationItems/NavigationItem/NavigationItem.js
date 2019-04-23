import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@material-ui/core/Tooltip';

import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
  const { to, location } = props;
  const { pathname } = location;
  const active = (pathname === to);

  return (
    <Fragment>
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
            color={active ? '#E8E8E8' : props.color}
          />
        </NavLink>
      </Tooltip>
    </Fragment>
  )
}

export default navigationItem;