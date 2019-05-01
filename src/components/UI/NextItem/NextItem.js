import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@material-ui/core/Tooltip';

const nextItem = props => (
  <Tooltip title={props.title}>
    <NavLink
      to={props.to}
      style={props.style}
    >
      <FontAwesomeIcon
        icon={props.previous ? faChevronLeft : faChevronRight}
        size={props.size}
        color={props.color}
      />
    </NavLink>
  </Tooltip>
)

export default nextItem