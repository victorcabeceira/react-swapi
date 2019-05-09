import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const externalLink = props => {
  let link = null;

  if (props.isIcon) {
    link = (
      <a
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
        title={props.title}
        href={props.href}
      >
        <img src={props.src} alt={props.alt} />
      </a>
    )
  } else {
    link = (
      <a
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