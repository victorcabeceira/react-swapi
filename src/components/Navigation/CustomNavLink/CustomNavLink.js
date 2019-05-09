import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import classes from './CustomNavLink.module.css';

const customNavLink = props => (
  <NavLink
    to={props.customTo}
    key={props.customKey}
    style={{ textDecoration: 'none', color: '#E8E8E8' }}
  >
    <Button variant='outlined' color='inherit' style={{ ...props.style }} className={classes.Button}>
      {props.divContent}
    </Button>
  </NavLink>
)

export default customNavLink;