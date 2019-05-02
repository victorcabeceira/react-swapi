import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Tooltip from '@material-ui/core/Tooltip';

import { getCollectionFromUrl } from '../../../shared/utility';

const nextItem = props => {
  const disabledIcon = props.actualId === props.minId || props.actualId === props.maxId ? true : false;
  let customStyle = {}
  let tooltipBoundaries = '';

  if (disabledIcon) {
    customStyle = { cursor: 'not-allowed', opacity: 0.6 };
    if (props.actualId === props.minId) {
      tooltipBoundaries = 'This is the first';
    } else if (props.actualId === props.maxId) {
      tooltipBoundaries = 'This is the last';
    }
  }

  return (
    <div>
      {disabledIcon ? (
        <Tooltip title={`${tooltipBoundaries} ${getCollectionFromUrl(props.to).slice(0, -1)}`}>
          <FontAwesomeIcon
            icon={props.previous ? faChevronLeft : faChevronRight}
            size={props.size}
            color={props.color}
            style={customStyle}
          />
        </Tooltip>
      ) : (
          <Tooltip title={props.title}>
            <NavLink
              to={props.to}
              style={{ ...customStyle, ...props.style }}
            >
              <FontAwesomeIcon
                icon={props.previous ? faChevronLeft : faChevronRight}
                size={props.size}
                color={props.color}
              />
            </NavLink>
          </Tooltip>
        )
      }
    </div>

  )
}

export default nextItem