import React from 'react';
import { NavLink } from 'react-router-dom';

const customNavLink = props => (
  <NavLink
    to={props.customTo}
    key={props.customKey}
    style={{ textDecoration: 'none', color: '#E8E8E8', ...props.style }}
  >
    {' '}{props.divContent}
  </NavLink>
)

export default customNavLink;