import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './ExternalLink.module.css';

const externalLink = props => {
  let link = null;

  if (props.isIcon) {
    link = (
      <a
        className={classes.Link}
        title={props.title}
        href={props.href}
      >
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size}
          color={props.color}
        />
      </a>
    )
  } else if (props.isImage) {
    link = (
      <a
        className={classes.Link}
        title={props.title}
        href={props.href}
      >
        <img src={props.src} alt={props.alt} />
      </a>
    )
  } else {
    link = (
      <a
        className={classes.Link}
        title={props.title}
        href={props.href}
        style={{ ...props.style }}
      >
        {props.children || props.title}
      </a>
    )
  }

  return (
    <div>
      {link}
    </div>
  )
}

export default externalLink