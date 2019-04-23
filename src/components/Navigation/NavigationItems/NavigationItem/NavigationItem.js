import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@material-ui/core/Tooltip';

// import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
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
          color={props.color}
        />
      </NavLink>
    </Tooltip>
  </Fragment>
)

export default navigationItem;